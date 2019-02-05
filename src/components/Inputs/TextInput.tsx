import * as React from 'react';
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Icon } from '../../icons';
import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetTextInputStyles,
  getTextInputStyles,
  TextInputSize,
  TextInputStyles,
} from './TextInput.styles';

export interface TextInputProps extends RNTextInputProps {
  theme: Theme;
  name?: string;
  size?: TextInputSize;
  isDisabled?: boolean;
  isClearable?: boolean;
  onClear?: () => void;
  isInvalid?: boolean;
  getStyles?: ReplaceReturnType<
    GetTextInputStyles,
    DeepPartial<TextInputStyles>
  >;
}

class TextInputBase extends React.Component<TextInputProps> {
  public inputRef = React.createRef<RNTextInput>();

  public getStyles = () => {
    const {
      isDisabled = false,
      isInvalid = false,
      isClearable = false,
      theme,
      size = 'medium',
      getStyles,
    } = this.props;

    return mergeStyles(getTextInputStyles, getStyles)(
      {
        isClearable,
        isDisabled,
        isInvalid,
        size,
      },
      theme,
    );
  };

  public handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const { isDisabled = false, onFocus } = this.props;
    const { inputStyle, focusedStyle } = this.getStyles();

    if (!isDisabled && this.inputRef.current) {
      this.inputRef.current.setNativeProps({
        style: [inputStyle, focusedStyle],
      });
    }

    if (onFocus) {
      onFocus(e);
    }
  };

  public handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const { onBlur } = this.props;

    const { inputStyle } = this.getStyles();

    if (this.inputRef.current) {
      this.inputRef.current.setNativeProps({
        style: [inputStyle],
      });
    }

    if (onBlur) {
      onBlur(e);
    }
  };

  public handleOnClear = () => {
    const { onChangeText, onClear } = this.props;
    if (this.inputRef.current) {
      this.inputRef.current.clear();
      this.inputRef.current.focus();
    }

    if (onChangeText) onChangeText('');
    if (onClear) onClear();
  };

  public render() {
    const {
      isDisabled = false,
      isInvalid = false,
      isClearable = false,
      size = 'medium',
      theme,
      value,
      getStyles,
      name,
      onClear,
      ...textInputProps
    } = this.props;

    const {
      clearContainerStyle,
      containerStyle,
      inputStyle,
      placeholderTextColor,
    } = this.getStyles();

    return (
      <View style={containerStyle}>
        {/*
        // @ts-ignore: name prop does not exist, but on the web it is useful for browser autofill */}
        <RNTextInput
          ref={this.inputRef}
          style={inputStyle}
          onFocus={e => this.handleOnFocus(e)}
          onBlur={e => this.handleOnBlur(e)}
          editable={!isDisabled}
          placeholderTextColor={placeholderTextColor}
          value={value}
          name={name}
          {...textInputProps}
        />
        {isClearable && !!value && (
          <TouchableOpacity
            style={clearContainerStyle}
            onPress={this.handleOnClear}
          >
            <Icon name="x" size={24} color={theme.colors.text.default} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export const TextInput = withTheme(TextInputBase);
export default TextInput;
