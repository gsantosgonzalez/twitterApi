const functions = require('firebase-functions');

const getCommonFollowers = require('./helpers/getCommonFollowers')
const getFriends = require('./helpers/getFriends')
const getCommonFriends = require('./helpers/getCommonFriends')
const TGFtext = require('./helpers/TGFtext')


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.followers = functions.https.onRequest((request, response) => {
  const users = request.query.usuarios
  const [ userA, userB ] = users.split(',')

  let commonFollowers,
    friendsA, friendsB,
    commonFriends

  return Promise
    .all([
      getCommonFollowers(userA, userB),
      getFriends(userA, userB)
    ])
    .then(([ common, friends ]) => {
      commonFollowers = common
      const [ friendsA, friendsB ] = friends
      return [ commonFollowers, friendsA, friendsB ]
    })
    .then(([ commonFollowers, friendsA, friendsB ]) => {
      const commonFriends = getCommonFriends(commonFollowers, friendsA, friendsB)
      console.log('Followers >>> \n', commonFollowers, '\n')
      console.log('Friends >>', commonFriends, '\n')
      // TGFtext(userA, userB, commonFriends)
      return response.send(commonFriends);
    })

});
