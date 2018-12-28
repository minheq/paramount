import * as React from 'react';
import {
  Dimensions,
  ScaledSize,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { POSITION, Position } from '../../constants';
import { Theme, withTheme } from '../../theme';
import { PopoverStyles } from '../../theme/style-getters/getPopoverStyles';
import Modal from '../Dialog/Modal';
import { LayoutMeasure, LayoutMeasurements } from '../Helpers';
import { getPopoverArrow } from './getPopoverArrow';

export interface PopoverProps {
  theme: Theme;
  onTap?: () => void;
  onClose?: () => void;
  children: React.ReactNode;
  content: React.ReactNode;
  /**
   * Popover uses window height to calculate its position, and whether it should flip to top if it at the bottom (So that it does not pop up outside the window height).
   * However, sometimes window.height is shorter than the parent container, unnecessarily flipping it to `top`. To fix this behavior,
   * you can pass in height of the parent so that it will use that instead of window's height
   */
  parentHeight?: number;
  offset?: number;
  isVisible?: boolean;
  position?: Position;
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: Partial<PopoverStyles>;
}

const resolveCorrectPosition = (position: Position) => ({
  shouldFlipBottomToTop,
  shouldFlipLeftToRight,
  shouldFlipRightToLeft,
  shouldFlipTopToBottom,
}: {
  shouldFlipBottomToTop: boolean;
  shouldFlipLeftToRight: boolean;
  shouldFlipRightToLeft: boolean;
  shouldFlipTopToBottom: boolean;
}) => {
  let newPosition = position;

  if (position.includes(POSITION.BOTTOM) && shouldFlipBottomToTop) {
    newPosition = newPosition.replace(
      POSITION.BOTTOM,
      POSITION.TOP,
    ) as Position;
  }

  if (position.includes(POSITION.TOP) && shouldFlipTopToBottom) {
    newPosition = newPosition.replace(
      POSITION.TOP,
      POSITION.BOTTOM,
    ) as Position;
  }

  if (position.includes(POSITION.LEFT) && shouldFlipLeftToRight) {
    newPosition = newPosition.replace(
      POSITION.LEFT,
      POSITION.RIGHT,
    ) as Position;
  }

  if (position.includes(POSITION.RIGHT) && shouldFlipRightToLeft) {
    newPosition = newPosition.replace(
      POSITION.RIGHT,
      POSITION.LEFT,
    ) as Position;
  }

  return newPosition;
};

const getPopoverPosition = (position: Position) => (
  screenLayout: ScaledSize,
) => (targetMeasurements: LayoutMeasurements) => (
  popoverMeasurements: LayoutMeasurements,
) => (offset: number) => {
  const newPosition = resolveCorrectPosition(position)({
    shouldFlipBottomToTop:
      popoverMeasurements.height + offset >
      screenLayout.height -
        targetMeasurements.pageY +
        targetMeasurements.height -
        offset,
    shouldFlipLeftToRight:
      position === POSITION.LEFT
        ? popoverMeasurements.width + offset > targetMeasurements.pageX - offset
        : popoverMeasurements.width + offset >
          screenLayout.width - targetMeasurements.pageX,
    shouldFlipRightToLeft:
      position === POSITION.RIGHT
        ? targetMeasurements.pageX +
            targetMeasurements.width +
            popoverMeasurements.width +
            offset >
          screenLayout.width - offset
        : targetMeasurements.pageX + targetMeasurements.width <
          popoverMeasurements.width,
    shouldFlipTopToBottom:
      popoverMeasurements.height + offset > targetMeasurements.pageY,
  });

  switch (newPosition) {
    case POSITION.TOP_LEFT:
      return {
        position: POSITION.TOP_LEFT,

        left: targetMeasurements.pageX,
        top: targetMeasurements.pageY - popoverMeasurements.height - offset,
      };
    case POSITION.TOP:
      return {
        position: POSITION.TOP,

        left: targetMeasurements.pageX,
        top: targetMeasurements.pageY - popoverMeasurements.height - offset,
        transform: [
          {
            translateX:
              -popoverMeasurements.width / 2 + targetMeasurements.width / 2,
          },
        ],
      };
    case POSITION.TOP_RIGHT:
      return {
        position: POSITION.TOP_RIGHT,

        left:
          targetMeasurements.pageX -
          popoverMeasurements.width +
          targetMeasurements.width,
        top: targetMeasurements.pageY - popoverMeasurements.height - offset,
      };
    case POSITION.LEFT:
      return {
        position: POSITION.LEFT,

        left: targetMeasurements.pageX - popoverMeasurements.width - offset,
        top: targetMeasurements.pageY,
        transform: [
          {
            translateY:
              -popoverMeasurements.height / 2 + targetMeasurements.height / 2,
          },
        ],
      };
    case POSITION.RIGHT:
      return {
        position: POSITION.RIGHT,

        left: targetMeasurements.pageX + targetMeasurements.width + offset,
        top: targetMeasurements.pageY,
        transform: [
          {
            translateY:
              -popoverMeasurements.height / 2 + targetMeasurements.height / 2,
          },
        ],
      };
    case POSITION.BOTTOM_RIGHT:
      return {
        position: POSITION.BOTTOM_RIGHT,

        left:
          targetMeasurements.pageX -
          popoverMeasurements.width +
          targetMeasurements.width,
        top: targetMeasurements.pageY + targetMeasurements.height + offset,
      };
    case POSITION.BOTTOM:
      return {
        position: POSITION.BOTTOM,

        left: targetMeasurements.pageX,
        top: targetMeasurements.pageY + targetMeasurements.height + offset,
        transform: [
          {
            translateX:
              -popoverMeasurements.width / 2 + targetMeasurements.width / 2,
          },
        ],
      };
    case POSITION.BOTTOM_LEFT:
      return {
        position: POSITION.BOTTOM_LEFT,

        left: targetMeasurements.pageX,
        top: targetMeasurements.pageY + targetMeasurements.height + offset,
      };
    default:
      return {
        position: POSITION.BOTTOM_RIGHT,
      };
  }
};

export interface PopoverState {
  popoverMeasurements: LayoutMeasurements;
  targetMeasurements: LayoutMeasurements;
}

class PopoverBase extends React.Component<PopoverProps, PopoverState> {
  constructor(props: PopoverProps) {
    super(props);
    this.state = {
      popoverMeasurements: {
        height: 0,
        pageX: 0,
        pageY: 0,
        width: 0,
        x: 0,
        y: 0,
      },
      targetMeasurements: {
        height: 0,
        pageX: 0,
        pageY: 0,
        width: 0,
        x: 0,
        y: 0,
      },
    };
  }

  public render() {
    const {
      theme,
      dangerouslySetInlineStyle,
      children,
      content,
      parentHeight,
      isVisible,
      onClose,
      position = POSITION.BOTTOM,
      offset = 14,
    } = this.props;
    const { popoverMeasurements, targetMeasurements } = this.state;
    const {
      popoverStyle,
      modalContainerStyle,
      overlayStyle,
    } = theme.getPopoverStyles();

    const windowDimensions = Dimensions.get('window');
    const {
      position: correctedPosition,
      ...popoverPositionStyle
    } = getPopoverPosition(position)({
      ...windowDimensions,
      height: parentHeight || windowDimensions.height,
    })(targetMeasurements)(popoverMeasurements)(offset);

    const renderArrow = getPopoverArrow(correctedPosition)(targetMeasurements)(
      theme,
    );

    return (
      <>
        <LayoutMeasure
          onMeasure={measurements =>
            this.setState({ targetMeasurements: measurements })
          }
        >
          {children}
        </LayoutMeasure>
        <Modal
          visible={isVisible}
          transparent
          onRequestClose={onClose}
          isScrollable
        >
          <View
            style={{
              ...modalContainerStyle,
              ...(dangerouslySetInlineStyle &&
                dangerouslySetInlineStyle.modalContainerStyle),
            }}
          >
            <LayoutMeasure
              style={{
                ...popoverStyle,
                ...(dangerouslySetInlineStyle &&
                  dangerouslySetInlineStyle.popoverStyle),
                ...popoverPositionStyle,
                // Hide flash mis-positioned content
                opacity:
                  popoverMeasurements.width === 0 ||
                  popoverMeasurements.height === 0
                    ? 0
                    : 1,
              }}
              onMeasure={measurements =>
                this.setState({ popoverMeasurements: measurements })
              }
            >
              {content}
              {renderArrow}
            </LayoutMeasure>
            <TouchableWithoutFeedback
              onPress={() => {
                if (onClose) onClose();
              }}
            >
              <View
                style={{
                  ...overlayStyle,
                  ...(dangerouslySetInlineStyle &&
                    dangerouslySetInlineStyle.overlayStyle),
                }}
              />
            </TouchableWithoutFeedback>
          </View>
        </Modal>
      </>
    );
  }
}

export const Popover = withTheme(PopoverBase);
export default Popover;
