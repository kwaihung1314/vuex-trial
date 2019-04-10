const state = {
  todos: [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    }
  ]
}

const getters = {
  getAllTodos: (state) => state.todos
}

const actions = {

}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}