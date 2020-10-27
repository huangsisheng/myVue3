const user = {
    state:{
        token:"",
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
    },
    getters:{
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    }
}

export default user