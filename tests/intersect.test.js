import test from 'ava'
import intersect from '../functions/helpers/intersect'

const arrayA = [
  'RespiroDeporte',
  'unicef_es',
  'SaveChildrenEs',
  'rocio_911',
  'LearningLaravel',
  'ferOliveram',
  'oscarMtzNarva',
  '-----',
  'I3OI2I236O',
  'energizatesolar',
  'LabCDMX',
  'GaelDz',
  'alexcceea'
]
const arrayB = [
  'cristianjesuslu',
  'MARIO271989',
  'I3OI2I236O',
  'SoneMex',
  'energizatesolar',
  'LabCDMX',
  'GaelDz',
  'alexcceea',
  'gsantosg1982',
  'Ing_Gabriel_P_C',
  'Yesenia02137749',
  'Mario_ydeal',
  'AlejoEddi',
  'yamilethlopval',
  'lu15p4ch3c0',
  'ALAN_SANTOS_B',
  'kiimgooz',
  'riccceea',
  'marytaSmith',
  'FlorQueen94'
]

test('intersect should pass', async t => {
  const u = intersect(arrayA, arrayB)
  t.deepEqual(u, [
    'I3OI2I236O',
    'energizatesolar',
    'LabCDMX',
    'GaelDz',
    'alexcceea'
  ])
})
test('intersect should fail', async t => {
  const u = intersect(arrayA, arrayB)
  t.notDeepEqual(u, [
    'I3OI2I236O',
    'energizatesolar',
    'alexcceea'
  ])
})
