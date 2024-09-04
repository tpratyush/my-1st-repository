import { InputJsonValue } from "../../types";

export type PolicyUpdateInput = {
  policyAmount?: number | null;
  policyExpiryDate?: Date | null;
  policyId?: string | null;
  policyName?: string | null;
  users?: InputJsonValue;
};
