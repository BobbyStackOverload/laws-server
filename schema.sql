CREATE TABLE typesoflaws (
  id SERIAL PRIMARY KEY,
  types character varying,
);
CREATE TABLE states (
  id SERIAL PRIMARY KEY,
  states text
);
CREATE TABLE laws (
  id SERIAL PRIMARY KEY,
  lawsinfo text,
  states_id integer REFERENCES states(id),
  category_id integer REFERENCES typesoflaws(id)
);