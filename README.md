###### This is Extra Bonus part of the assignment presented after the Friday deadline #######
# Cleaned out create-react-app related files and setup Webpack config  
# refactor and fixed minor bugs
# Jest would not render custom player

###### Switching branches and installing new packages #######################################
git checkout extrabonus
git pull
yarn

###### start api server (on a different shell) ##############################################
cd api
npm start

##@ api will run on port 9000

###### run frontend development #############################################################
cd ..
yarn start

##@ Video Player should open on  http://localhost:3000

Thanks! =)
