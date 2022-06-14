class ExpressError extends Error {
    constructor(mssg, status) {
        super()
        this.status = status
        this.mssg = mssg
        console.error(this.stack)
    }
}

module.exports = ExpressError