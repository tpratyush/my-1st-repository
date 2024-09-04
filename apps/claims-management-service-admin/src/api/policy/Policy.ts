import { JsonValue } from "type-fest";

export type Policy = {
  createdAt: Date;
  id: string;
  policyAmount: number | null;
  policyExpiryDate: Date | null;
  policyId: string | null;
  policyName: string | null;
  updatedAt: Date;
  users: JsonValue;
};
