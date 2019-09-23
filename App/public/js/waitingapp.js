var randomUser = new Vue({
  el: '#fetchPerson',
  data: {
    people: []
   },
   methods: {
     fetchPeople() {
       fetch('https://randomuser.me/api/')
       .then(response =>  response.json())
       .then(json => {randomUser.people = json })
     }
   },
   created() {
     this.fetchPeople()
   }
});
