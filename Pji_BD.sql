/*
comandos para mysql server
*/
DROP DATABASE IF EXISTS Wealthwise;
CREATE DATABASE Wealthwise;

USE Wealthwise; 

CREATE TABLE quest (
	idQuest INT PRIMARY KEY AUTO_INCREMENT,
    valor_renda DECIMAL(10, 2),
    valor_despesa_basica DECIMAL(10, 2),
	valor_divertimento DECIMAL(10, 2),
    valor_investido DECIMAL(10, 2),
    valor_reservado DECIMAL(10, 2),
    situacao_inicial INT
);

CREATE TABLE recomendacao(
    idReco INT PRIMARY KEY AUTO_INCREMENT,
    valor_gastar DECIMAL(10, 2),
    valor_divertir DECIMAL(10, 2),
    valor_investir DECIMAL(10, 2),
    valor_reservar DECIMAL(10, 2),
    situacao_final INT
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_quest INT,
    fk_reco INT,
	FOREIGN KEY (fk_quest) REFERENCES quest(idQuest),
    FOREIGN KEY (fk_reco) REFERENCES recomendacao(idReco)
);

CREATE TABLE conta (
	idConta INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(25),
    valor DECIMAL(10, 2),
    fk_reco INT,
    fk_user INT,
    FOREIGN KEY (fk_reco) REFERENCES recomendacao(idReco),
    FOREIGN KEY (fk_user) REFERENCES usuario(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

SELECT * FROM usuario;
