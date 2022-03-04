<template v-cloak>
  <div class="threee">
  <button class="btnn" @click="goToNewClient()"> NOUVEAU CLIENT 
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMTY0MDYyIDAtMjU2IDExNC44MzU5MzgtMjU2IDI1NnMxMTQuODM1OTM4IDI1NiAyNTYgMjU2IDI1Ni0xMTQuODM1OTM4IDI1Ni0yNTYtMTE0LjgzNTkzOC0yNTYtMjU2LTI1NnptMTEyIDI3Ny4zMzIwMzFoLTkwLjY2Nzk2OXY5MC42Njc5NjljMCAxMS43NzczNDQtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzFzLTIxLjMzMjAzMS05LjU1NDY4Ny0yMS4zMzIwMzEtMjEuMzMyMDMxdi05MC42Njc5NjloLTkwLjY2Nzk2OWMtMTEuNzc3MzQ0IDAtMjEuMzMyMDMxLTkuNTU0Njg3LTIxLjMzMjAzMS0yMS4zMzIwMzFzOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFoOTAuNjY3OTY5di05MC42Njc5NjljMC0xMS43NzczNDQgOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFzMjEuMzMyMDMxIDkuNTU0Njg3IDIxLjMzMjAzMSAyMS4zMzIwMzF2OTAuNjY3OTY5aDkwLjY2Nzk2OWMxMS43NzczNDQgMCAyMS4zMzIwMzEgOS41NTQ2ODcgMjEuMzMyMDMxIDIxLjMzMjAzMXMtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
  </button>
  </div>
  <div class="cmd-client">
      <table width="100%">
          <thead>
              <tr>
                  <td>NOM</td>
                  <td>ADRESSE</td>
                  <td>TÉLÉPHONE</td>
                  <td>ICE</td>
              </tr>
          </thead>
          <tbody v-if="clients && clients.length">
              <tr v-for="client of clients" :key=client.id_client style="border-bottom: 1px solid #8d939531">
                  <td style="color: #006D77">{{client.nom_client}}</td>
                  <td>{{client.adresse_client}}</td>
                  <td>{{client.tel_client}}</td>
                  <td style="color: #E29578">{{client.ice_client}}</td>
                  <td> 
                      <img :data-id="client.id_client" @click="openList($event)" class="threee-dot" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxNS41NTUgNTE1LjU1NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoNi4xMjMyMzM5OTU3MzY3NjZlLTE3LC0xLDEsNi4xMjMyMzM5OTU3MzY3NjZlLTE3LDAuMDAwNTA1NDQ3Mzg3Njk1MzEyNSw1MTUuNTU0NTIxNTYwNjY5KSI+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDk2LjY3OSAyMTIuMjA4YzI1LjE2NyAyNS4xNjcgMjUuMTY3IDY1Ljk3MSAwIDkxLjEzOHMtNjUuOTcxIDI1LjE2Ny05MS4xMzggMC0yNS4xNjctNjUuOTcxIDAtOTEuMTM4IDY1Ljk3MS0yNS4xNjcgOTEuMTM4IDAiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zMDMuMzQ3IDIxMi4yMDhjMjUuMTY3IDI1LjE2NyAyNS4xNjcgNjUuOTcxIDAgOTEuMTM4cy02NS45NzEgMjUuMTY3LTkxLjEzOCAwLTI1LjE2Ny02NS45NzEgMC05MS4xMzggNjUuOTcxLTI1LjE2NyA5MS4xMzggMCIgZmlsbD0iIzAwNmQ3NyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTExMC4wMTQgMjEyLjIwOGMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOCA2NS45NzEtMjUuMTY3IDkxLjEzOCAwIiBmaWxsPSIjMDA2ZDc3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
            
                      <ul :id="client.id_client" class="lis-links-client">
                        <li>
                            <a @click="goToUpdateClient($event)">Modifier</a>
                        </li>
                        <li>
                            <a @click="Delete($event)">Supprimer</a>
                        </li>
                          
                      </ul>
                  </td>

              </tr>
              
          </tbody>
      </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Clients',
    data(){
        return  {
            toggle: false,
            boggle: false,
            clients:[],
            selected_item:''
            
        }
    },

    mounted() {

    axios.get(`https://api.oum-san.com/clients`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.clients = response.data["data"]
      console.log(response.data["data"])

    })
    .catch(e => {
      this.errors.push(e)
    })
    },

  methods:{
   goToUpdateClient(event){ 
     const client_to_update = this.clients.find(item => item.id_client === this.selected_item);
    var client_data = {id_client: this.selected_item ,
                      nom_client: client_to_update['nom_client'],
                      tel_client: client_to_update['tel_client'],
                      adresse_client: client_to_update['adresse_client'],
                      ice_client: client_to_update['ice_client']};
    this.$router.push({name: 'ModifierClient', params: {client : JSON.stringify(client_data)} }  ); 
   },

   goToNewClient(){
   this.$router.push('/NouveauClient'); 
   },
   openList(event){
       
       this.boggle = !this.boggle
       var id = event.target.getAttribute('data-id')
       var liss = document.getElementById(id)
       this.selected_item = id
       
       if (this.boggle === true) {
           liss.style.display  = 'block'     
       }
       else {
           liss.style.display  = 'none'    
       }
   },
   Delete(event){
     var delete_id = "?id_client="+this.selected_item
     axios.delete(`https://api.oum-san.com/clients`+delete_id)
    .then(response => {
      // JSON responses are automatically parsed.
      console.log(response.data["data"])
      window.location.reload();

    })
    .catch(e => {
      this.errors.push(e)
    })

        }
   
  }
}


</script>

<style scoped>
body {
overflow-x: hidden;
overflow-y: hidden;
}
.btnn{
  margin-top: 110px;
  margin-left: 845px;
  padding: 13px 48px 13px 12px;
  background-color: #006D77; 
  border: none;
  color: white;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 10px;
  letter-spacing: 1px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
img{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
}
table{
  border-collapse: collapse;
}
.cmd-client {
  background: #ffffff;
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 47px;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 2px 5px 8px #0000003d;
}
/*td {
  border-bottom: 1px solid #8d939531;
}*/
thead td {
  color: #006D77;
  font-size: 16px;
  padding-top: 2px;
  padding-bottom: 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 1px;
  font-weight: 800;
}
tbody td {
  padding-top: 20px;
  padding-bottom: 30px;
  color: #3D3C3C;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 1px;
  font-weight: 800;
}

 [v-cloak] {
  display: none;
}
.threee-dot  {
    margin-left: -29px;
    position: absolute;
    margin-top: -11px;
    cursor: pointer;
    width: 20px;
    height: 20px;
}
.lis-links-client {
  padding: 0 22px;
    list-style-type: none;
    background-color: #006D77;
    /* margin-right: 0px; */
    margin-left: -150px;
    border-radius: 10px;
    margin-top: 15px;
    display: none;
    box-shadow: 2px 5px 8px #0000003d;
    border: 1px solid #006D77;
    /* z-index: -1; */
    position: absolute;
 }

 .lis-links-client li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .lis-links-client a {
   font-size: 14px;
   color: #ffffff;
   margin-right: 5px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
  .lis-links-client a:hover {
      color: #E29578;
 } 

</style>