// store/index.js
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos: [
        { content: 'テスト', created: '2021-08-23 17:00', state: '作業前' },
        { content: 'コーディング', created: '2021-08-24 16:00', state: '作業中' },
        { content: '環境構築', created: '2020-08-25 15:30', state: '完了' }
      ],
      option: [
        { id: 0, label: "作業前" },
        { id: 1, label: "作業中" },
        { id: 2, label: "完了" },
      ]
    }),
    mutations: {
      insert: (state, obj) => {
        const d = new Date()
        const fmt = d.getFullYear() +
          '-' + ('00' + (d.getMonth() + 1)).slice(-2) +
          '-' + ('00' + (d.getDate() + 1)).slice(-2) +
          '-' + ('00' + (d.getHours() + 1)).slice(-2) +
          ':' + ('00' + (d.getMinutes() + 1)).slice(-2)
        state.todos.unshift({
          content: obj.content,
          created: fmt,
          state: '作業前'
        })
      },
      changeState: (state, obj) => {
        for (let index = 0; index < state.todos.length; index++) {
          const ob = state.todos[index];
          if (ob.content == obj.content && ob.created == obj.created) {
            let nowstate
            for (let inindex = 0; inindex < state.option.length; inindex++) {
              if (state.option[inindex].label == ob.state) {
                nowstate = state.option[index].id
              }
            }
            nowstate++
            if (nowstate >= state.option.length) {
              nowstate = 0
            }
            obj.state = state.option[nowstate].label
            return
          }
        }
      },
      remove:(state, obj) => {
        for (let index = 0; index < state.todos.length; index++) {
          const ob = state.todos[index];
          if(ob.content == obj.content && ob.created == obj.created) {
            if(confirm("'" + obj.content + "'を削除しますか？")) {
              state.todos.splice(i, 1);
              return
            }
          }
        }
      }
    }
  })
}

export default createStore
