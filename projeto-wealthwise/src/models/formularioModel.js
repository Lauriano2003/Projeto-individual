var database = require("../database/config");

function autenticar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    email,
    senha
  );
  // var instrucaoSql = `
  //       SELECT id, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
  //   `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function Recomendacao(idQuestionario) {
  var instrucao = `
  SELECT * FROM quest WHERE idQuest = ${idQuestionario}; 
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao)
    .then(resultado => {
      // Se a consulta for bem-sucedida, retorna o resultado
      return resultado; 
    })
    .catch(erro => {
      // Se a consulta falhar, retorna um erro em JSON
      return { error: erro.message };
    });
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(
  id,
  valor_despesa_basica,
  valor_divertimento,
  valor_investido,
  valor_renda,
  valor_reservado,
  situacao_inicial,
  valor_gastar,
  valor_divertir,
  valor_investir,
  valor_reservar,
  situacao_final

) {
  console.log("ACESSEI O Formulario MODEL");

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucaoSql = `INSERT INTO quest (fkUsuario,valor_despesa_basica,valor_divertimento,valor_investido,valor_renda,valor_reservado,situacao_inicial,valor_gastar,valor_divertir,valor_investir,valor_reservar,situacao_final) VALUES ('${id}','${valor_despesa_basica}','${valor_divertimento}','${valor_investido}','${valor_renda}','${valor_reservado}','${situacao_inicial}', '${valor_gastar}','${valor_divertir}','${valor_investir}','${valor_reservar}','${situacao_final}');
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// function cadastrar2(
//   valor_divertir,
//   valor_gastar,
//   valor_investir,
//   valor_reservar,
//   situacao_final
// ) {
//   console.log("ACESSEI O Formulario MODEL");
//   // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//   //  e na ordem de inserção dos dados.
//   var instrucaoSql = `INSERT INTO recomendacao (valor_divertir,valor_gastar,valor_investir,valor_reservar,situacao_final) Values(
//   '${valor_divertir}','${valor_gastar}','${valor_investir}','${valor_reservar}','${situacao_final}');
//   `;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }

module.exports = {
  autenticar,
  Recomendacao,
  cadastrar
  // cadastrar2
};
