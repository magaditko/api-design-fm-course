setTimeout(() => {
  throw new Error('oops')
}, 300)

//handle the Node errors
process.on('uncaughtException', () => {

})

process.on('unhandledRejection', () => {

})
