function getUserName (arrayOfUsers) {
  return arrayOfUsers.map(u => u.screen_name)
}

module.exports = getUserName
