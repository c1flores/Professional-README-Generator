
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ""
}


// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `* [License](#license-๐)`
    )
  }
  return ""
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
   `## License ๐ 

    Copyright @ ${license}. All rights reserved.

    Licensed under the ${license} license.`
    )
  }
  return ""
}

// function to structure markdown 
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


  ## Description ๐

  ${data.description}

  ## Table of Contents ๐

  * [Installations](#installations-๐ป)

  * [Usage](#usage-๐)
  
  * [Contributors](#contributors-๐)

  * [Test](#tests-๐งช)

  * [Questions](#questions)

  ${renderLicenseLink(data.license)}
  
  ## Installations  ๐ป

  To install dependencies, run these commands:

  \`\`\`
  ${data.dependencies}
  \`\`\`

  ## Usage ๐

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributors ๐

  ${data.contributors}

  ## Tests ๐งช

  To run tests, run these commands:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  For additional questions, contact me at the email provided below. 

  - GitHub: [${data.github}](https://github.com/${data.github}/)
  - Email:  ${data.email}
`;
}

module.exports = generateMarkdown;
