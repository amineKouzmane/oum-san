<template>
  
    <h3>NOUVEAU CLIENT</h3>
    <form>
        <div class="nom-client">
        <label>NOM</label>
        <input type="text" placeholder="NOM CLIENT" required v-model="nom_client">
        </div>
        <div class="tel-client">
        <label>TÉLÉPHONE</label>
        <input type="text" placeholder="NUMERO TEL" required v-model="tel_client">
        </div>
        <div class="ice-client">
        <label>ICE</label>
        <input type="text" placeholder="ICE CLIENT" required v-model="ice_client">
        </div>
        <div class="adresse-client">
        <label>ADRESSE</label>
        <input type="text" placeholder="ADRESSE CLIENT" required v-model="adresse_client">
        </div>
    </form>
    <button class="btin" @click="goToClient()"> VALIDER 
    <img class="img-vad" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
  </button>
  
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            nom_client: '',
            tel_client: '',
            adresse_client: '',
            ice_client: '',
            new_client: {},
            toggle: false,
            moggle: false,
            clients: [],
            last_id_client: null,
        }
    },
    
    methods: {
        async goToClient(){

    var results= await this.Clients()
    console.log(results)

     var id_list = []
         results.forEach((client, index, array) => {
                id_list.push(Number(client.id_client));
                });
        
          
    id_list = id_list.sort(function (a, b) {  return a - b;  });
    console.log(id_list )
    this.last_id_client = id_list[id_list.length - 1] ;
    console.log('id last : ',this.last_id_client + 1);
   
    this.new_client['nom_client'] = this.nom_client;
    this.new_client['adresse_client'] = this.adresse_client;
    this.new_client['ice_client'] = this.ice_client;
    this.new_client['tel_client'] = this.tel_client;
    this.new_client['id_client'] = Number(this.last_id_client )+ 1;
    console.log(this.new_client);
    axios.post('https://api.oum-san.com/clients', null, { params: this.new_client })
        .then(function (response) {
            console.log(response);
                })
        .catch(function (error) {
            console.log(error);
  });

  
  this.$router.push('/Clients'); 

   
   },

   async Clients(){
       let clients = await axios.get(`https://api.oum-san.com/clients`);
       this.clients = clients.data["data"]
       return clients.data["data"]
   }

    },
    created(){
       
},
}
</script>

<style scoped>
h3 {
    margin-top: 119px;
    margin-left: 52px;
    position: absolute;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
    color: #006D77;
}
form {
    background-color: white;
    margin-top: 248px;
    position: absolute;
    margin-left: 69px;
    padding-left: 1015px;
    padding-bottom: 345px;
    padding-top: 54px;
    border-radius: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    font-size: 14px;
    box-shadow: 2px 5px 8px #0000003d;
}
.nom-client input {
    margin-left: -967px;
    width: 40%;
    position: absolute;
    margin-top: 10px;
    border-radius: 10px;
    padding-top: 11px;
    padding-left: 11px;
    padding-bottom: 11px;
    border: 1px solid #006D77;
    background-color: #F0F0F0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #006D77;
    font-weight: 700;
    letter-spacing: 1px;
    
    
}
.nom-client label {
    margin-left: -942px;
    float: left;
    margin-top: -25px;
    position: absolute;
    letter-spacing: 1px;
}

.tel-client input {
    margin-left: -470px;
    width: 38%;
    position: absolute;
    margin-top: 10px;
    border-radius: 10px;
    padding-top: 11px;
    padding-left: 11px;
    padding-right: 11px;
    padding-bottom: 11px;
    border: 1px solid #006D77;
    background-color: #F0F0F0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #006D77;
    font-weight: 700;
    letter-spacing: 1px;
    justify-content: right;
    
    
    
}
.tel-client label {
    margin-left: -443px;
    float: left;
    margin-top: -25px;
    position: absolute;
    letter-spacing: 1px;
}
.ice-client input {
    margin-left: -967px;
    width: 40%;
    position: absolute;
    margin-top: 131px;
    border-radius: 10px;
    padding-top: 11px;
    padding-left: 11px;
    padding-bottom: 11px;
    border: 1px solid #006D77;
    background-color: #F0F0F0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #006D77;
    font-weight: 700;
    letter-spacing: 1px;
    
    
}
.ice-client label {
    margin-left: -942px;
    float: left;
    margin-top: 92px;
    position: absolute;
    letter-spacing: 1px;
}
.adresse-client input {
    margin-left: -967px;
    width: 60%;
    position: absolute;
    margin-top: 250px;
    border-radius: 10px;
    padding-top: 11px;
    padding-left: 11px;
    padding-bottom: 11px;
    border: 1px solid #006D77;
    background-color: #F0F0F0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #006D77;
    font-weight: 700;
    letter-spacing: 1px;
    
    
}
.adresse-client label {
    margin-left: -942px;
    float: left;
    margin-top: 211px;
    position: absolute;
    letter-spacing: 1px;
}

.btin{
  margin-top: 702px;
  margin-left: 830px;
  padding: 13px 125px 13px 12px;
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
.img-vad{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
  margin-left: 79px;
}
</style>