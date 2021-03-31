<template>
  <div class="mainCon">
    <h1>Connexion</h1>

    <div class="Connexion">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="form-connexion">
          <form  @submit.prevent="seConnecter">
            <div class="field">
                <input v-model="username" class="input" type="text" placeholder="Username">
            </div>
            <div class="field">
                <input v-model="password" class="input" type="password" placeholder="Password">
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-success">
                  Connexion
                </button>
              </p>
            </div>
          </form>
      </div>
    </div>

  </div>

</template>

<script>
import jwt_decode from "jwt-decode";
export default {
  
  data() {
    return {
      username:"",
      password:"",
    }
  },
  mounted() { 
          
  },
  methods: {
    seConnecter(){
      let token = Buffer.from(this.username+':'+this.password+'', 'utf8').toString('base64');
      
      api.post('/signIn', {
          username: this.username,
          password : this.password
      },{
        headers:{
          'Authorization' : 'Basic '+token,
          'Origin' : 'ok'
        }
      }
      ).then(response => {
          let tokendecode = jwt_decode(response.data);
          this.$store.commit('setAdmin', tokendecode['user']);
          this.$store.commit('setToken', response.data);
          console.log(tokendecode['user']);
          this.$router.push('/Events')
      }).catch(error => {
          alert("Veuillez saisir le bon login et mot de passe");
          //alert(error.response.data.message)
      })
    }
  },
}
</script>

<style lang="scss">
div.mainCon{
  h1{
    padding-top: 100px;
    font-size: 50px;
    padding-bottom: 100px;
  }
}
div.Connexion{
  display: flex;
  justify-content: space-evenly;
  div.logo{
    width:10%;
  }
  div.form-connexion{
    border: 1px solid black;
    border-radius: 5%;
    box-shadow: 0px 3px 20px 2px black;
    width: 40%;
    form{
      div.field{
        margin: auto;
        margin-bottom: 25px;
        width: 80%;
        input{
          height:50px;
        }
      }
      div.field:first-of-type{
        margin-top:20px;
        
      }
    }

  }
}
  
</style>
