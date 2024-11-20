// LICENSES LIST
// 'MIT License' [License: MIT] IMG=https://img.shields.io/badge/License-MIT-yellow.svg LINK=https://opensource.org/licenses/MIT
// 'CC0' [License: CC0-1.0] IMG=https://licensebuttons.net/l/zero/1.0/80x15.png LINK=http://creativecommons.org/publicdomain/zero/1.0/
// 'Attribution 4.0 International (CC)' [License: CC BY 4.0] IMG=https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg LINK=https://creativecommons.org/licenses/by/4.0/
// 'GNU GLPV3' [License: GPL v3] IMG=https://img.shields.io/badge/License-GPLv3-blue.svg LINK=https://www.gnu.org/licenses/gpl-3.0
// 'None'

// array of objects to store all data about licenses
const licenseList = [
  {
    license: 'MIT License', // used as the response to display a descriptive name
    licenseName: 'MIT', // short name for use in selecting from the list selection (!!MUST MATCH STRING IN INQUIRER LIST SELECTION!!)
    img: 'https://img.shields.io/badge/License-MIT-yellow.svg', // img for badge display
    link: 'https://opensource.org/licenses/MIT', // link to webpage with info on license fill in wherever needed
  },
  {
    license: 'CC0',
    licenseName: 'CC0-1.0',
    img: 'https://licensebuttons.net/l/zero/1.0/80x15.png',
    link: 'http://creativecommons.org/publicdomain/zero/1.0/',
  },
  {
    license: 'Attribution 4.0 International (CC)',
    licenseName: 'CC BY 4.0',
    img: 'https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg',
    link: 'https://creativecommons.org/licenses/by/4.0/',
  },
  {
    license: 'GNU GLPV3',
    licenseName: 'GPL v3',
    img: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    link: 'https://www.gnu.org/licenses/gpl-3.0',
  },
  {
    license: 'None',
    licenseName: '', // should not have to be read
    img: '', // should not have to be read
    link: '', // should not have to be read
  },
]

// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  // this will fill in [![License: NAME](IMGURL)](LICENSELINK)
  var returnText;

  if (license == licenseList[0].license) { // license 0 = MIT
    const licenseName = licenseList[0].licenseName;
    const img = licenseList[0].img;
    returnText = `[![License: ${licenseName}](${img})](${renderLicenseLink(license)})`;
  } else if (license == licenseList[1].license) { // license 1 = CC0
    const licenseName = licenseList[1].licenseName;
    const img = licenseList[1].img;
    returnText = `[![License: ${licenseName}](${img})](${renderLicenseLink(license)})`;
  } else if (license == licenseList[2].license) { // license 2 = Attribution 4.0 International (CC)
    const licenseName = licenseList[2].licenseName;
    const img = licenseList[2].img;
    returnText = `[![License: ${licenseName}](${img})](${renderLicenseLink(license)})`;
  } else if (license == licenseList[3].license) { // license 3 = GNU GLPV3
    const licenseName = licenseList[3].licenseName;
    const img = licenseList[3].img;
    returnText = `[![License: ${licenseName}](${img})](${renderLicenseLink(license)})`;
  } else { // license 4 = none/default
    returnText = ``;
  }
  return returnText;
}

// If there is no license, returns an empty string
function renderLicenseLink(license) {
  var returnText;

  if (license == licenseList[0].license) { // license 0 = MIT
    const link = licenseList[0].link;
    returnText = `${link}`;
  } else if (license == licenseList[1].license) { // license 1 = CC0
    const link = licenseList[1].link;
    returnText = `${link}`;
  } else if (license == licenseList[2].license) { // license 2 = Attribution 4.0 International (CC)
    const link = licenseList[2].link;
    returnText = `${link}`;
  } else if (license == licenseList[3].license) { // license 3 = GNU GLPV3
    const link = licenseList[3].link;
    returnText = `${link}`;
  } else { // license 4 = none/default
    returnText = ``;
  }
  return returnText;
}

// If there is no license, returns an empty string
function renderLicenseSection(license) {
  // this will fill in [![License: NAME](IMGURL)](LICENSELINK)
  var returnText;
  var open = 'This project uses the ';
  var close = ' license. Click the link to learn more.'

  if (license != licenseList[4].license) { // check if license is none, otherwise build name and link into section
    const licenseText = `[${license}](${renderLicenseLink(license)})`;
    returnText = open + licenseText;
    returnText += close;
  } else { // license 4 = none/default
    returnText = ``;
  }
  return returnText;
}

function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  # ${data.title}

  ## Description

  ${data.description}

  # Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  My GitHub:\n
  [${data.username}](https://www.github.com/${data.username})\n
  My E-mail:\n
  ${data.email}\n
  To reach me with further questions, email me here`;
}

export default generateMarkdown;
