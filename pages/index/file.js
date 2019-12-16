/** 文件管理器 */
const fm = wx.getFileSystemManager()

/** 文件系统中的用户目录路径 */
const root = wx.env.USER_DATA_PATH

const promisify = fn => {
  return function ({ dirPath = '', path = '', ...args } = {}) {
    dirPath = `${root}/${path}`
    path = `${root}/${path}`
    return new Promise((resolve, reject) => {
      fn.call(fm, { dirPath, path, ...args, success: resolve, fail: reject })
    })
  }
}

export default {
  ...fm,
  access: promisify(fm.access),
  appendFile: promisify(fm.appendFile),
  copyFile: promisify(fm.copyFile),
  getFileInfo: promisify(fm.getFileInfo),
  getSavedFileList: promisify(fm.getSavedFileList),
  mkdir: promisify(fm.mkdir),
  readdir: promisify(fm.readdir),
  readFile: promisify(fm.readFile),
  removeSavedFile: promisify(fm.removeSavedFile),
  rename: promisify(fm.rename),
  rmdir: promisify(fm.rmdir),
  saveFile: promisify(fm.saveFile),
  stat: promisify(fm.stat),
  unlink: promisify(fm.unlink),
  unzip: promisify(fm.unzip),
  writeFile: promisify(fm.writeFile)
}
