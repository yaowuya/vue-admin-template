// import api from '@/api/index'
import { getToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  async login({ commit }, userInfo) {
    try {
      // const { username, password } = userInfo
      // const res = await api.user.login({ username: username.trim(), password: password })
      // return res
      return userInfo
    } catch (e) {
      return Promise.reject(e)
    }
  },

  // get user info
  async getInfo({ commit, state }) {
    try {
      // const res = await api.user.getInfo()
      const data = { roles: 'admin', name: 'admin' }
      console.log(data)
      if (!data) {
        return Promise.reject('验证失败,请重新登录')
      }

      const { roles, name } = data

      commit('SET_ROLES', roles)
      commit('SET_NAME', name)

      return data
    } catch (e) {
      return Promise.reject(e)
    }
  },
  // user logout
  async logout({ commit, state }) {
    try {
      // await api.user.logout()
      resetRouter()
      commit('RESET_STATE')
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

