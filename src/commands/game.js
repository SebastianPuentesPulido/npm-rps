import inquirer from 'inquirer';
import kleur from "kleur";
import { createFile } from "./Partidas.cjs";

let date = new Date();


/**
 * @returns {void}
 */
function game() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Escoge un nombre como jugador",
        },
        {
          type: "list",
          name: "juego",
          message: "",
          choices: ["Papel", "Piedra", "Tijeras"],
        },
      ])
      .then((answers) => {
        /**
         * @type {Number}
         */
        let randomNumber = Math.floor(Math.random() * 3);
        /**
         * @type {Array<String>}
         */
        let PossibleAnswers = ["Papel", "Piedra", "Tijeras"];
        /**
         * @type {String}
         */
        let machineResult = PossibleAnswers[randomNumber];
  
        if (answers.juego === "Tijeras" && machineResult === "Papel") {
          console.log(
            kleur.yellow(
              `${answers.name} ${kleur
                .red()
                .bold(answers.juego)} =/= machine ${kleur.cyan(machineResult)}`
            )
          );
          console.log(kleur.green().bold().underline(`${answers.name}, you won`));
        } else if (answers.juego === "Piedra" && machineResult === "Tijeras") {
          console.log(
            kleur.yellow(
              `${answers.name} ${kleur
                .red()
                .bold(answers.juego)} =/= machine ${kleur.cyan(machineResult)}`
            )
          );
          console.log(kleur.green().bold().underline(`${answers.name}, you won`));
        } else if (answers.juego === "Papel" && machineResult === "Piedra") {
          console.log(
            kleur.yellow(
              `${answers.name} ${kleur
                .red()
                .bold(answers.juego)} =/= machine ${kleur.cyan(machineResult)}`
            )
          );
          console.log(kleur.green().bold().underline(`${answers.name}, you won`));
        } else if (answers.juego === machineResult) {
          console.log(
            kleur.yellow(
              `${answers.name} ${kleur
                .red()
                .bold(answers.juego)} =/= machine ${kleur.cyan(machineResult)}`
            )
          );
          console.log(kleur.gray().bold().underline("this is a tie"));
        } else {
          console.log(
            kleur.yellow(
              `${answers.name} ${kleur
                .red()
                .bold(answers.juego)} =/= machine ${kleur.cyan(machineResult)}`
            )
          );
          console.log(kleur.red().bold().underline(`${answers.name}, you lost`));
        }
  
        createFile(
          "partidas.txt",
          `
            ===Partida Hecha a las ${date}===
            ${answers.name}:${answers.juego}==//==Machine: ${machineResult}
        `
        );
      });
  }

export default game;