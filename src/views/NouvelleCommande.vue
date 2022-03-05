<template>
  
    <h3>NOUVELLE COMMANDE</h3>
    <form>
          <label>CLIENT</label>
        <div  class="ddown-client">
        <div class="ddown-select-client">
      <span class="slct-client">{{client_selected}}</span>
      <img @click="openModalClient()" class="ddown-icon-client" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkRvd25fQXJyb3dfM18iIGQ9Im02NCA4OGMtMS4wMjMgMC0yLjA0Ny0uMzkxLTIuODI4LTEuMTcybC00MC00MGMtMS41NjMtMS41NjMtMS41NjMtNC4wOTQgMC01LjY1NnM0LjA5NC0xLjU2MyA1LjY1NiAwbDM3LjE3MiAzNy4xNzIgMzcuMTcyLTM3LjE3MmMxLjU2My0xLjU2MyA0LjA5NC0xLjU2MyA1LjY1NiAwczEuNTYzIDQuMDk0IDAgNS42NTZsLTQwIDQwYy0uNzgxLjc4MS0xLjgwNSAxLjE3Mi0yLjgyOCAxLjE3MnoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
    </div>
      <ul id="blcksClient" class="blc-link-client">
        <li v-for="(value, name) in client_commande_noms" :key=name >
          <a @click="filterClient($event)">{{value}}</a>
        </li>
      </ul>
  </div>
        <div class="date">
        <label>DATE</label>
        <input type="date" placeholder="22/02/2021" required v-model="date">
        </div>

        <div class="title-PQ">
          <h2>PRODUIT</h2>
          <h3>QUANTITÉ</h3>
        </div>
    <div v-for="article of articles" :key=article.id_article class="line">
                <div  class="ddown">
            <div class="ddown-select">
              <span class="slct">{{article.libelle_article}}</span>
            </div>
        </div>
  
        <div class="qte">
             <input type="text" placeholder="QUANTITÉ" :id="(article.id_article)+qte" required >
        </div>
              
    </div>

        
    
      <button class="btin" @click.prevent="goToVentes()"> VALIDER 
    <img class="img-vad" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
  </button>
    
    </form>
    
  
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            toggle: false,
            moggle: false,
            moggle: false,
            client_selected:'CLIENT',
            client_commande_noms:{},
            clients:[],
            articles:[],
            articles_id:{},
            selected_item:'',
            selected_articles: [],
            qte : 'qte',
            last_id_article: 0,
            date:'',
        }
    },
    mounted(){

      axios.get(`https://api.oum-san.com/clients`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.clients = response.data["data"]
      
      var clients_object = this.clients 
      
      clients_object.forEach((element, index, array) => {
          var client_merge = this.clients.find(item => item.id_client === element.id_client)
          this.client_commande_noms[element.id_client] = client_merge['nom_client'] 
            });
    

    })
    .catch(e => {
      this.errors.push(e)
    });

    axios.get(`https://api.oum-san.com/articles`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.articles = response.data["data"]

      

      var articles_object = this.articles 
      articles_object.forEach((element, index, array) => {
          var article_merge = array.find(item => item.id_article === element.id_article)
          this.articles_id[element.id_article] = article_merge['libelle_article'] 
            });



    });

    axios.get(`https://api.oum-san.com/lignescommande`)
    .then(response => {
      // JSON responses are automatically parsed.
    var id_list = []
    response.data["data"].forEach((article, index, array) => {
                id_list.push(Number(article.id_ligne_commande));
                });
        
          
    id_list = id_list.sort(function (a, b) {  return a - b;  });
    console.log(id_list)
    this.last_id_article = id_list[id_list.length - 1] ;
    console.log('id last : ',this.last_id_article + 1);
      



    });



    

    
    // .catch(e => {
    //   this.errors.push(e)
    // })

    },
    methods: {
   openModalClient(){
       
       this.toggle = !this.toggle
       console.log(this.toggle)
       var bloc = document.getElementById('blcksClient')
       
       if (this.toggle === true) {
           bloc.style.display  = 'block'
           console.log("this is if")
           
       }
       else {
           bloc.style.display  = 'none'
           console.log("this is else")
           
       }
   },
    
   getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
    },
   filterClient(event){

     console.log(event.target.innerText)
       this.client_selected = event.target.innerText
       this.toggle = !this.toggle
       var bloc = document.getElementById('blcksClient')
       if (this.toggle === true) {
           bloc.style.display  = 'block'}
       else {
           bloc.style.display  = 'none' } 
      var id_filter = this.getKeyByValue(this.client_commande_noms, this.client_selected)
      console.log('selected id_client',id_filter)
        },

    goToVentes(){ 
      
      var commande = {
        date_commande : this.date,
        id_client: this.getKeyByValue(this.client_commande_noms, this.client_selected)
      }
      var self = this
      var articles_id = this.articles_id
      var last_id_article = this.last_id_article
      

      //add commande
      axios.post('https://api.oum-san.com/commandes', null, { params:commande })
        .then(function (response) {
            
            var nouvelle_commande = response.data["data"]; 
            var lignes_commandes =[]
            console.log()
            for (const [id, nom] of Object.entries(articles_id)) {
                  var ligne_commande = {};
                      ligne_commande['id_commande'] = nouvelle_commande['id_commande'];
                      ligne_commande['id_article'] = id;
                      ligne_commande['quantite_ligne_commande'] = document.getElementById(id+"qte").value;
                      ligne_commande['id_ligne_commande'] = Number(last_id_article)+1;
                      lignes_commandes.push(ligne_commande)
                      last_id_article = Number(last_id_article)+1;}

          lignes_commandes.forEach((ligne, index, array) => {

                axios.post('https://api.oum-san.com/lignescommande', null, { params: ligne })
                .then(function (response) {
                  console.log(response);
                   
                })

            });


        
          self.$router.push('/Ventes');
                })
        .catch(function (error) {
            console.log(error);
  });

      
    }


    }
}
</script>

