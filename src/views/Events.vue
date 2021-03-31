<template>
  <div class="events">
    <h1 class="title is-1">Liste des events</h1>
    <div class="showEvent">
      <Table class="table">
        <thead>
          <tr class="">
            <th>Title</th>
            <th>description</th>
            <th>date</th>
            <th>mail creator</th>
            <th>adress</th>
            <th>public</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events">
            <td>{{event.event.title}}</td>
            <td>{{event.event.description}}</td>
            <td>{{event.event.date}}</td>
            <td>{{event.event.creator.mail}}</td>
            <td>{{event.event.adress}}</td>
            <td>{{event.event.public}}</td>
            <td @click="DeleteEvent(event.event)"><img src="../assets/delete-24px.svg" alt=""></td>
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
      events : [],
    }
  },
  mounted() {

    this.getEvents();

  },

  methods: {
    getEvents(){
      api.get("/events", {
        headers:{'Authorization' : 'Bearer '+this.$store.state.token,
        'Origin' : 'ok'}}
        ).then(response => {
        this.events = response.data.events;
        console.log(response.data.events['0']['event'])
      }).catch(error => {
        console.log(error.response.data.message)
      })
    },
    DeleteEvent(event){
      api.delete("/events/"+event.id, {
        headers:{'Authorization' : 'Bearer '+this.$store.state.token,
        'Origin' : 'ok'}}
        ).then(response => {
          alert("L'event est supprimé");
          this.getEvents();
      }).catch(error => {
        console.log(error.response.data.message)
      })
    }
  },
}
</script>

<style lang="scss">

table{
  margin: auto;
}
  
</style>
