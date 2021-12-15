var http = require('@phoenix_fan/fetch')

const baseUrl = 'https://mock.mengxuegu.com/mock/61b9aed2ca09cb42105ae342'

http.get(`${baseUrl}/api/test`, {
  params: {
    a: 6
  }
})

http.post(`${baseUrl}/api/test`, {
  data: {
    b: 8
  }
})
