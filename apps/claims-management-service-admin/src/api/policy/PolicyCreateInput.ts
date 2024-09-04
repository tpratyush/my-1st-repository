import { InputJsonValue } from "../../types";

export type PolicyCreateInput = {
  policyAmount?: number | null;
  policyExpiryDate?: Date | null;
  policyId?: string | null;
  policyName?: string | null;
  users?: InputJsonValue;
};
