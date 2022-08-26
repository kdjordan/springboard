class LocalStorage{
    static getLocalStorage() {
        try {
            const user = JSON.parse(localStorage.getItem('token'));
            return user
        } catch (error) {
            return false
        }
    }
    static setLocalStorage(token) {
        localStorage.setItem('token', JSON.stringify(token))   
    }
    static emptyLocalStorage() {
        console.log('clearing storage')
        localStorage.clear()
    }
}
export default LocalStorage