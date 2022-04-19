// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-brightgreen.svg?style=plastic&logo=appveyor)` 
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `##### 7. [License](#License)` 
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## ***License***
    This application includes the following license: ${license}` 
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
#### by ${data.userName}
### **Table of Contents**
##### 1. [Description](#Description)
##### 2. [Installation](#Installation)
##### 3. [Usage](#Usage)
##### 4. [Contributing](#Contributing) 
##### 5. [Tests](#Tests)
##### 6. [Questions](#Questions)
${renderLicenseLink(data.license)}
## ***Description***
#### ${data.description}
## ***Installation***
#### The steps required to install the project include: ${data.installation}
## ***Usage***
#### Examples and instructions for use include: ${data.usage}
## ***Contributing***
#### Contributing guidelines include: ${data.contribution}
## ***Tests***
#### Automated tests for this system can be run by: ${data.tests}
## ***Questions***
#### If you have additional questions, please email ${data.userName} at: <${data.email}>
#### More work by ${data.userName} can be viewed at the [${data.github} GitHub repository](${data.githublink})
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;