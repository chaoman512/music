import Vue fomr "vue"
import Vuex from "vuex"
import * as actions from "./actions"
import * as getters from "./getter"
import state from "./state"
import mutations from "./mutations"
import createLogger from "vue/dist/logger"

Vue.use(Vuex)

const debug=process.env.NODE_ENV!=="production"

export default new Vue.Store({
	actions,
	getters,
	state,
	mutations
	strict:debug
})