Page({
  handleActionAdd(ev) {
    wx.navigateTo({
      url: '../editor/index'
    })
  },
  handleActionList(ev) {
    console.log(ev)
  },
  handleActionSetting(ev) {
    wx.navigateTo({
      url: '../setting/index'
    })
  }
})
