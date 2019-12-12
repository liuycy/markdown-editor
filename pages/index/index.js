Page({
  data: {
    files: [],
    rootPath: wx.env.USER_DATA_PATH
  },
  onLoad: function() {
    var fm = wx.getFileSystemManager();
    fm.readdir({
      dirPath: this.data.rootPath,
      success: res => {
        this.setData({
          files: res.files
        });
      },
      fail: err => {
        console.error(err);
      }
    });
  }
});
