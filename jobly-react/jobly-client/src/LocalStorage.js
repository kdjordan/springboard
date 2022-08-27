class LocalStorage{
    static getLocalStorage() {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            return user
        } catch (error) {
            return false
        }
    }
    static setLocalStorage(user) {
        localStorage.setItem('user', JSON.stringify(user))   
    }
    static emptyLocalStorage() {
        localStorage.clear()
    }
}
export default LocalStorage