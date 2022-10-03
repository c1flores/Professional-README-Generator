
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
      `\n* [License](#license)\n`
    )
  }
  return ""
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License 📛 

      Copyright @ ${license}. All rights reserved.

      Licensed under the ${license} license.`
    )
  }
  return ""
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## GitHub URL 🌐

  [${data.github}](https://github.com/${data.github}/)

  ## Description 📝

  ${data.description}

  ## Table of Contents 🗒

  * [Installations](#dependencies)

  * [Usage](#usage)

  ${renderLicenseLink(data.license)}

  * [Contributors](#contributors)

  * [Test](#test)

  ## Installations (Dependencies) 💻

  To install dependencies, run these commands:

  \`\`\`
  ${data.dependencies}
  \`\`\`

  ## Usage 🏆

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributors 😃

  ${data.contributors}

  Contact me at ${data.email}

  ## Tests 🧪

  To run tests, run these commands:

  \`\`\`
  $(data.test)
  \`\`\`

`;
}

module.exports = generateMarkdown;
