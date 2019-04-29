"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Content-Type', 'application/json');
    const user = request.query.user;
    response.send(`Hello, ${user}, from Firebase!`);
});
exports.commonFollowers = functions.https.onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Content-Type', 'application/json');
    const users = request.query.users;
    if (!users) {
        response.send({ error: 'Error. Users required in querystring "users"' });
    }
    const [userA, userB] = users.split(',');
    if (!userA || !userB) {
        response.send({ error: 'Error. Two usernames are required separated by comma' });
    }
    const common = [
        'energizatesolar',
        'LabCDMX',
        'juan_perez'
    ];
    response.send({ data: common }).sendStatus(200);
});
exports.friends = functions.https.onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Content-Type', 'application/json');
    const users = request.query.users;
    if (!users) {
        response.send({ error: 'Error. Users required in querystring "users"' });
    }
    const [userA, userB] = users.split(',');
    if (!userA || !userB) {
        response.send({ error: 'Error. Two usernames are required separated by comma' });
    }
    const common = [
        'energizatesolar',
        'LabCDMX',
        'juan_perez'
    ];
    response.send({ data: common }).sendStatus(200);
});
exports.tgf = functions.https.onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Content-Type', 'application/json');
    const users = request.query.users;
    if (!users) {
        response.send({ error: 'Error. Users required in querystring "users"' });
    }
    const [userA, userB] = users.split(',');
    if (!userA || !userB) {
        response.send({ error: 'Error. Two usernames are required separated by comma' });
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
    };
    response.send({ data: tgfData }).sendStatus(200);
});
//# sourceMappingURL=index.js.map