Page({
  data: {
    /** 编辑器高度 */
    editorHeight: 300,

    /** 是否显示 action bar */
    actionBarVisible: false,

    /** 目前样式 */
    activeActions: {}
  },

  onLoad() {
    const { windowHeight } = wx.getSystemInfoSync()
    this.setData({ editorHeight: windowHeight })

    /** 监听键盘高度变化 */
    wx.onKeyboardHeightChange(res => {
      wx.pageScrollTo({
        scrollTop: 0,
        success: () => {
          this.setData({ editorHeight: windowHeight - res.height })
          this.editor.scrollIntoView()
        }
      })

      if (res.height === 0) return
      setTimeout(() => {
        this.setData({ editorHeight: windowHeight - res.height })
        this.editor.scrollIntoView()
      }, 1000 * res.duration)
    })
  },

  /** 获取编辑器实例 */
  getEditorContext() {
    return new Promise(resolve => {
      wx.createSelectorQuery()
        .select('#editor')
        .context(({ context }) => {
          /** 绑定编辑器实例 */
          this.editor = context
          resolve(context)
        })
        .exec()
    })
  },

  onEditorFocus() {
    this.setData({ actionBarVisible: true })
  },

  /** 点击编辑器按钮 */
  handleAction({ target }) {
    const { action } = target.dataset
    if (!action) return
    this.editor.format(action)
  },

  /** 编辑器按钮样式 */
  onStatusChange({ detail }) {
    this.setData({ activeActions: detail })
  }
})
