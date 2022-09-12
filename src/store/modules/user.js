export default {
    state: () => ({
        name:"hoan"
    }),
    getters: {},
    mutation: {
        SET_NAME(state,data) {
            state.name = data
        }
    },
    actions: {
        saveName({commit}, data){
            commit('SET_NAME',data)
        }
    }
}