const execSync = require('child_process').execSync;

function installPackages() {
  try {
    console.log('Installing required packages...');
    execSync('npm install readline-sync crypto dotenv', { stdio: 'inherit' });
    console.log('Packages installed successfully.');
  } catch (error) {
    console.error('Error installing packages:', error.message);
    process.exit(1);
  }
}

installPackages();