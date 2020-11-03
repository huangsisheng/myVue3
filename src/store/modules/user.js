const user = {
    state:{
        token:"",
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ],
        routeList:[]
    },
    mutations:{
        ['SET_ROUTE_LIST'](state,data){
            state.routeList = data
        }
    },
    actions:{
        setRouteList({commit},data){
            commit('SET_ROUTE_LIST',data)
        }
    },
    getters:{
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    }
}

export default user