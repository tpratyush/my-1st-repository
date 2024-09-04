import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PolicyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Policies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="policyAmount" source="policyAmount" />
        <TextField label="policyExpiryDate" source="policyExpiryDate" />
        <TextField label="policyId" source="policyId" />
        <TextField label="policyName" source="policyName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="users" source="users" />
      </Datagrid>
    </List>
  );
};
