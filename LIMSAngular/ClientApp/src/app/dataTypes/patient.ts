import { inherits } from "util";
import { Address } from "./address";
import { Attachment } from "./attachment";
import { CodeableConcept } from "./codeable-concept";
import { ContactPoint } from "./contact-point";
import { HumanName } from "./human-name";
import { Identifier } from "./identifier";
import { Resource } from "./resource";

export class Patient {
  resourceType: string;
  id: string;
  identifier: Array<Identifier>;
  active: boolean;
  name: Array<HumanName>;
  telecom: Array<ContactPoint>;
  gender: string;
  birthDate: Date;
  deceasedBoolean: boolean;
  deceasedDateTime: Date;
  address: Array<Address>;
  maritalStatus: CodeableConcept;
  multipleBirthBoolean: boolean;
  multipleBirthInteger: number;
  photo: Array<Attachment>;
}
