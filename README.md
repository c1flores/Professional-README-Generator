



# Table of Contents

  - [Overview](#overview)
  - [Why do professional README markdown files matter?](#why-do-professional-readme-markdown-files-matter)
  - [How did I refactor the codebase for this particular assignment?](#how-did-i-refactor-the-codebase-for-this-particular-assignment)
  - [Screen Capture](#screen-capture)
  - [Link to Screen Recording of Application](#link-to-screen-recording-of-application)
  - [Installation](#installation)
  - [Usage](#usage)
  
## Overview
This repository is an exhibition of a professional README generator. The user can consult the repo to learn how to create a command-line application that dynamically generates a professional README.md file from a user's input using the <a href="https://www.npmjs.com/package/inquirer" target="_blank">Inquirer Package</a>. 

## Why do professional README markdown files matter?
When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.

## How did I refactor the codebase for this particular assignment?
With two distinct JavaScript files created, I simply added the functionality to prompt questions, write the README file, and initialize the application within index.js. I also added the functionality to properly render the license and generate the markdown within the generateMarkdown.js. 

## Screen Capture
![](https://user-images.githubusercontent.com/81927296/193630229-34d38a3e-910c-40a2-99a2-528514cd7692.gif)

## Link to Screen Recording of Application
[Google Drive Link](https://drive.google.com/file/d/1iClDwYC3qFpRrUIluCTTj-AcVWoWfrnB/view?usp=sharing)

## Installation

  - Fork repository
  - Setup node project
  - Install dependencies
  - Ensure Inquirer package (version 8.2.4) is installed
## Usage

  - Open integrated terminal in personal IDE
  - Type "Node index.js"
  - Answer the prompts that follow
  - A sampleREADME.md will be generated and stored in "utils" folder

