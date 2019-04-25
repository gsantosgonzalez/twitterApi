import test from 'ava'
const proxyquire = require('proxyquire')
const getCommonFollowers = proxyquire('../functions/helpers/getCommonFollowers', { '../api': { get: {} } })

const friendsA = Promise.resolve({
  data: {
    users: [
      { screen_name: 'I3OI2I236O' },
      { screen_name: 'energizatesolar' },
      { screen_name: 'LabCDMX' },
      { screen_name: 'GaelDz' },
      { screen_name: 'alexcceea' },
      { screen_name: 'asdfGaelDz' },
      { screen_name: 'alealskdjflxcceea' }
    ]
  }   
})
const friendsB = Promise.resolve({
  data: {
    users: [
      { screen_name: 'askdjfljhas' },
      { screen_name: 'energizatesolar' },
      { screen_name: 'LabCDMX' },
      { screen_name: 'fulanito' },
      { screen_name: 'alexcceeasdf' }
    ]
  }   
})

const common = [
  'energizatesolar',
  'LabCDMX'
]

test('get common followers', async t => {
  const o = await getCommonFollowers(
    'userA',
    'userB',
    [ friendsA, friendsB ]
  )

  t.deepEqual(o, common)
})
