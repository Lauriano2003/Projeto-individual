function listar() {
    const instrucao = `
    SELECT idUsuario, idPontuacao, nome, fkUsuario, pontuacao FROM usuario
    JOIN pontuacao ON fkUsuario = idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return new Promise((resolve, reject) => {
        global.connection.query(instrucao, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
}

module.exports = { listar };
