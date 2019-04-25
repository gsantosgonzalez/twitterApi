import test from 'ava'
import TGFObject from '../functions/helpers/TGFObject'

const userA = 'I3OI2I236O'
const userB = 'energizatesolar'
const common = [
  'LabCDMX',
  'GaelDz'
]

const equal = {
  1: userA,
  2: userB,
  3: common[0],
  4: common[1],
  relaciones: [
    [1, 3],
    [2, 3],
    [1, 4],
    [2, 4],
  ]
}

test('get TGF as object', async t => {
  const o = TGFObject(userA, userB, common)
  t.deepEqual(o, equal)
})
