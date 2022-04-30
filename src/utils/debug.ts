type LogLevel = "DEVELOPMENT" | "PRODUCTION" | "NONE"

interface LogLine {
    title: string;
    description: string;
}

type LogLines = LogLine[];

class DebugLogger {
    private development: Function;
    private production: Function;
    log: Function;

    constructor () {
        this.development = (message: string, logLines: LogLines) => {
            console.log(`💬 ${message}`);
            logLines.forEach(value => console.log(`\t• ${value.title}: ${value.description}`));
        }
        this.production = (message: string, logLines: LogLines) => {
            console.log(`💬 ${message}`);
            logLines.forEach(value => console.log(`\t• ${value.title}: ${value.description}`));
        }
        this.log = (logLevel: LogLevel, message: string = "", logLines: LogLines = []) => {
            if (logLevel === "PRODUCTION")
                this.production(message, logLines);
            if (logLevel === "DEVELOPMENT")
                this.development(message, logLines);
            if (logLevel === "NONE") return;
        }
    }
}

export default DebugLogger;