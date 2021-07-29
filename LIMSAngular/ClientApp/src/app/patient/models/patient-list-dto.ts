import { HumanName } from "../../dataTypes/human-name";

export class PatientListDto {
  resourceType: string;
  name: Array<HumanName>;
}
