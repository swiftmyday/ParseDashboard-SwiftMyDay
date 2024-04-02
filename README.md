
![parse-repository-header](https://swiftmyday.github.io/Deposit/Dashboard-banner-2.png)

Parse Dashboard version made by SwiftMyDay from the amazing [Parse Dashboard](https://github.com/parse-community/parse-dashboard). 

Thanks to all the team behind the [Parse Dashboard](https://github.com/parse-community/parse-dashboard) for making this amazing dashboard.



# Remote Deployment

## Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/swiftmyday/ParseDashboard-SwiftMyDay)

Alternatively, to deploy manually:

1. Install Heroky CLI [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. Clone this repo and change directoty to it
3. Using terminal type `heroku login`
4. Type `heroku create` to create an app in heroku
5. Deploy your local code to heroku by typing `git push heroku master`


# Local Development

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
