import fs from "fs";
import path from "path";

const demeterPath = path.resolve("./gpt/demeter/response_demeter.json");

export async function appendToDemeter(message) {
  let data = [];
  if (fs.existsSync(demeterPath)) {
    data = JSON.parse(fs.readFileSync(demeterPath, "utf-8"));
  }
  data.push(message);
  fs.writeFileSync(demeterPath, JSON.stringify(data, null, 2));
}
