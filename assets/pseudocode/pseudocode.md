# Pseudocode

## Objectives

- Layout the foundation of logic for generateMarkdown.js & index.js
- Optimize control flow of program logic 
- Display usage instructions

## Meta-Analysis of Approach

### Big Picture: Create a Node.js based tool for the user to automate the creation of high-quality README's for repository projects. 

#### In generateMarkdown.js, create function to render license if the user opts for one on their repo.
```
function renderLicenseBadge(license) {
    if the user input for the license field on the command-line prompt is not empty
        return markdown link to display a license badge
    else
        return an empty string
    }
}
```

#### In generateMarkdown.js, create function to render license table-of-contents link if the user opts for one on their repo.
```
function renderLicenseLink(license) {
    if the user input for the license field on the command-line prompt is not empty
        return markdown link to properly link license section in table-of-contents
    else
        return an empty string
    }
}
```

#### In generateMarkdown.js, create function to render license section if the user opts for one on their repo.
```
function renderLicenseSection(license) {
    if the user input for the license field on the command-line prompt is not empty
        return a new markdown section to store license information
    else
        return an empty string
    }
}
```

#### In generateMarkdown.js, create function to generate markdown.
```
Create markdown with appropriate sections to populate with answers from command-line information in index.js (e.g., Description, Table of Contents etc...)
``` 

#### In index.js, import packages required for application. 
```
const inquirer = require inquirer module
const fs = require file system module
const path = require path module
const generateMarkdown = require generateMarkdown.js local path in repo
``` 

#### In index.js, store array of question objects to be used to prompt users with README specifications. 
```
Sample Question Topics:

GitHub Username
Email
Project Title
Project Description
Project License
Required Dependencies
Repo Usage
Repo Contributors
```
#### In index.js, create writeToFile method that denotes the path to which answers should be written.  
```
return one-line of code that writes answers to newly created README.md
```
#### In index.js, create init function to initialize application. 
```
Create a promise to return inquirer prompt answers 

Call writeToFile method to create sampleREADME.md in repo folder and generate markdown with user answers
```

#### In index.js, make init() method call to initialize application. 
```
init()
```


