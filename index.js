#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright("***************Welcome to Friend Checker Game***************"));
let isFriend = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.blue("Enter your Friend Name:")
    }
]);
if (isFriend.name === "Ali" || isFriend.name === "Asif") {
    console.log(chalk.greenBright.italic(`${isFriend.name} is your Friend.`));
}
else {
    console.log(chalk.redBright.bold(`${isFriend.name} is not your Friend.`));
}
