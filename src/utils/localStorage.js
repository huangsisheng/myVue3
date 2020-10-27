const localStorage = window.localStorage

const storage = {
    set: function (key,value) {
        return localStorage.setItem(key,JSON.stringify(value))
    },
    get: function (key){
        return JSON.parse(localStorage.getItem(key))
    },
    clearItem: function (key) {
        return localStorage.removeItem(key)
    },
    clearAll: function () {
        return localStorage.clear()
    },
}

export default storage