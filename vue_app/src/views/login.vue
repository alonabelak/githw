<template>
  <div class="card auth-form">
    <div class="card-content">
      <div class="card-title">Sign in</div>
      <form @submit="login">
        <div class="input-field">
          <input id="email" type="email" class="validate" v-model="email">
          <label for="email">Email</label>
        </div>

        <div class="input-field">
          <i class="material-icons prefix">vpn_key</i>
          <input id="password" type="password" class="validate" v-model="pass">
          <label for="password">Password</label>
        </div>

        <div class="btn-group">
          <router-link class="btn waves-effect waves-light grey" to="/">
            Back
            <i class="material-icons left">keyboard_backspace</i>
          </router-link>
          <button class="btn waves-effect waves-light" type="submit">
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return {
            email:'demo@localhost.ua',
            pass:''
        }
    },
    methods: {
        login(e){
            e.preventDefault();
            if(this.email!="" && this.pass!=""){
                if(this.email==="demo@localhost.ua" && this.pass==="1234"){
                    localStorage.setItem('my_user', JSON.stringify({"email":this.email, "pass":this.pass}));
                    this.$router.push('/');
                }else {
                    alert("Invalid email or password");
                }
            }else {
                alert("Enter credentials");
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.auth-form {
  min-width: 400px;

  .input-field {
    margin-bottom: 2rem;
  }

  .card-title {
    margin-bottom: 2rem;
    text-align: center;
  }

  .btn-group {
    display: flex;
    justify-content: space-between;
  }
}
</style>

