function TGFObject (userA, userB, common) {
  let obj = {
    1: userA,
    2: userB
  }

  common.forEach((c, i) => {
    const n = i+3
    obj[n] = c
  })

  let rel = []

  common.forEach((c, i) => {
    const n = i+3
    rel.push(
      [1, n],
      [2, n]
    )
  })

  obj.relaciones = rel
  return obj
}

module.exports = TGFObject