<style scoped>
.line {
  margin-bottom: -108px;
}
h3 {
    margin-top: 130px;
    margin-left: 52px;
    margin-bottom: -141px;
    float: left;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
    color: #006D77;
}
form {
    background-color: white;
    margin-top: 200px;
    position: absolute;
    margin-left: 69px;
    padding-left: 1015px;
    padding-bottom: 97px;
    padding-top: 54px;
    border-radius: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    font-size: 14px;
    box-shadow: 2px 5px 8px #0000003d;
} 

img{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
}

.dropdown {
    width: 15rem;
    position: absolute;
    margin-left: 96px;
    margin-top: 110px;
 }
 .dropdown-select {
   padding: 8px 38px 30px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
   
 }
 .select{
    letter-spacing: 1px;
    margin-left: -112px;
    color: #006D77;
    float: left;
    position: absolute;
}
 
.dropdown-icon  {
    margin-left: 117px;
    position: absolute;
}
.ddown-client {
    width: 22rem;
    position: absolute;
    margin-left: -921px;
    margin-top: 10px;
 }
 .ddown-select-client {
   padding: 8px 15px 30.5px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
   
 }
 .slct-client{
    letter-spacing: 1px;
    margin-left: 11px;
    color: #006D77;
    float: left;
    /* position: absolute; */
    margin-top: 2px;
    
}
 
.ddown-icon-client  {
    float: right;
    width: 25px;
}
.blc-link-client {
    padding: 0 22px;
    list-style-type: none;
    background-color: rgb(255, 255, 255);
    /* margin-right: 0px; */
    margin-left: -46px;
    border-radius: 10px;
    margin-top: 7px;
    display: none;
    box-shadow: 2px 5px 8px #0000003d;
    border: 1px solid #006D77;
    z-index: 100;
    position: absolute;

 }

 .blc-link-client li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
    
 }
 .blc-link-client a {
   font-size: 16px;
   color: #006D77;
   margin-right: 185px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
 .blc-link-client a:hover {
      color: #E29578;
 }
label {
    margin-left: -942px;
    float: left;
    margin-top: -25px;
    letter-spacing: 1px;
}

.date input {
    margin-left: -470px;
    width: 39.1%;
    position: absolute;
    margin-top: 10px;
    border-radius: 10px;
    padding-top: 9px;
    padding-left: 11px;
    padding-right: 11px;
    padding-bottom: 9px;
    border: 1px solid #006D77;
    background-color: #F0F0F0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #006D77;
    font-weight: 700;
    letter-spacing: 1px;
    justify-content: right;
    
    
    
}
.date label {
    margin-left: -443px;
    float: left;
    margin-top: -25px;
    position: absolute;
    letter-spacing: 1px;
}
.title-PQ h2 {
    margin-top: 124px;
    margin-left: -1812px;
    /* position: absolute; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    color: #006D77;
    margin-bottom: -135px;
    font-size: 14px;
}
.title-PQ h3 {
        margin-top: 119px;
    margin-left: -318px;
    /* position: absolute; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    color: #006D77;
    font-size: 14px;
}
.ddown {
    width: 32rem;
    /* position: absolute; */
    margin-left: -921px;
    margin-top: 153px;
 }
 .ddown-select {
   padding: 8px 15px 30.5px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
   
 }
 .slct{
    letter-spacing: 1px;
    margin-left: 11px;
    color: #006D77;
    float: left;
    /* position: absolute; */
    margin-top: 2px;
    
}
 
.ddown-icon  {
    float: right;
    width: 25px;
}
.blc-link {
    padding: 0 22px;
    list-style-type: none;
    background-color: rgb(255, 255, 255);
    /* margin-right: 0px; */
    margin-left: -46px;
    border-radius: 10px;
    margin-top: 7px;
    display: none;
    box-shadow: 2px 5px 8px #0000003d;
    border: 1px solid #006D77;
    z-index: 100;
    position: absolute;

 }

 .blc-link li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
    
 }
 .blc-link a {
   font-size: 16px;
   color: #006D77;
   margin-right: 346px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
 .blc-link a:hover {
      color: #E29578;
 }

 .qte input {
    margin-left: -351px;
    /* width: 98.15%; */
    /* position: absolute; */
    margin-top: -40px;
    border-radius: 10px;
    padding-top: 11px;
    padding-bottom: 10px;
    border: 1px solid #006D77;
    background-color: #F0F0F0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #006D77;
    font-weight: 700;
    letter-spacing: 1px;
    padding-left: 11px;
    display: block;
    
    
}
.qte label {
    margin-left: -323px;
    float: left;
    margin-top: 119px;
    position: absolute;
    letter-spacing: 1px;
}

.btin{
  margin-top: 136px;
    margin-left: -282px;
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
    position: inherit;
    letter-spacing: 1px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.img-vad{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -1.8%;
  margin-left: 79px;
}
.but-NV{
  margin-top: 2px;
}
</style>