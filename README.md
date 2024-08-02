
![parse-repository-header](https://swiftmyday.github.io/Deposit/Dashboard-banner-2.png)

This dashboard will connect with the <b>SwiftMyDay Parse Server</b>  from here [SwiftMyDay Parse Server](https://github.com/swiftmyday/ParseServer-SwiftMyDay)


Thanks to all the team behind the [Parse Dashboard](https://github.com/parse-community/parse-dashboard) for making this amazing dashboard.
##

<br></br>
# Getting started ✅

The Parse Dashboard will allow you to control your Parse Server instance.
In order to start using your Parse Dashboard you need to host it using one of the cloud providers below☁️<br>
Just click "Deploy to XXXX" button on your favorite Cloud provider and follow the instructions. That's it!

Alternative you can deploy your Dashboard locally in your computer. Steps also below.

<br></br>
## Deploy Dashboard on &nbsp; <img src="https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/89884/render-status-4b015255-e0cc-422c-943d-4f60b5f03094.png"  width="120">

Render offers a **free plan**. Friendly and simple UI.
<br></br>
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

1. Click "Deploy to render" button
2. Look for **Public Git repository** and paste this repo URL -> https://github.com/swiftmyday/ParseDashboard-SwiftMyDay
3. You might be prompt to input a blueprint name which can be any name you want
4. You will be prompt to input `APP_ID`, `MASTER_KEY`, `SERVER_URL`. These are all environmental variables you have stored in your server. Go to your server Cloud provider and look for those.
5. Additionally provide `USERNAME` and `PASSWORD` which are credentials to access later your parse dashboard
6. Click deploy and your dashboard will be up and running.
7. Open the link that render assinged to your project and it will open the Parse Dashboard


<br></br>

## Deploy server on &nbsp; <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/1024px-Heroku_logo.svg.png"  width="120">

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/swiftmyday/ParseDashboard-SwiftMyDay)

Heroku **does not offer a free plan** but the cheapest plan starts at $5.  Friendly and simple UI. <br>
If you already created an account for your parse server, you can also deploy your Dashboard in the same account without any extra charge.
<br></br>

1. Create a Heroku account
2. Click "Deploy to heroku" button
3. Fill the form with your `APP_ID`, `MASTER_KEY`, `SERVER_URL` which were set when creating your Parse Server.
4. Additionally provide `USERNAME` and `PASSWORD` which are credentials to access later your parse dashboard
5. Click deploy and wait for a successful deployment
6. Click **Open app** and your Parse Dashboard will open.


<br></br>
# Deploy your Parse Dashboard locally 🖥️

To run the server on your local machine just follow these steps:

1. Make sure to have the latest Node js version installed [NodeJS](https://nodejs.org/en)
2. Clone this repository and change directory to it.
3. Run `npm install`. Sometimes `sudo npm install` is needed.
4. Open index.js and replace the following values:

  - `myAppId` for your server appId
  - `myMasterKey` for your server masterKey
  -  Replace `http://localhost:1337/parse` for your server URL. For local development keep it as is.
  - `process.env.USERNAME` for any username you want to use to login
  - `process.env.USERNAME` for any password you wan to use to login

5. Back in terminal run `npm start`

Your parse dashboard is now running locally. Open your browser and go to `localhost:4040`


[license-svg]: https://img.shields.io/badge/license-BSD-lightgrey.svg
[license-link]: LICENSE
[open-collective-link]: https://opencollective.com/parse-server
