const routes = module.exports = require('next-routes')()

routes
    .add({ pattern: '/redux', page: 'redux' })
    .add({ pattern: '/reduxhook', page: 'reduxhook' })
    .add({ pattern: '/', page: 'index' })
    .add({ pattern: '(.*)', page: 'notfound' })
