const intersect = require('./intersect')

// Common friends
function getCommonFriends (commonFollowers, friendsA, friendsB) {

  const commonFriendsA = intersect(commonFollowers, friendsA)
  const commonFriendsB = intersect(commonFollowers, friendsB)

  const commonFriends = intersect(commonFriendsA, commonFriendsB)

  return commonFriends
}

module.exports = getCommonFriends
