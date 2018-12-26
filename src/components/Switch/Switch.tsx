import * as React from 'react';
import {
  Animated,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import { Icon } from '../../icons';
import { ITheme, withTheme } from '../../theme';

/* Copy pasted from https://github.com/react-native-seoul/react-native-switch-toggle */
export interface ISwitchProps extends TouchableOpacityProps {
  isSwitchedOn?: boolean;
  isDisabled?: boolean;
  onChange?: () => void;
  onIcon?: React.ReactNode;
  offIcon?: React.ReactNode;
  duration?: number;
  theme: ITheme;
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: {
    containerStyle: ViewStyle;
    circleStyle: ViewStyle;
  };
}

export interface ISwitchState {
  animXValue: Animated.Value;
  circlePosXEnd: number;
  circlePosXStart: number;
}

class SwitchBase extends React.Component<ISwitchProps, ISwitchState> {
  public static defaultProps = {
    backgroundColorOff: 'rgb(215,215,215)',
    backgroundColorOn: 'rgb(227,227,227)',
    circleColorOff: 'white',
    circleColorOn: 'rgb(102,134,205)',
    duration: 300,

    circleStyle: {
      backgroundColor: 'white',
      borderRadius: 15,
      height: 30,
      width: 30,
    },
    containerStyle: {
      backgroundColor: 'rgb(227,227,227)',
      borderRadius: 18,
      height: 36,
      padding: 3,
      width: 72,
    },
    isSwitchedOn: false,
    onChange: () => null,
  };

  constructor(props: ISwitchProps) {
    super(props);
    const { theme } = props;
    const { circleStyle, containerStyle } = theme.getSwitchStyles();

    const endPosition =
      containerStyle.width - (circleStyle.width + containerStyle.padding * 2);

    this.state = {
      animXValue: new Animated.Value(props.isSwitchedOn ? 1 : 0),
      circlePosXEnd: endPosition,
      circlePosXStart: 0,
    };
  }

  // TODO: When converting to hooks, we can use the follow API:
  // https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops
  public componentWillReceiveProps(newProps: ISwitchProps) {
    if (newProps.isSwitchedOn !== this.props.isSwitchedOn) {
      this.runAnimation();
    }
  }

  public handleOnPress = () => {
    const { onChange } = this.props;
    this.runAnimation();

    if (onChange) onChange();
  };

  public runAnimation = () => {
    const { duration, isSwitchedOn } = this.props;

    const animValue = {
      duration,
      fromValue: isSwitchedOn ? 1 : 0,
      toValue: isSwitchedOn ? 0 : 1,
    };

    Animated.timing(this.state.animXValue, animValue).start();
  };

  public render() {
    const {
      onIcon,
      offIcon,
      theme,
      isSwitchedOn,
      dangerouslySetInlineStyle,
      ...touchableOpacityProps
    } = this.props;
    const { animXValue, circlePosXStart, circlePosXEnd } = this.state;

    const {
      circleStyle,
      containerStyle,
      backgroundColorOff,
      backgroundColorOn,
      circleColorOff,
      circleColorOn,
    } = theme.getSwitchStyles();

    return (
      <TouchableOpacity
        accessible
        accessibilityLabel="switch"
        onPress={this.handleOnPress}
        activeOpacity={1}
        {...touchableOpacityProps}
      >
        <Animated.View
          style={[
            containerStyle,
            dangerouslySetInlineStyle &&
              dangerouslySetInlineStyle.containerStyle,
            {
              backgroundColor: animXValue.interpolate({
                inputRange: [0, 1],
                outputRange: [backgroundColorOff, backgroundColorOn],
              }),
            },
          ]}
        >
          <Animated.View
            style={[
              circleStyle,
              dangerouslySetInlineStyle &&
                dangerouslySetInlineStyle.circleStyle,
              {
                backgroundColor: animXValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [circleColorOff, circleColorOn],
                }),
              },
              {
                transform: [
                  {
                    translateX: animXValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [circlePosXStart, circlePosXEnd],
                    }),
                  },
                ],
              },
            ]}
          >
            {isSwitchedOn
              ? onIcon || (
                  <Icon
                    name="check"
                    size={20}
                    color={theme.themeVariables.colors.text.primary}
                  />
                )
              : offIcon || (
                  <Icon
                    name="x"
                    size={20}
                    color={theme.themeVariables.colors.text.default}
                  />
                )}
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

export const Switch = withTheme(SwitchBase);
export default Switch;