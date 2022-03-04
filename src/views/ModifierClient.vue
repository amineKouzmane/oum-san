<template>
  
    <h3>MODIFIER CLIENT</h3>
    <form>
        <div class="nom-client-mod">
        <label>NOM</label>
        <input type="text" :placeholder="client.nom_client" v-model="nom_client">
        </div>
        <div class="tel-client-mod">
        <label>TÉLÉPHONE</label>
        <input type="text" :placeholder="client.tel_client" required v-model="tel_client">
        </div>
        <div class="ice-client-mod">
        <label>ICE</label>
        <input type="text" :placeholder="client.ice_client" required v-model="ice_client">
        </div>
        <div class="adresse-client-mod">
        <label>ADRESSE</label>
        <input type="text" :placeholder="client.adresse_client" required v-model="adresse_client">
        </div>
    </form>
    <button class="btin-mod" @click="goToClient()"> MODIFIER 
    <img class="img-vad-mod" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
  </button>
  
</template>

<script>
import axios from 'axios';
export default {
    
      mounted() {   
        var client_object = JSON.parse(this.$route.params.client);
        this.client['nom_client'] = client_object['nom_client'];
        this.client['tel_client'] = client_object['tel_client'];
        this.client['ice_client'] = client_object['ice_client'];
        this.client['adresse_client'] = client_object['adresse_client'];
        
      },

    data() {
        return {
            nom_client: '',
            tel_client: '',
            adresse_client: '',
            ice_client: '',
            toggle: false,
            moggle: false,
            moggle: false,
            client : { }
        }
    },
    methods: {
        goToClient(){
            let self = this
        var client_object = JSON.parse(this.$route.params.client)
        this.client['nom_client'] = this.nom_client ? this.nom_client : client_object['nom_client'];
        this.client['tel_client'] = this.tel_client ? this.tel_client : client_object['tel_client'];
        this.client['ice_client'] = this.ice_client ? this.ice_client : client_object['ice_client'];
        this.client['adresse_client'] = this.adresse_client ? this.adresse_client : client_object['adresse_client'];
        this.client['id_client'] = client_object['id_client']
        console.log('this.client button',this.client)
    axios.put('https://api.oum-san.com/clients', null, { params: this.client })
        .then(function (response) {
            console.log(response);
            self.$router.push('/Clients');;
                })
        .catch(function (error) {
            console.log(error);
  });
    
   }

    }
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
.nom-client-mod input {
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
.nom-client-mod label {
    margin-left: -942px;
    float: left;
    margin-top: -25px;
    position: absolute;
    letter-spacing: 1px;
}

.tel-client-mod input {
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
.tel-client-mod label {
    margin-left: -443px;
    float: left;
    margin-top: -25px;
    position: absolute;
    letter-spacing: 1px;
}
.ice-client-mod input {
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
.ice-client-mod label {
    margin-left: -942px;
    float: left;
    margin-top: 92px;
    position: absolute;
    letter-spacing: 1px;
}
.adresse-client-mod input {
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
.adresse-client-mod label {
    margin-left: -942px;
    float: left;
    margin-top: 211px;
    position: absolute;
    letter-spacing: 1px;
}

.btin-mod{
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
.img-vad-mod{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
  margin-left: 79px;
}

</style>