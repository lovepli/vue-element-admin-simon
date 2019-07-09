import Mock from 'mockjs'

const list = []
const count = 88

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    // 随机生成图片主键
    uploadCode: '@guid',
    // 随机生成uploadId
    uploadId: '@increment',
    // 随机生成图片名
    uploadName: '@last()',
    // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
    uploadLocalUrl: "@dataImage('1000x600', '')",
    // 随机生成创建时间
    createTime: '@datetime()',
    // 随机生成是否收藏
    'uploadIsfavorite|1': [0, 1]
  }))
}

const galleryData = {
  list: list,
  total: list.length
}

export default {
  getPhotoList: () => {
    return {
      galleryData
    }
  },
  updatePhoto: () => {
    return {
      message: '更新成功！'
    }
  },
  deletePhoto: () => {
    return {
      message: '删除成功！'
    }
  }
}
