
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
## Deploy locally in your computer 🖥️

To run the Parse Dashboard on your local machine just follow these steps:

1. Make sure to have the latest Node js version installed [NodeJS](https://nodejs.org/en)
2. Open terminal and type `git clone https://github.com/swiftmyday/ParseServer-SwiftMyDay`
3. Type `cd ParseDashboard-SwiftMyDay`.
4. Type `npm run setup` or `sudo npm run setup`
5. You will be required to provide the server credentials.
6. Launch Parse Dashboard with `npm start` and your will be provided with the URL of your Dashboard.


[license-svg]: https://img.shields.io/badge/license-BSD-lightgrey.svg
[license-link]: LICENSE
[open-collective-link]: https://opencollective.com/parse-server
