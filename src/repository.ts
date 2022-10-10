import { readFileSync, writeFileSync } from "fs";
// var database = require("./server.ts");
var knex = require("./database/connection");

const repositoryRead = async (url: any) => {
  var query = await knex
    .select(["original"])
    .table("urls")
    .where({ shortened: `${url}` });

  return query;
};

const repositoryWrite = async (data: any) => {
  var query = await knex
    .insert({ original: `${data.original}`, shortened: `${data.shortened}` })
    .into("urls");

  return query;
};

export default { repositoryRead, repositoryWrite };
