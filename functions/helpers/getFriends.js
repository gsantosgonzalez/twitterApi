const T = require('../api')
const getUserName = require('./getUserName')

// Friends
function getFriends (userA, userB) {

  const friendsPromises = [
    T.get('friends/list', { screen_name: userA, count: 200 }),
    T.get('friends/list', { screen_name: userB, count: 200 })
  ]
  return Promise.all(friendsPromises)
    .then(results => {
      debugger
      let [
        friendsA,
        friendsB,
      ] = results

      friendsA = getUserName(friendsA.data.users)
      friendsB = getUserName(friendsB.data.users)

      return [ friendsA, friendsB ]
    })
    .catch(e => {
      debugger
      console.log('E>>>', e)
    })
}

module.exports = getFriends
