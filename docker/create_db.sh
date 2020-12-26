#!/bin/bash

set -e
set -u

function create_databases() {
	local database=$1

	psql --username "$POSTGRES_USER" <<-EOSQL
	    DROP DATABASE IF EXISTS $database;
	    CREATE DATABASE $database;
	    GRANT ALL PRIVILEGES ON DATABASE $database TO $POSTGRES_USER;
			CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL
}

if [ -n "$POSTGRES_MULTIPLE_DATABASES" ]; then
	for db in $(echo $POSTGRES_MULTIPLE_DATABASES | tr ',' ' '); do
		create_databases $db
	done
fi
