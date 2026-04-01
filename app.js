const http = require("http");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = "0.0.0.0";
const port = Number(process.env.PORT || 3000);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    http
      .createServer((req, res) => {
        handle(req, res);
      })
      .listen(port, hostname, () => {
        // Keep this log for Passenger/cPanel startup visibility.
        console.log(`Next.js server ready at http://${hostname}:${port}`);
      });
  })
  .catch((err) => {
    console.error("Failed to start Next.js under Passenger:", err);
    process.exit(1);
  });
