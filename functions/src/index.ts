import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const helloWorld = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  response.set('Content-Type', 'application/json')

  const user = request.query.user

  response.send(`Hello, ${user}, from Firebase!`);
});

export const commonFollowers = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  response.set('Content-Type', 'application/json');

  const users = request.query.users;

  if (!users) {
    response.send({error: 'Error. Users required in querystring "users"'});
  }

  const [ userA, userB ] = users.split(',');

  if (!userA || !userB) {
    response.send({error: 'Error. Two usernames are required separated by comma'});
  }

  const common = [
    'energizatesolar',
    'LabCDMX',
    'juan_perez'
  ];

  response.send({ data: common }).sendStatus(200);
});

export const friends = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  response.set('Content-Type', 'application/json')

  const users = request.query.users;

  if (!users) {
    response.send({error: 'Error. Users required in querystring "users"'});
  }

  const [ userA, userB ] = users.split(',');

  if (!userA || !userB) {
    response.send({error: 'Error. Two usernames are required separated by comma'});
  }

  const common = [
    'energizatesolar',
    'LabCDMX',
    'juan_perez'
  ];

  response.send({ data: common }).sendStatus(200);

});

export const tgf = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  response.set('Content-Type', 'application/json')

  const users = request.query.users;

  if (!users) {
    response.send({error: 'Error. Users required in querystring "users"'});
  }

  const [ userA, userB ] = users.split(',');

  if (!userA || !userB) {
    response.send({error: 'Error. Two usernames are required separated by comma'});
  }

  const tgfData = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    relaciones: [
      [1, 3],
      [2, 3],
      [1, 4],
      [2, 4]
    ]
  }

  response.send({ data: tgfData }).sendStatus(200);
});