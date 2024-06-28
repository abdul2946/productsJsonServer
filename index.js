import { create, router as _router, defaults } from "json-server";
const server = create();

const router = _router("products.json");

const middlewares = defaults();

const port = process.env.PORT

server.use(middlewares);
server.use(router);
server.listen(port);