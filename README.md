# Employee-Tracker

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description of App

This application is an user-friendly created interface for viewing and changing records of an employee database for a Music Instrument

shop. The app was built using inquirer npm package, pg npm package, javascript and PostgreSQL. The pg npm package allows us to link the

application and database together. The application lets a user maintain and update records and other important information such as seeing

employee roles and what manager the employees report to. The Employee-Tracker application is built with 3 tables: department, role, and

employee. These tables include employee id, first and last name, salary. The tables are easy to read and well structured. The user can

also see the total budget of each departments employees salaries as a salary total. This app will also update the tables if the user

decides to add a department, role, or employee. Keeping everything streamlined and organized.

## Installation

- To be able to run this application the user needs npm and PostgreSQL installed.

## How to use App

- After the user has downloaded the github files right click on db folder and open integrated terminal. Run `npm i` to install npm

packages in the terminal. Then run node index in the terminal to start the command prompts and from there it's very user friendly to view

and change the data.

- To add the example populated tables that have already been created input `\i schema.sql` and after that command the user will see the

tables are created then run `\i seeds.sql` to add all the pre made data to the tables then `\q` to go back to integrated terminal.

- Then run node index in the terminal to start the command prompts and from there it's very user friendly to view and change the data.

## Video Example of how to use

There is a walkthrough video added below to have a visual of how to run the code.

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
