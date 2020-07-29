# High Stakes
Providing solutions to individuals and communities in areas prone to natural disasters. 

## What is High Stakes?
Our project was started by 5 college students from Puerto Rico who saw too many naural disasters take away the crops in the farmlands and damage many properties in our cities. After many years of seeing our communities suffer, we decided to accept the challenge in developing an easily deployable solution that helps people get warnings before the situation reaches a point of no return. Our solution comes by integrating dynamic IoT sensors with a web application that alerts each member of the community in a way they can be aware of what is happening realtime. 

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Note: The following instructions cover the necessary steps to run the FrontEnd application which is capable of fetching the simulated IoT data as well as fetch the current weather from your location (given permission). This values are then compared and based on a given threshold, will result in a status shown of either (STABLE, WARNING, or ALERT). To enable Push Notifications, the repo found here: [BackEnd](https://github.com/danyalfaro/high_stakes_backend) has to also be setup. This other repo contains the BackEnd code developed using Node with the Express framework.

First, inside the project directory, we must install all necessary dependencies by running:

### `npm install`

After the installs complete, we can start the application by running:

### `npm start`

Which runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
