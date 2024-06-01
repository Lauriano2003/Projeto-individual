var formularioModel = require("../models/formularioModel");
// var aquarioModel = require("../models/aquarioModel");

function exibir(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    formularioModel
      .exibir(email, senha)
      .then(function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
        if (resultadoAutenticar.length == 1) {
          console.log(resultadoAutenticar);
          res.json(resultadoAutenticar[0]);
        } else if (resultadoAutenticar.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}
function Recomendacao(req, res) {
  var idQuestionario = req.body.idQuest;
  formularioModel.Recomendacao(idQuestionario)
    .then(resultado => {
      // Se a consulta for bem-sucedida, envia o resultado como JSON
      res.status(200).json(resultado); 
    })
    .catch(erro => {
      // Se a consulta falhar, envia a mensagem de erro como JSON
      res.status(500).json({ error: erro.message });
    });
}
function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  // var nome = req.body.nomeServer;
  // var email = req.body.emailServer;
  var id = req.body.idServer;
  var valor_renda = req.body.rendaServer;
  var valor_despesa_basica = req.body.despesaServer;
  var valor_divertimento = req.body.divertimentoServer;
  var valor_investido = req.body.investidoServer;
  var valor_reservado = req.body.reservadoServer;
  var situacao_inicial = req.body.situacao_iServer;
  var valor_divertir = req.body.divertirServer;
  var valor_gastar = req.body.gastarServer;
  var valor_investir = req.body.investirServer;
  var valor_reservar = req.body.reservarServer;
  var situacao_final = req.body.situacao_fServer;




  // Faça as validações dos valores
  if (
    valor_renda == undefined
    //  ||
    // valor_despesa_basica == undefined ||
    // valor_divertimento == undefined
  ) {
    res.status(400).send("Seus dados estão undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo formularioModel.js
    formularioModel
      .cadastrar(id,
        valor_despesa_basica,
        valor_divertimento,
        valor_investido,
        valor_renda,
        valor_reservado,
        situacao_inicial,
        valor_gastar ,
        valor_divertir ,
        valor_investir ,
        valor_reservar ,
        situacao_final 
       
      )
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

// function cadastrar2(req, res) {
//   // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
 
//   // var id = req.body.idServer;
  // var valor_divertir = req.bod.divertirServer;
  // var valor_gastar = req.bod.gastarServer;
  // var valor_investir = req.bod.investirServer;
  // var valor_reservar = req.bod.reservarServer;
  // var situacao_final = req.bod.situacao_fServer;


//   // Faça as validações dos valores
//   if (
//     valor_gastar == undefined
//     //  ||
//     // valor_despesa_basica == undefined ||
//     // valor_divertimento == undefined
//   ) {
//     res.status(400).send("Seus dados estão undefined!");
//   } else {
//     // Passe os valores como parâmetro e vá para o arquivo formularioModel.js
//     formularioModel
//       .cadastrar(
//         valor_divertir,
//         valor_gastar,
//         valor_investir,
//         valor_reservar,
//         situacao_final
//       )
//       .then(function (resultado) {
//         res.json(resultado);
//       })
//       .catch(function (erro) {
//         console.log(erro);
//         console.log(
//           "\nHouve um erro ao realizar o cadastro! Erro: ",
//           erro.sqlMessage
//         );
//         res.status(500).json(erro.sqlMessage);
//       });
//   }
// }

module.exports = {
  exibir,
  cadastrar,
  Recomendacao
};
