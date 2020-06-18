import app, { server } from "nexus";
import cors from "cors";
import "../../graphql/index";
import "dotenv/config"

server.express.use(cors({
    origin: process.env.CLIENT_URL
  }
))

app.assemble();

export default server.handlers.graphql;