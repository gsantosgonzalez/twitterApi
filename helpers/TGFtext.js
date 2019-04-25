function TGFtext (userA, userB, common) {
  console.log('1. ' + userA)
  console.log('2. ' + userB)

  common.forEach((c, i) => {
    const n = i+3
    console.log(n + '. ' + c)
  })

  common.forEach((c, i) => {
    const n = i+3
    console.log('1.', n + '.')
    console.log('2.', n + '.')
  })
}

module.exports = TGFtext

