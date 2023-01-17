# Rock Paper Scissors in Javascript
A simple example of how to use inquirerJS with File System, you can play with the machine and use a username, the games are stored in a file called *games.txt*. 

![screenshot](https://i.imgur.com/QJc64ET.png)
![screenshot](https://i.imgur.com/h8wceoN.png)

## Dependencies:
> in the code I make use of both commonJS and ES6 modules, you can change the files and have only one type of module used, I used commonJS because it made it easy for me to import functions, it's just a taste.

- [inquirerJS](https://www.npmjs.com/package/inquirer#installation)
- [Kleur](https://www.npmjs.com/package/inquirer#installation)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [commander](https://www.npmjs.com/package/commander)
- [figlet](https://www.npmjs.com/package/figlet)

## Features
- games are saved along with the date of execution.
- the machine option is random, as it is a random integer between 0 and 3.
- each value like rock, paper, scissors is assigned a value within an array that then with the random result of the machine we assign a value.
- The colors in the terminal make it easier to interpret if you won or lost.
- create and delete with commands the file partidas.txt, which saves the record of the games with date and time.