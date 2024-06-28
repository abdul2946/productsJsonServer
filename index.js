<<<<<<< HEAD
const jsonServer = require("json-server")
const server = jsonServer.create();

const router = jsonServer.router("products.json");
=======
import { create, router, defaults } from "json-server";
const server = create();

const routes = router("products.json");
>>>>>>> 0ba1eb1add5c0fd63854efe26945091ee04183a6

const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8000

server.use(middlewares);
server.use(routes);
server.listen(port);
