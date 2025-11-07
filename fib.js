function fibs(n) {
    // n is the index we are looking for
    let array = []
    let baseOne = 0
    let baseTwo = 1
    array.push(baseOne)
    for (let i = 2; i <= n; i++) {
        const next = baseOne + baseTwo
        array.push(baseTwo)
        baseOne = baseTwo
        baseTwo = next
    }
    return array
}

function fibsRec(n) {
    if (n <= 1) return [0]
    if (n === 2) return [0, 1]
    const prevArray = fibsRec(n - 1)
    const nextArray = prevArray[prevArray.length - 1] + prevArray[prevArray.length - 2]

    return [...prevArray, nextArray]
}

console.log(fibs(10))
console.log(fibsRec(10))
