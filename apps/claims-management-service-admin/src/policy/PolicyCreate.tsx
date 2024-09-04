import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PolicyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="policyAmount" source="policyAmount" />
        <DateTimeInput label="policyExpiryDate" source="policyExpiryDate" />
        <TextInput label="policyId" source="policyId" />
        <TextInput label="policyName" source="policyName" />
        <div />
      </SimpleForm>
    </Create>
  );
};
