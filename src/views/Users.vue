<template>
  <div class="events">
    <h1 class="title is-1">Liste des users</h1>
    <div class="showEvent">
      <Table class="table">
        <thead>
          <tr class="">
            <th>Name</th>
            <th>Firstname</th>
            <th>Mail</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users">
            <td>{{user.name}}</td>
            <td>{{user.firstname}}</td>
            <td>{{user.mail}}</td>
            <td @click="DeleteUser(user)"><img src="../assets/delete-24px.svg" alt=""></td>
          </tr>
        </tbody>        
      </Table>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            users : []
        }
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        getUsers(){
            api.get("/users", {
                headers:{'Authorization' : 'Bearer '+this.$store.state.token,
                'Origin' : 'ok'}}
                ).then(response => {
                this.users = response.data.users;
            }).catch(error => {
                console.log(error.response.data.message)
            })
        },

        DeleteUser(user){
        api.delete("/users/"+user.id, {
            headers:{'Authorization' : 'Bearer '+this.$store.state.token,
            'Origin' : 'ok'}}
            ).then(response => {
            alert("Le user est supprimé");
            this.getUsers();
        }).catch(error => {
            console.log(error.response.data.message)
        })
        }
    },
}
</script>