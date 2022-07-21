const choice = (arr) => {
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

const remove = (items, item) => {
    let arr = items.filter(i => {
        return i !== item
    })
    return arr

}

export {choice,remove}
