CREATE DATABASE IF NOT EXISTS catalogo_jogos;
USE catalogo_jogos;

CREATE TABLE jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    imagem_url VARCHAR(255) NOT NULL,
    resumo TEXT NOT NULL
);

TRUNCATE TABLE jogos;INSERT INTO jogos (nome, genero, imagem_url, resumo) VALUES 

('League of Legends', 'MOBA', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg', 'Um jogo de equipe focado em estratégia onde duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra.'),

('Valorant', 'FPS Tático', 'https://s2-ge.glbimg.com/BrLamt90xzjk17lApBWEOCzT28U=/0x0:2560x1440/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/4/G/xXHeVfTGe4bMldoEdMRQ/valorant-riot-games.jpg', 'Um jogo de tiro tático 5x5 baseado em personagens da Riot Games. Precisão letal e habilidades únicas se misturam.'),

('Counter-Strike 2', 'FPS', 'https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg', 'O próximo capítulo da franquia CS, com gráficos atualizados, novas mecânicas de fumaça e mapas reformulados.'),

('Minecraft', 'Mundo Aberto', 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a', 'Famoso e atemporal, jogo de construção em mundo aberto.');

***(sempre que quiser adicionar um novo jogo na database, tem que entrar no railway.sql, apagar os jogos que já estão lá adicionados,
pois eles não vão ser apagados do banco, e fazer o INSERT do novo jogo)***
