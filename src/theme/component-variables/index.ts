import { IComponentVariables, IThemeVariables } from '../ThemeInterface';
import { getAvatarVariables } from './avatarVariables';
import { getBadgeVariables } from './badgeVariables';
import { getButtonVariables } from './buttonVariables';
import { getCheckboxVariables } from './checkboxVariables';
import { getDialogVariables } from './dialogVariables';
import { getDividerVariables } from './dividerVariables';
import { getHeadingVariables } from './headingVariables';
import { getParagraphVariables } from './paragraphVariables';
import { getPickerVariables } from './pickerVariables';
import { getSelectListVariables } from './selectListVariables';
import { getSwitchVariables } from './switchVariables';
import { getTextInputVariables } from './textInputVariables';
import { getTextVariables } from './textVariables';
import { getToastVariables } from './toastVariables';

export const getComponentVariables = (
  themeVariables: IThemeVariables,
): IComponentVariables => {
  return {
    avatar: getAvatarVariables(themeVariables),
    badge: getBadgeVariables(themeVariables),
    button: getButtonVariables(themeVariables),
    checkbox: getCheckboxVariables(themeVariables),
    dialog: getDialogVariables(themeVariables),
    divider: getDividerVariables(themeVariables),
    heading: getHeadingVariables(themeVariables),
    paragraph: getParagraphVariables(themeVariables),
    picker: getPickerVariables(themeVariables),
    selectList: getSelectListVariables(themeVariables),
    switch: getSwitchVariables(themeVariables),
    text: getTextVariables(themeVariables),
    textInput: getTextInputVariables(themeVariables),
    toast: getToastVariables(themeVariables),
  };
};