-- Up
CREATE TABLE User (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  lastname TEXT,
  avatar TEXT,
  cluster TEXT,
  birthday TEXT,
  description TEXT
);

INSERT INTO User (name, lastname, avatar, cluster, birthday, description) values ('Janna','Joseph','/images/avatars/janna-joseph.jpg','Magento','22','On est 4 dev et il y a 9 projets ! Viiite !');
INSERT INTO User (name, lastname, avatar, cluster, birthday, description) values ('Laura','Crown','/images/avatars/laura-crown.jpg','Salesforce','19','Je ne mange ou bois que des smoothies.');
INSERT INTO User (name, lastname, avatar, cluster, birthday, description) values ('Louise','Light','/images/avatars/louise-light.jpg','Framework','31','Le drupal, je ne vis que pour ça !');
INSERT INTO User (name, lastname, avatar, cluster, birthday, description) values ('Martin','Hosly','/images/avatars/martin-hosly.jpg','Performance','45','Je suis dans un cluster qui a été dissout.');
INSERT INTO User (name, lastname, avatar, cluster, birthday, description) values ('Paul','Parker','/images/avatars/paul-parker.jpg','Proximis','28','Mon secret ? Je veux configurer plus de landing pages en prod.');
INSERT INTO User (name, lastname, avatar, cluster, birthday, description) values ('Sarah','Brown','/images/avatars/sarah-brown.jpg','Magento','34','Coucou, je suis fan de ce que tu fais !');
INSERT INTO User (name, lastname, avatar, cluster, birthday, description) values ('Victor','Shypca','/images/avatars/victor-shypca.jpg','Salesforce','25','Il est ou le Php ? Oh wait...');

-- Down
DROP TABLE User