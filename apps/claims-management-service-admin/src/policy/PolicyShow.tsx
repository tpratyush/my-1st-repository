import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const PolicyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="policyAmount" source="policyAmount" />
        <TextField label="policyExpiryDate" source="policyExpiryDate" />
        <TextField label="policyId" source="policyId" />
        <TextField label="policyName" source="policyName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="users" source="users" />
      </SimpleShowLayout>
    </Show>
  );
};
