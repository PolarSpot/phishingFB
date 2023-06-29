import { Router } from "express";
import { randomUUID } from "node:crypto";
import { Database } from "../database";

const userRoute = Router();

const database = new Database();

const table = "user";

//userRoute.método("rota", (parâmetro 1, parâmetro 2) => {Resultado})
userRoute.get("/", (request, response) => {
  const user = database.select(table);
  response.json(user);
});

userRoute.get("/:id", (request, response) => {
  const { id } = request.params;

  const result = database.select(table, id);

  if (result === undefined)
    response
            .status(400)
            .json({ msg: "Usuário não encontrado!" });

  response.json(result);
});

//CRIAR USUÁRIO
userRoute.post("/", (request, response) => {
  const { email, senha } = request.body;

  //determina as propriedades
  const user = {
    id: randomUUID(),
    email,
    senha,
  };

  //database.insert('onde será inserido', 'o que será inserido')
  database.insert(table, user);

  response
          .status(201)
          .json({ msg: "sucesso!" });
});

//DELETAR
userRoute.delete("/:id", (request, response) => {
  const { id } = request.params;

  const userExist: any = database.select(table, id);

  // console.log(result, " - ", typeof result);

  // caso o usuário não existir
  if (userExist === undefined)
    return response.status(400).json({ msg: "Usuário não encontrado!" });

  database.delete(table, id);

  response
          .status(202)
          .json({ msg: `Usuário ${userExist.email} foi deletado do banco` });
});

export { userRoute };
