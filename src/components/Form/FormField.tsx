import * as React from 'react';

import { Box } from '../Layout';
import { Label, Text } from '../Typography';

export interface FormFieldProps {
  error?: string;
  label?: string;
  description?: string;
}

const FormField = (props: FormFieldProps) => {
  const {
    label,
    error,
    // @ts-ignore
    children,
    description,
    ...passThroughProps
  } = props;

  return (
    <Box>
      {label && (
        <Box marginBottom={4}>
          <Label>{label}</Label>
        </Box>
      )}
      <Box marginBottom={4}>
        {React.cloneElement(children, passThroughProps)}
      </Box>
      {error && (
        <Box marginBottom={4}>
          <Text color="danger">{error}</Text>
        </Box>
      )}
      {description && <Text>{description}</Text>}
    </Box>
  );
};

export default FormField;