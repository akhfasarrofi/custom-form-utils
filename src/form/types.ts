/**
 * Rules interface defines validation rules for the input field.
 */
export interface Rules {
  /** Specifies if the field is required. */
  required?: boolean;
  /** Validation error message. */
  message: string;
}

/**
 * FieldSchema interface defines the schema for an input field.
 */
export interface FieldSchema {
  /** Label for the input field. */
  label?: string;
  /** Validation rules for the input field. */
  rules?: Rules[];
}
