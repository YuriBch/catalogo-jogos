CREATE DATABASE catalogo_jogos;
USE catalogo_jogos;

CREATE TABLE jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    imagem_url VARCHAR(255) NOT NULL,
    resumo TEXT NOT NULL
);

INSERT INTO jogos (nome, genero, imagem_url, resumo) VALUES 
('League of Legends', 'MOBA', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg', 'Um jogo de equipe focado em estratégia onde duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra.'),
('Valorant', 'FPS Tático', 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc725aa40a6b7d342/5eb29cb5f190bc575eb82fb8/V_AGENTS_587x900_Jett.png', 'Um jogo de tiro tático 5x5 baseado em personagens da Riot Games. Precisão letal e habilidades únicas se misturam.'),
('Counter-Strike 2', 'FPS', 'https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg', 'O próximo capítulo da franquia CS, com gráficos atualizados, novas mecânicas de fumaça e mapas reformulados.');