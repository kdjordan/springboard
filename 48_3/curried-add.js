function curriedAdd(total) {
    if (!total) return 0

    return function next(num)  {
        if (!num) return total
        total += num
        return next
    }
}

module.exports = { curriedAdd };
