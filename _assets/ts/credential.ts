const fs = require("fs");
const yaml = require("js-yaml");

let fileContents = fs.readFileSync("../../_config.yml", "utf8");
let data = yaml.safeLoad(fileContents);
let credential = data.algolia;

export default credential;
