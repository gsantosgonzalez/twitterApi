import test from 'ava'
const getCommonFriends = require('../functions/helpers/getCommonFriends')

const friendsA = [
  'I3OI2I236O',
  'energizatesolar',
  'LabCDMX',
  'GaelDz',
  'alexcceea',
  'asdfGaelDz',
  'alealskdjflxcceea'
]
const friendsB = [
  'askdjfljhas',
  'energizatesolar',
  'LabCDMX',
  'fulanito',
  'alexcceeasdf'
]

const common = [
  'energizatesolar',
  'LabCDMX'
]

test('get common followers', async t => {
  const o = await getCommonFriends(common, friendsA, friendsB)

  t.deepEqual(o, common)
})
