function calcTotal(ArrOfObj) {

    const arr = [];
    ArrOfObj.forEach(el => {
        const cost = Number(el.price) * Number(el.count)
        arr.push(cost)
    })

    var total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

module.exports = calcTotal