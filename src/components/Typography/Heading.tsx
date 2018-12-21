import * as React from 'react';
import { Platform, Text, TextProps, TextStyle } from 'react-native';

import { HeadingSize, ITheme } from '../../theme/ThemeInterface';
import withTheme from '../../theme/withTheme';
import { TextAlign } from './types';

export interface IHeadingProps {
  size?: HeadingSize;
  theme: ITheme;
  textAlign?: TextAlign;
  accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6;

  dangerouslySetInlineStyle?: TextStyle;
}

const HeadingBase = (props: IHeadingProps & TextProps) => {
  const {
    accessibilityLevel,
    theme,
    size = 'medium',
    textAlign,
    ...textProps
  } = props;

  const { headingStyle } = theme.getHeadingStyles(size);

  return (
    <Text
      // @ts-ignore
      accessibilityRole={Platform.OS === 'web' ? 'heading' : 'none'}
      aria-level={accessibilityLevel} // Web
      style={[{ textAlign }, headingStyle]}
      {...textProps}
    />
  );
};

export const Heading = withTheme(HeadingBase);
export default Heading;
