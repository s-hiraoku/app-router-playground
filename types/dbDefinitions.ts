export const PrismaErrorCodes = {
  // Record does not exist
  RECORD_DOES_NOT_EXIST: "P2001",

  // Unique constraint failed
  UNIQUE_CONSTRAINT_FAILED: "P2002",

  // Foreign key constraint failed
  FOREIGN_KEY_CONSTRAINT_FAILED: "P2003",

  // Constraint violation
  CONSTRAINT_VIOLATION: "P2004",

  // Null constraint violation
  NULL_CONSTRAINT_VIOLATION: "P2005",

  // Missing a required value
  REQUIRED_VALUE_MISSING: "P2006",

  // Missing the required argument
  REQUIRED_ARGUMENT_MISSING: "P2007",

  // Invalid connection string
  INVALID_CONNECTION_STRING: "P2008",

  // Timeout
  TIMEOUT: "P2009",

  // Database not found
  DATABASE_NOT_FOUND: "P2010",

  // Table not found
  TABLE_NOT_FOUND: "P2011",

  // Column not found
  COLUMN_NOT_FOUND: "P2012",

  // Value out of range
  VALUE_OUT_OF_RANGE: "P2013",

  // Division by zero
  DIVISION_BY_ZERO: "P2014",

  // Data type mismatch
  DATA_TYPE_MISMATCH: "P2015",

  // Access denied to database
  ACCESS_DENIED_TO_DATABASE: "P2016",

  // Access denied to schema
  ACCESS_DENIED_TO_SCHEMA: "P2017",

  // Access denied to table
  ACCESS_DENIED_TO_TABLE: "P2018",

  // Access denied to column
  ACCESS_DENIED_TO_COLUMN: "P2019",

  // Query interpretation error
  QUERY_INTERPRETATION_ERROR: "P2020",

  // Missing the required argument for the query engine
  REQUIRED_ARGUMENT_FOR_QUERY_ENGINE_MISSING: "P2021",

  // Raw query failed
  RAW_QUERY_FAILED: "P2022",

  // Null constraint violation on the database
  NULL_CONSTRAINT_VIOLATION_ON_DATABASE: "P2023",

  // Unique constraint violation on database
  UNIQUE_CONSTRAINT_VIOLATION_ON_DATABASE: "P2024",

  // Foreign key constraint violation on database
  FOREIGN_KEY_CONSTRAINT_VIOLATION_ON_DATABASE: "P2025",

  // Constraint violation on the database
  CONSTRAINT_VIOLATION_ON_DATABASE: "P2026",

  // Database error
  DATABASE_ERROR: "P2027",

  // Input validation error
  INPUT_VALIDATION_ERROR: "P2028",
};
