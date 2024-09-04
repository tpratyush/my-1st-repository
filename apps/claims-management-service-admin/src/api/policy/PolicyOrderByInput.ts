import { SortOrder } from "../../util/SortOrder";

export type PolicyOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  policyAmount?: SortOrder;
  policyExpiryDate?: SortOrder;
  policyId?: SortOrder;
  policyName?: SortOrder;
  updatedAt?: SortOrder;
  users?: SortOrder;
};
