#!/usr/bin/env node

import { welcome } from "./commands/welcome.cjs";
import game from "./commands/game.js";
import { Command } from "commander";
import {readGame, deleteGame} from './commands/check.cjs'
import { createFile } from "./commands/Partidas.cjs";


const program = new Command();


program.version("0.0.1").description("rock paper and scissors game");

async function initialize() {
  welcome("Rock Paper and Scissor.JS");

  setTimeout(() => {
    game();
  }, 2000);
}

program
.command("game")
.alias("g")
.description("a simple game of rock paper scissors")
.action(async function () {
  await initialize();
})

program
.command("save")
.alias("s")
.description("a register from the data of the game, with player name and results of the game")
.action(async () => {
  await readGame("./partidas.txt");
});

program
.command("deleteGame")
.alias("dg")
.description("delete everything from the partidas.txt file")
.action(async () => {
   deleteGame('partidas.txt');
})

program
.command("createGame")
.alias("cg")
.description("create a file with the data from the game")
.action(() => {
  createFile('partidas.txt'," ");
})

program.parse(process.argv);

export default initialize;
