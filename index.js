const getCommonFollowers = require('./functions/helpers/getCommonFollowers')
const getFriends = require('./functions/helpers/getFriends')
const getCommonFriends = require('./functions/helpers/getCommonFriends')
const TGFtext = require('./functions/helpers/TGFtext')

// TODO: update as param
const userB = process.argv[3]
const userA = process.argv[2]

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
