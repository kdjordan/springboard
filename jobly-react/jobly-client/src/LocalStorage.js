class LocalStorage{
    static getLocalStorage() {
        console.log('getting')
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
}
export default LocalStorage