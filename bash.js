process.stdout.write("prompt > ");

process.stdin.on("data", data => {
  const cmd = data.toString().trim();
  const pwd = require("./pwd");
  const ls = require("./LS");
  if (cmd === "ls") {
    ls();
  }
  if (cmd === "pwd") {
    pwd();
  } else {
    process.stdout.write(`You typed: ` + cmd);
    process.stdout.write("\nprompt > ");
  }
});
