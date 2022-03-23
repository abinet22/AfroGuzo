-- Create trainees table
--  $cat trainees.sql | mysql -u nahi -p
-- $mysql -u nahi -p selamets < ../trainees.sql
--  add middle name 
-- Create table for outcome
-- DROP TABLE table1;
-- created_at TIMESTAMP NOT NULL DEFAULT NOW(),
-- updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
-- create table t (
--     uuid BINARY(16) default (UUID_TO_BIN(UUID())),
-- )
-- select BIN_TO_UUID(uuid) uuid from t;

-- When new agency created they will be inserted into the agency table
-- when new applicat is registered they will be inserted into Applicant table 
-- having a forign key of thier agency id to establish a relation between them.

CREATE TABLE IF NOT EXISTS agency (
id BINARY(36) default (UUID_TO_BIN(UUID())),	
agency_name VARCHAR(256) NULL,	
user_name VARCHAR(256) NULL,
phone VARCHAR(256) NULL,
email VARCHAR(256) NULL,
subscription_type VARCHAR(256) NULL,
is_active VARCHAR(256) NULL,
password VARCHAR(256) NULL,
created_at TIMESTAMP NOT NULL DEFAULT NOW(),
updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
PRIMARY KEY (id)
)
