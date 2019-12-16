import file from './file.js'

Page({
  async onLoad () {
    const list = await file.readdir()
    console.log(list)
  }
})
