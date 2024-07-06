<template>
  <div class="not-found">
    <div class="not-found-container">
      <h1>404</h1>
      <h2>页面未找到</h2>
      <p>抱歉，您要访问的页面不存在。请检查您输入的 URL 是否正确，或者点击下面的按钮返回首页。</p>
      <router-link to="/" class="home-button">返回首页</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.not-found-container {
  text-align: center;
  background: #fff;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.not-found h1 {
  font-size: 10rem;
  margin: 0;
  color: #ff6f61;
}

.not-found h2 {
  font-size: 2rem;
  margin: 20px 0;
  color: #333;
}

.not-found p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 30px;
}

.home-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #ff6f61;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #e65550;
}
</style>
