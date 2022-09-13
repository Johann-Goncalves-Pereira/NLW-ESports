import { writeFile } from "fs/promises";

export const addEnvOnSass = async (env: string) => {
  const sassVar = `$env: ${env};`;

  try {
    await writeFile("./Abstracts/_env.scss", sassVar);
  } catch (err) {
    console.error(err);
  }
};
