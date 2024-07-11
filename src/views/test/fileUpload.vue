<template>
    <div>
      <input type="file" @change="handleFileChange" accept="image/*" />
      <button @click="uploadImage">上传图片</button>
      <button @click="imageToBase64">图片转为Base64字符串</button>
      <div>
        <img :src="imageBase64">
        <el-input type="textarea"  disabled :rows="2" :autosize="{ minRows: 2, maxRows: 10}" :value="imageBase64"> </el-input>

      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        file: null,
        imageBase64:''
      };
    },
    methods: {
      handleFileChange(event) {
        this.file = event.target.files[0];
      },
      imageToBase64() {
        if (!this.file) {
          alert('请选择图片');
          return;
        }
        const _this = this;
        const reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = function(e) {
          const base64String = e.target.result;
          _this.imageBase64 = base64String 
        };
      },
      uploadImage() {
        if (!this.file) {
          alert('请选择图片');
          return;
        }
  
        const formData = new FormData();
        formData.append('image', this.file);
  
        axios.post('/dev-api/test/fileUpload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          this.$message.success('上传成功');
        })
        .catch(error => {
          this.$message.success('上传失败');
        });
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  /* 你的样式代码 */
  </style>
  