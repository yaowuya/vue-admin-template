import request from '@/utils/request'

export default {
  // 登陆
  login: async function(data) {
    return await request.post('/testLogin', data)
  },
  getInfo: async function() {
    return await request.get('/getInfo')
  },
  logout: async function() {
    return await request.post('/logout')
  }
}
