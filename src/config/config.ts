import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();

const { PORT } = process.env;

const config = {
  PORT,
} as const;

export default config;
