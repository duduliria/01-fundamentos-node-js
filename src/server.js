import http from "node:http";

import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";

// Query parameters => URL Statefull => filtros, paginacao, nao-obrigatorios
// Route paarameters => Identificar recurso
// Request body => Envio de informacoes de um formulario (HTTPs)


const sever = http.createServer(async (req, res) => {
  const { method, url } = req;
  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.patch === url;
  });

  if (route) {
    return route.handler(req, res);
  }

  return res.writeHead(404).end("NOT FOUND");
});

sever.listen(3333);
