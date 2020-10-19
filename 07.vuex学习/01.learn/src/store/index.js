import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            {id: 1, name: 'ok', age: 12},
            {id: 2, name: 'jack', age: 22},
            {id: 3, name: 'tom', age: 20},
            {id: 4, name: 'rose', age: 25},
            {id: 5, name: 'jane', age: 30}
        ]
    },
    mutations: {
        //方法
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        }
        // 状态更新 Vuex的store状态更新的唯一方式:提交Mutation
    },
    getters: {
        cacuCounter(state) {

            //响应式新增与删除
            // Vue.delete(state.info, 'age');
            // Vue.set(state.info, 'address', '华盛顿')


            return state.counter * state.counter
        },
        getOld(state) {
            return state.students.filter(s => s.age > 20)
        },
        getByAge(state) {
            return age => {
                return state.students.filter(s => s.age > age)
            }
        }
    },
    actions: {
        //异步操作不用mutation,context:上下文 payload:传递参数
        // updateInfo(context,payload) {
        //     setTimeout(() => {
        //         context.commit('increment');
        //     }, 1000);
        // }
    },
    modules: {
        //
    }
})

export default store