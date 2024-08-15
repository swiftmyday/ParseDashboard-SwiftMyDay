const fs = require('fs');
const readlineSync = require('readline-sync');
const crypto = require('crypto');
const { exec } = require('child_process');

// Clear the console
console.clear();

// Function to generate a random alphanumeric string of 32 characters
function generateRandomString() {
  return crypto.randomBytes(16).toString('hex');
}

// Function to prompt the user for input
function getInput(prompt) {
  return readlineSync.question(prompt);
}

// Welcome text
console.log("\n");
console.log("🔵 Welcome to Parse Dashboard local version 🔵");
console.log("          ⚡️ Swift my day ⚡️       ");
console.log("\n");

console.log('Please provide the following credentials:');
// Function to create the .env file
function createEnvFile() {
  const SERVER_URL = getInput('Please enter your SERVER_URL: ');
  const APP_ID = getInput('Please enter your APP_ID: ');
  const MASTER_KEY = getInput('Please enter your MASTER_KEY: ');
  const USERNAME = getInput('Please enter a USERNAME to access the dashboard: ');
  const PASSWORD = getInput('Please enter a PASSWORD for the username provided: ');
  const APP_NAME = getInput('Please enter an app name to display in the Dashboard: ');

  // Create .env file content
  const envContent = `
  SERVER_URL=${SERVER_URL}
  APP_ID=${APP_ID}
  MASTER_KEY=${MASTER_KEY}
  USERNAME=${USERNAME}
  PASSWORD=${PASSWORD}
  APP_NAME=${APP_NAME}
  `;
  console.log("\n");

  // Write .env file
  fs.writeFileSync('.env', envContent.trim());
  console.log('✔️ .env file has been created successfully.');
}

// Function to create the config.js file
function createConfigFile() {
  const configContent = `
require('dotenv').config();
  `;

  fs.writeFileSync('config.js', configContent.trim());
  console.log('✔️ config.js file has been created successfully.');
  console.log("\n");
}

// Function to install project dependencies
function installDependencies(callback) {
  exec('npm install', (error, stdout, stderr) => {
    // console.log(`stdout: ${stdout}`);
    if (error) {
      console.error(`Error installing dependencies: ${error.message}`);
    } else if (stderr) {
      console.error(`stderr: ${stderr}`);
    } else {
      console.log('✔️ Dependencies installed successfully.');
    }
    callback();
  });
}

// Execute the setup process
function setup() {
  createEnvFile();
  installDependencies(() => {
    // Print setup completion message
    console.log("\n");
    console.log('✅ Parse Dashboard Setup has been completed successfully! 🎉');
    console.log('\n');
    console.log('► start the dashboard with `npm start`');
    console.log('\n');
  });
}

setup();