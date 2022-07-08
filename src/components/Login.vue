<template>
  <div>
    <h1>Login Page</h1>
    <input type="text" name="username" v-model="input.username" placeholder="username" />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="password"
    />
    <button type="button" v-on:click="login">Log-In</button>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username == "admin" && this.input.password == "password") {
        this.$router.push({ name: "Admin" });
      } else if (this.input.username == "user" && this.input.password == "password") {
        this.$router.push({ name: "User" });
      } else if (this.input.username == "navigate" && this.input.password == "pass") {
        this.$router.push({ name: "Secure" });
      } else {
        console.log("Usename or password incorrect");
      }
    },
  },
};
</script>
