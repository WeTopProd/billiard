
function counterCalc(items) {
    let count = 0
    const allCounts = items.map(el => el.count)
    for (let i = 0; i < allCounts.length; i++) {   
        count +=Number(allCounts[i])     
    }
    return count
}

module.exports = counterCalc

