#!/bin/bash

LOGFILE="/srv/git/Laurel-Facilities/front-end/logfile.log"

cd /srv/git/Laurel-Facilities/front-end >> $LOGFILE 2>&1

git fetch >> $LOGFILE 2>&1

if ! git diff --quiet HEAD @{u}; then
    # Pull changes if there are any
    echo "$(date) - Changes detected. Pulling changes and rebuilding." >> $LOGFILE
    git pull && \
		docker build -t localhost:5000/lps-facilities . && \
		docker push localhost:5000/lps-facilities && \
		docker stack deploy -c docker-compose.yml lps-facilities >> $LOGFILE 2>&1 
else
    echo "$(date) - No changes. Exiting." >> $LOGFILE
fi

