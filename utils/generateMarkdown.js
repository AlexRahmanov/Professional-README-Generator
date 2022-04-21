// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseInfoList = [
  {
    name: 'GNU GPLv3',
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "https://www.gnu.org/licenses/gpl-3.0"
  },

  {
    name: 'Mozilla Public License 2.0',
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "https://opensource.org/licenses/MPL-2.0)"
  },

  {
    name: 'Apache License 2.0',
    badge: "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://opensource.org/licenses/Apache-2.0)",
  },

  {
    name: 'MIT License',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://opensource.org/licenses/MIT',
  },

  {
    name: 'Boost Software License 1.0',
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "https://opensource.org/licenses/BSL-1.0"
  },

  {
    name: 'The Unlicense',
    badge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    link: "https://opensource.org/licenses/unlicense"
  }

];

function renderLicenseBadge(license) {
  const selectedLicenseList = licenseInfoList.filter(item => item.name === license);
  return selectedLicenseList[0].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const selectedLicenseList = licenseInfoList.filter(item => item.name === license);
  return selectedLicenseList[0].link;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license)
  {
    return `${license}
  `;
  } else return ""
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // badge of the license
  return `
  ${renderLicenseBadge(data.license)}
  #  Project Title
     ${data.title}
    
  ##  Description
    ${data.description}
  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install dependencies, run the below command :
    ${data.installation}
  ## Usage
     ${data.usage}
  ## License
  This repository is covered under the license '${renderLicenseSection(data.license)}' 
  Refer ${renderLicenseLink(data.license)} for more detailed info 
    
  
  ## Contribution
     ${data.contributing}
  ## Tests
     ${data.tests}
## Questions
If you have any questions reach me @ 
Email: [archana.nagaraj@gmail.com](mailto:${data.email})
Github : [archana-nagaraj](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;