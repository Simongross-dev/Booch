const app = Vue.createApp({
    data(){
      return {
        password: '',
        passwordOrg: '123',
        message:  ''
      }
    },
    methods: {
      checkPassword(password){
        if (this.password === this.passwordOrg) {
          this.message = "✓";
          document.getElementById("response").style.color = "#88ff00";
          document.querySelector(".pw-page").classList.add("invisible");
        } else {
          this.message =
            "Das Passwort stimmt nicht über ein. Bitte versuchen Sie es erneut";
          document.getElementById("response").style.color = "red";
        }
      }
    }
  })
  app.mount('#app');