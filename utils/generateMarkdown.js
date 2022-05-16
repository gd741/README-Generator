// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license)
  {
    case "None":
      return "";
    case "Apache License 2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "GNU General Public License V3.0":
      return "https://img.shields.io/badge/License-GPL%20v3-blue.svg";
    case "MIT License":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "BSD 3-Clause":
      return "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license)
  {
    case "None":
      return "";
    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GNU General Public License V3.0":
      return "http://www.gnu.org/licenses/gpl-3.0";
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
    case "BSD 3-Clause":
      return "https://opensource.org/licenses/BSD-3-Clause";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None")
  {return "";}
  else
  {return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;}
}



//create function  that will generate README template that will hold the data user enters from inquirer
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseSection(data.license)}

## Description

${data.description}

## Table of Contents
[Installation](#Installation)  
[Usage](#Usage)  
[License](#License)  
[Contributing](#Contribution-Guidelines)  
[Tests](#How-To-Test)  
[COntact](#Contact)  

## Installation

\`\`\`${data.install}\`\`\`

## Usage

${data.usage}

## Contribution Guidelines

${data.help}

## How to Test

${data.test}

## Contact

[github](https://github.com/${data.github})

${data.email}  
`;
}

module.exports = generateMarkdown;