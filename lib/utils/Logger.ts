import chalk from "chalk";

export = class Logger {
    public log(...content: string[]) {
        console.log(`${formatTime()} >> [${chalk.cyan("Log")}}] - ${content.join(" ")}`);
    }

    public warn(...content: string[]) {
        console.warn(`${formatTime()} >> [${chalk.yellow("Warn")}] - ${content.join(" ")}`);
    }

    public error(...content: string[]) {
        console.error(`${formatTime()} >> [${chalk.red("Error")}] - ${content.join(" ")}`);
    }
}

function formatTime() {
    let times = new Date();

    return `[${times.toISOString()}]`;
}