import test from 'ava'
import getUserName from '../functions/helpers/getUserName'

const users = [
  { screen_name: 'I3OI2I236O' },
  { screen_name: 'energizatesolar' },
  { screen_name: 'LabCDMX' },
  { screen_name: 'GaelDz' },
  { screen_name: 'alexcceea' }
]

test('should return usernames from array', async t => {
  const u = getUserName(users)
  t.deepEqual(u, [
    'I3OI2I236O',
    'energizatesolar',
    'LabCDMX',
    'GaelDz',
    'alexcceea' 
  ])
})
