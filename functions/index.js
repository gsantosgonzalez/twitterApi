const functions = require('firebase-functions')
const cors = require('cors')({ origin: true })

const getCommonFollowers = require('./helpers/getCommonFollowers')
const getFriends = require('./helpers/getFriends')
const getCommonFriends = require('./helpers/getCommonFriends')
const TGFObject = require('./helpers/TGFObject')


exports.commonFollowers = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  const users = request.query.usuarios
  const [ userA, userB ] = users.split(',')

  // if (!userA || !userB) return response.send('Error. Usuarios requeridos en querystring "usuarios"')

  return getCommonFollowers(userA, userB).then(common => response.send(common))
});

exports.friends = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  const users = request.query.usuarios
  const [ userA, userB ] = users.split(',')

  // if (!userA || !userB) return response.send('Error. Usuarios requeridos en querystring "usuarios"')

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
      return response.send(commonFriends);
    })

});

exports.tgf = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  const users = request.query.usuarios
  const [ userA, userB ] = users.split(',')

  // if (!userA || !userB) return response.send('Error. Usuarios requeridos en querystring "usuarios"')

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
      const TGF = TGFObject(userA, userB, commonFriends)
      return response.send(TGF)
    })
})
