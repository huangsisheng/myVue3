// 查询字符串转对象
export function query2obj(){
    const _url = location.search
    return _url.replace(/(^\?)|($&)/g, '').split('&').reduce((prev, cur) => {
        const [k, v] = cur.split('=')
        prev[k] = decodeURIComponent(v)
        return prev
    }, {})
}

// 对象转字符串
export function obj2query(obj) {
    return Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&')
}