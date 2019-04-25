const intersect = require('./helpers/intersect')
const T = require('./apiconfig')

// TODO: update as param
const userB = process.argv[3]
const userA = process.argv[2]

function getUserName (arrayOfUsers) {
  return arrayOfUsers.map(u => u.screen_name)
}

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

// Common friends
function getCommonFriends (commonFollowers, friendsA, friendsB) {

  const commonFriendsA = intersect(commonFollowers, friendsA)
  const commonFriendsB = intersect(commonFollowers, friendsB)

  const commonFriends = intersect(commonFriendsA, commonFriendsB)

  return commonFriends
}

function TGFtext (userA, userB, common) {
  console.log('1. ' + userA)
  console.log('2. ' + userB)

  common.forEach((c, i) => {
    const n = i+3
    console.log(n + '. ' + c)
  })

  common.forEach((c, i) => {
    const n = i+3
    console.log('1.', n + '.')
    console.log('2.', n + '.')
  })
}

// -------
// Exec
let commonFollowers,
  friendsA, friendsB,
  commonFriends

Promise
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
    TGFtext(userA, userB, commonFriends)
  })


