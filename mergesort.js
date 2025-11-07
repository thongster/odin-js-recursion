function mergeSort(n) {
    // n is an array
    if (n.length <= 1) {
        return n
    }

    const left = n.slice(0, Math.floor(n.length / 2))
    const right = n.slice(Math.floor(n.length / 2))

    const sortLeft = mergeSort(left)
    const sortRight = mergeSort(right)

    // console.log(sortLeft)
    // console.log(sortRight)
    
    return merge(sortLeft, sortRight)
}

function merge(left, right) {
    let array = []
    let a = 0
    let b = 0

    while (a < left.length && b < right.length) {
        if (left[a] > right[b]) {
            array.push(right[b])
            b++
        } else {
            array.push(left[a])
            a++
        }
    }

    return array.concat(left.slice(a)).concat(right.slice(b))
}


console.log(mergeSort([]))
console.log(mergeSort([73]))
console.log(mergeSort([1, 2, 3, 4, 5]))
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))