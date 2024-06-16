import chalk from "chalk";

export default {
  backend(...messages: string[]) {
    console.log(`\x1b[37m[\x1b[96mBACKEND\x1b[0m\x1b[37m]`, ...messages);
  },

  debug(...messages: string[]) {
    console.log(`\x1b[37m[\x1b[36mDEBUG\x1b[0m\x1b[37m]`, ...messages);
  },

  error: (...args: unknown[]) => {
    console.log(
      chalk.bgRed(" ERROR "),
      ...args.map((arg) =>
        typeof arg === "string" ? chalk.gray(arg) : chalk.gray(JSON.stringify(arg)),
      ),
    );
  },
};