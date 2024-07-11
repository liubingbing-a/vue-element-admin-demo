module.exports = [
    {
      url: '/test/fileUpload',
      type: 'post',
      response: config => {
        return {
          code: 200,
          message:'上传成功'
        }
      }
    },
]