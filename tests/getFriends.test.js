import test from 'ava'
const proxyquire = require('proxyquire')
const getFriends = proxyquire('../functions/helpers/getFriends', { '../api': { get: {} } })

const friendsMockA = Promise.resolve({
  data: {
    users: [
      { screen_name: 'I3OI2I236O' },
      { screen_name: 'energizatesolar' },
    ]
  }   
})
const friendsMockB = Promise.resolve({
  data: {
    users: [
      { screen_name: 'I3OI2I236O' },
      { screen_name: 'energizatesolar' },
      { screen_name: 'LabCDMX' },
      { screen_name: 'GaelDz' },
      { screen_name: 'alexcceea' }
    ]
  }   
})

const friendsA = [
  'I3OI2I236O',
  'energizatesolar',
]

const friendsB = [
  'I3OI2I236O',
  'energizatesolar',
  'LabCDMX',
  'GaelDz',
  'alexcceea' 
]

test('get friends', async t => {
  const o = await getFriends(
    'userA',
    'userB',
    [ friendsMockA, friendsMockB ]
  )

  t.deepEqual(o, [
    friendsA,
    friendsB
  ])
})
