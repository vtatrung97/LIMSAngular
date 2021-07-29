import { CodeableConcept } from "./codeable-concept";
import { Period } from "./period";

export class Identifier {
  use: string;
  type: CodeableConcept;
  system: string;
  value: string;
  period: Period;
}
