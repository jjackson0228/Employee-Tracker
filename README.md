# Employee-Tracker

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description of App

This application is an user-friendly created interface for viewing and changing records of an employee database for a Music Instrument shop. The app was built using inquirer npm package, pg npm package, javascript and PostgreSQL. The pg npm package allows us to link the application and database together. The application lets a user maintain and update records and other important information such as seeing employee roles and what manager the employees report to. The Employee-Tracker application is built with 3 tables: department, role, and employee. These tables include employee id, first and last name, salary. The tables are easy to read and well structured. The user can also see the total budget of each departments employees salaries as a salary total. This app will also update the tables if the user decides to add a department, role, or employee. Keeping everything streamlined and organized.

## Installation

- To be able to run this application the user needs npm and PostgreSQL installed.

## How to Use the Application

1. **Install Dependencies**

   - After downloading the GitHub files, navigate to the `db` folder.
   - Right-click and select "Open Integrated Terminal."
   - Run `npm install` in the terminal to install the necessary npm packages.

2. **Set Up the Database**

   - In the terminal, input `\i schema.sql` to create the database schema.
   - After the tables are created, input `\i seeds.sql` to populate them with example data.
   - Once the data is populated, type `\q` to exit the database environment and return to the integrated terminal.

3. **Start the Application**
   - In the terminal, run `node index` to start the command-line interface.
   - The prompts will guide you through viewing and modifying the data in the application.

## Video Example of how to use

[Walkthrough video link](https://drive.google.com/file/d/1Vx7t5ElVxJ1jugwY07HMNaULafvTOcos/preview)

## Tools and languages used

- vsCode
- github
- node.js
- javaScript
- index.js
- package.json
- package-lock.json
- Inquirer V 8.2.4 (https://www.npmjs.com/package/inquirer)
- pg npm package (https://www.npmjs.com/package/pg)
- .gitignore

## Code source

- I got help from learning xpert tool
- I got help from stack overflow
- I got help from chatGpt
- I got help from google
- I got help from the bootcamp activities modules
