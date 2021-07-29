import { Period } from "./period";

export class HumanName {
  text: string;
  family: string;
  given: Array<string>;
  prefix: Array<string>;
  suffix: Array<string>;
  period: Period;
}
