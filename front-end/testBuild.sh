#!/bin/bash

WORKDIR="/home/ellie/github/Laurel-Facilities/front-end"


cd $WORKDIR
pwd

docker compose -f docker-compose-test.yml build --no-cache  && \
docker compose -f docker-compose-test.yml up -d 

