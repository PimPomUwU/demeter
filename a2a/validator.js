// a2a/validator.js
import Ajv from "ajv";
import schema from "../shared/schema_generic.json" assert { type: "json" };

const ajv = new Ajv();
const validate = ajv.compile(schema);

export function validateMessage(message) {
  return validate(message);
}
