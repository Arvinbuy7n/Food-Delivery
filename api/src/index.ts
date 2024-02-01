import app from "./app";
import { connect } from "./database";

const port = 8000;

connect();

app.listen(port, () => {
  console.log(`Chekist tanii portiig sonsoj chadaj bnaa ${port}`);
});
