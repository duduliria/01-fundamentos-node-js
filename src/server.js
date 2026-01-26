import http from "node:http";
const users = [];

const sever = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "Dudu",
      email: "dudu@gmail.com",
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end("NOT FOUND");
});

sever.listen(3333);
