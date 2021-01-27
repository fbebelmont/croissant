const sqlite = require('sqlite');

async function setup() {
  const db = await sqlite.open('./users.sqlite');
  await db.migrate({force: 'last'});

  const users = await db.all('SELECT * FROM user');
  console.log('ALL USERS', JSON.stringify(users, null, 7));
}

setup()
