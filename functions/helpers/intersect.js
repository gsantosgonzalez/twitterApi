function intersect (arrayA, arrayB) {
  return arrayA.filter(e => arrayB.includes(e))
}

module.exports = intersect
