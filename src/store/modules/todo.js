import axios from 'axios'

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
  fetchTodos: ({ commit }) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        commit('updateTodos', response.data)
      })
      .catch(err => {
        console.log(err);
      }) 
  },
  AddTodo: ({ commit }, todoValue) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', todoValue)
      .then(response => {
        commit('addTodoToList', response.data);
      })
      .catch(err => {
        console.log(err);
      })
  } 
}

const mutations = {
  updateTodos: (state, data) => {
    state.todos = data;
  },
  addTodoToList: (state, data) => {
    state.todos.unshift(data);
  }
}

export default {
    state,
    getters,
    actions,
    mutations
}