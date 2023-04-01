// Function to print the license badge they choose and the url links to thoughs images
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  const licenseBadgeURLs = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GPL 3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'BSD 3': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    'None': '',
  };
  if (!Object.keys(licenseBadgeURLs).includes(license)) {
    return '';
  }
  return `![${license} License](${licenseBadgeURLs[license]})`;
}
// Function to pull the link of the license of there choosing
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
 
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3': 'https://opensource.org/licenses/BSD-3-Clause',
    'None': '',
  };

  if (!Object.keys(licenseLinks).includes(license)) {
    return '';
  }

  return `[${license}](${licenseLinks[license]})`;
}

function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
## License

${renderLicenseBadge(license)} ${renderLicenseLink(license)}
`;
}
// Generates read.me file and provides the structure of the file.
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}


## Description


${data.description}


## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation


To install necessary dependencies, run the following command:


\`\`\`
${data.installation}
\`\`\`


## Usage


${data.usage}


${renderLicenseSection(data.license)}


## Contributing


${data.contributing}


## Tests


To run tests, run the following command:


\`\`\`
${data.tests}
\`\`\`


## Questions


If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.username}.
`;
}

module.exports = generateMarkdown;

