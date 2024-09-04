import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PolicyWhereInput = {
  id?: StringFilter;
  policyAmount?: FloatNullableFilter;
  policyExpiryDate?: DateTimeNullableFilter;
  policyId?: StringNullableFilter;
  policyName?: StringNullableFilter;
  users?: JsonFilter;
};
