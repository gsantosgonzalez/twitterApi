const uniq = require('./helpers/uniq')
const Twit = require('twit')

/*
// const T = new Twit({
  // consumer_key: '4LKphBbf3077nBlliAMNzpQXM',
  // consumer_secret: 'pXH43u3KvRwwzrz16K9NOTm60jmhn4TlnSBBnqxTBxJIgtUShV',
  // access_token: '985236639814504449-j7ulHEQ5dKPmZvGjcagrXuITXCL8rpu',
  // access_token_secret: '7qS4LuJ3iJ6XZO5lW1cDTV3280ckRv7lOsLmgHpJYnM3i',
// })
const T = new Twit({
  consumer_key: 'Ja9PY1Q6N3RIXEa7U90gYslH0',
  consumer_secret: 'STrcxaWAsfmAu83nclUNGamzHDhSimbJCdQKf46MIHEcVj8o2V',
  access_token: '985236639814504449-giR1gUD08VzZA6feMUiwNBVVCXWnOJZ',
  access_token_secret: 'HSPnNMfC3PRq1xjyTAMjyvuXS6GoUOHNq5EXO0fDMDAqL',
})


// TODO: update as param
const userB = process.argv[3]
const userA = process.argv[2]

// Ask twitter API
const followersPromises = [
  T.get('followers/list', { screen_name: userA }),
  T.get('followers/list', { screen_name: userB })
]

Promise.all(followersPromises)
  .then(results => {
    const [ resultsA, resultsB ] = results
    const resultsAClean = resultsA.data.users.map(u => u.screen_name)
    const resultsBClean = resultsB.data.users.map(u => u.screen_name)
    console.log(resultsAClean, resultsBClean)
  })
  .catch(e => {
    debugger
    console.log('E>>>', e)
  })
//
*/

