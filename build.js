import { exec } from "child_process";

exec("npx vite build", (err, stdout, stderr) => {
  if (err) {
    console.error(`Build failed: ${err}`);
    process.exit(1);
  }
  console.log(stdout);
});
