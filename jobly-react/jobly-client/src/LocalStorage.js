class LocalStorage{
    static getLocalStorage() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) return user
        return false
    }
    static setLocalStorage(user) {
        localStorage.setItem('user', JSON.stringify(user))   
    }
}
export default LocalStorage