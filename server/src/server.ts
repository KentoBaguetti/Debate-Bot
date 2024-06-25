import express, { type Express, Request, Response } from "express";
import bodyParser from "body-parser";
import routes from "./routes";

const app: Express = express();
const PORT: number = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});

export default app;
