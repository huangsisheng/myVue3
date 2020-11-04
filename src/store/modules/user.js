const user = {
    state: {
        token: "",
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ],
        routeList: [],
        fastRouteList: [],
    },
    mutations: {
        ['SET_ROUTE_LIST'](state, data) {
            state.routeList = data
        },
        ['SET_FAST_ROUTE_LIST'](state, data) {
            if (!state.fastRouteList.length) {
                state.fastRouteList.push(data)
            } else {
                let flag = state.fastRouteList.every((route) => route.name != data.name)
                flag && state.fastRouteList.push(data)
            }
            console.log(state.fastRouteList)

        },
        ['DEL_FAST_ROUTE_LIST'](state, index) {
            state.fastRouteList.splice(index,1)
        }
    },
    actions: {
        setRouteList({ commit }, data) {
            commit('SET_ROUTE_LIST', data)
        },
        setFastRouteList({ commit }, data) {
            commit('SET_FAST_ROUTE_LIST', data)
        },
        delFastRouteList({ commit }, index) {
            commit('DEL_FAST_ROUTE_LIST', index)
        }
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    }
}

export default user