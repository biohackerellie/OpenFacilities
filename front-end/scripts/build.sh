WORKING_DIR='/srv/git/OpenFacilities/front-end'

cd $WORKING_DIR 


docker build -t localhost:5000/lps-facilities . --no-cache && \

docker push localhost:5000/lps-facilities && \
docker stack deploy -c docker-compose.yml lps-facilities