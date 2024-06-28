import { create, router, defaults } from "json-server";
const server = create();

const routes = router("products.json");

const middlewares = defaults();

const port = process.env.PORT || 8000

server.use(middlewares);
server.use(routes);
server.listen(port);
