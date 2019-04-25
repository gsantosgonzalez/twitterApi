import test from 'ava'
const apiMock = {
  get: function () {
    return  Promise.resolve({
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
  }
}

const proxyquire = require('proxyquire')
const getFriends = proxyquire('../functions/helpers/getFriends', { '../api': apiMock })

const friends = [
  'I3OI2I236O',
  'energizatesolar',
  'LabCDMX',
  'GaelDz',
  'alexcceea' 
]

test('get friends', async t => {
  const o = await getFriends('userA', 'userB')
  t.deepEqual(o, [
    friends,
    friends
  ])
})
