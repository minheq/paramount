import * as React from 'react';

import { Theme, withTheme } from '../../theme';
import { SelectListItemBaseProps } from './SelectListItem';

export interface SelectListProps {
  children: Array<React.ReactElement<SelectListItemBaseProps>>;
  selectedValue: string | string[];
  isMulti?: boolean;
  theme: Theme;
  onValueChange: (itemValue: string | string[], itemIndex: number) => void;
}

const SelectListBase = (props: SelectListProps): any => {
  const { selectedValue, onValueChange, isMulti, children } = props;

  const handleOnPress = (
    itemValue: string,
    itemIndex: number,
    isSelected: boolean,
  ) => {
    if (isMulti && Array.isArray(selectedValue)) {
      if (isSelected) {
        onValueChange(
          selectedValue.filter(val => val !== itemValue),
          itemIndex,
        );
      } else {
        onValueChange(selectedValue.concat(itemValue), itemIndex);
      }
    } else {
      onValueChange(itemValue, itemIndex);
    }
  };

  return React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    // @ts-ignore
    const selectListItem = child as React.ReactElement<SelectListItemBaseProps>;

    const isSelected =
      isMulti && Array.isArray(selectedValue)
        ? selectedValue.some(selVal => selVal === selectListItem.props.value)
        : selectedValue === selectListItem.props.value;

    return React.cloneElement(selectListItem, {
      index,
      isSelected,
      onSelect: handleOnPress,
    });
  });
};

export const SelectList = withTheme(SelectListBase);
export default SelectList;
