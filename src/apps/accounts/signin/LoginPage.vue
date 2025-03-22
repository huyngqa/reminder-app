<template>
  <div v-if="checkLogin"></div>

  <section v-else>
    <h2>Nhớ uống nước mỗi ngày bạn nhé!</h2>
    <div class="container" id="container">
      <div class="form-container sign-in-container">
        <form v-if="loginForm" @submit.prevent="loginAccount">
          <h1>Đăng nhập</h1>
          <input v-model="form.username" type="text" placeholder="Tên đăng nhập" maxlength="40"/>
          <span v-if="errors.usernameRequired" class="text-danger">Vui lòng nhập tên đăng nhập</span>
          <span v-if="errors.usernameMinLength" class="text-danger">Tên đăng nhập phải lớn hơn 12 kí tự</span>
          <span v-if="errors.usernameMaxLength" class="text-danger">Tên đăng nhập không quá 40 kí tự</span>

          <input v-model="form.password" type="password" placeholder="Mật khẩu" maxlength="40"/>
          <span v-if="errors.passwordRequired" class="text-danger">Vui lòng nhập mật khẩu</span>
          <span v-if="errors.passwordMinLength" class="text-danger">Mật khẩu ít nhất 6 kí tự</span>
          <span v-if="errors.passwordMaxLength" class="text-danger">Mật khẩu không quá 40 kí tự</span>

          <div>
            <input v-model="form.remember" type="checkbox" id="exampleCheck1" style="width: 10px; margin-bottom: 0;">
            <label for="exampleCheck1"><span style="font-size: 15px">Nhớ mật khẩu</span></label>
          </div>

          <span class="text-danger">{{ messageError }}</span>
          <button class="input_account" type="submit">Đăng nhập</button>
        </form>
      </div>

      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Chào mừng bạn quay lại!</h1>
            <p>Bạn đã có tài khoản, đăng nhập bằng tài khoản của bạn</p>
            <button class="ghost" @click="redirectToLogin" id="signIn">Đăng nhập</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Chào bạn!</h1>
            <p>Nếu bạn chưa có tài khoản, hãy đăng ký và cùng kết nối với mọi người</p>
            <button class="ghost" @click="redirectToRegister" id="signUp">Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      checkLogin: false,
      loginForm: true,
      form: {
        username: "",
        password: "",
        remember: false,
      },
      errors: {
        usernameRequired: false,
        usernameMinLength: false,
        usernameMaxLength: false,
        passwordRequired: false,
        passwordMinLength: false,
        passwordMaxLength: false,
      },
      messageError: "",
    };
  },
  methods: {
    loginAccount() {
      this.validateForm();
      if (Object.values(this.errors).some((error) => error)) {
        return;
      }
      console.log("Logging in with:", this.form);
    },
    validateForm() {
      this.errors.usernameRequired = this.form.username.trim() === "";
      this.errors.usernameMinLength = this.form.username.length > 0 && this.form.username.length < 12;
      this.errors.usernameMaxLength = this.form.username.length > 40;
      
      this.errors.passwordRequired = this.form.password.trim() === "";
      this.errors.passwordMinLength = this.form.password.length > 0 && this.form.password.length < 6;
      this.errors.passwordMaxLength = this.form.password.length > 40;
    },
    redirectToLogin() {
      this.$router.push("/login");
    },
    redirectToRegister() {
      console.log(this.$router);
    if (this.$router) {
      console.log("abc");
      this.$router.push('/signup'); // Điều hướng đến trang đăng ký
    } else {
      console.error('Vue Router is not available');
    }
  }
  },
};
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
  box-sizing: border-box;
}

section {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
}

h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

.input_account:hover{
  background-color: red;
  color: white;
  cursor: pointer;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #FF4B2B;
  background-color: #FF4B2B;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #FFFFFF;
}
button.ghost:hover {
  cursor: pointer;
  background-color: #FF4B2B;
}
form {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25),
  0 10px 10px rgba(0,0,0,0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container{
  transform: translateX(-100%);
}

.overlay {
  background: #FF416C;
  background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
  background: linear-gradient(to right, #FF4B2B, #FF416C);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}
.social-container a:hover{
  background: #f857a6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

.social-container a {
  border: 1px solid #DDDDDD;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}

</style>
