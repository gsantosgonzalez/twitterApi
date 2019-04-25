const T = require('../api')
const intersect = require('./intersect')
const getUserName = require('./getUserName')

// Common followers
function getCommonFollowers (userA, userB) {

  const followersPromises = [
    T.get('followers/list', { screen_name: userA, count: 200 }),
    T.get('followers/list', { screen_name: userB, count: 200 })
  ]

  return Promise.all(followersPromises)
    .then(results => {
      let [
        followersA,
        followersB
      ] = results

      followersA = getUserName(followersA.data.users)
      followersB = getUserName(followersB.data.users)

      return [ followersA, followersB ]
    })
    .then((followers) => {
      const [
        followersA,
        followersB
      ] = followers
      return intersect(followersA, followersB)
    }) 
    .catch(e => {
      debugger
      console.log('E>>>', e)
    })
}

module.exports = getCommonFollowers
