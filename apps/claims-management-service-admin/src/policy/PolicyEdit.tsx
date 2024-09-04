import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PolicyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="policyAmount" source="policyAmount" />
        <DateTimeInput label="policyExpiryDate" source="policyExpiryDate" />
        <TextInput label="policyId" source="policyId" />
        <TextInput label="policyName" source="policyName" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
