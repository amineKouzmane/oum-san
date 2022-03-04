<template>
    <form>
        <div class="num-cmd">
            <p>{{commande['id_commande']}}</p>
        </div>
        <div class="clnt">
        <label>CLIENT :</label>
            <p>{{commande['nom_client']}}</p>
        </div>
        <div class="dte">
        <label>DATE :</label>
            <p>{{commande['date_commande']}}</p>
        </div>
        <div class="tbl-cmd">
      <table width="100%">
          <thead>
              <tr>
                  <td>PRODUIT</td>
                  <td>QUANTITÉ</td>
                  <td>PRIX UNITAIRE</td>
              </tr>
          </thead>
          <tbody v-if="facture && facture.length">
              <tr v-for="ligne of facture" :key=ligne.nom_article style="border-bottom: 1px solid #FFFFFF">
                  <td style="color: #E29578">{{ligne.nom_article}}</td>
                  <td style="color: #3D3C3C">{{ligne.quantite}}</td>
                  <td>{{ligne.total_ligne}}</td>

              </tr>
          </tbody>
      </table>
  </div>
        <div class="prix-ttl">
            <p>{{commande['total_commande']}}</p>
        </div>
    </form>
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
            toggle: false,
            moggle: false,
            moggle: false,
            commande : {},
            lignes_commande :[],
            ligne_commande: [],
            articles :[],
            facture : [],
            articles_noms:{}

        }
    },
    methods:{
        getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        }
    },

     mounted() {   
        var commande_object = JSON.parse(this.$route.params.commande);
        this.commande['id_commande'] = commande_object['id_commande'];
        this.commande['nom_client'] = commande_object['nom_client'].toUpperCase();
        this.commande['date_commande'] = commande_object['date_commande'];
        this.commande['total_commande'] = commande_object['total_commande'];
        
      axios.get(`https://api.oum-san.com/articles`)
      .then(response => {
      // JSON responses are automatically parsed.
      this.articles = response.data["data"] 
      this.articles.forEach((element, index, array) => {
          this.articles_noms[element.id_article] = element['libelle_article'] 
         })
            
      }).catch(e => {this.errors.push(e)});

    axios.get(`https://api.oum-san.com/lignescommande`)
      .then(response => {
      // JSON responses are automatically parsed.
      this.lignes_commande = response.data["data"]
      this.ligne_commande = this.lignes_commande.filter(item => item.id_commande === this.commande['id_commande'])
      this.ligne_commande.forEach((element, index, array) => {

       console.log('nom',this.articles_noms)

        var ligne = {}
        ligne['nom_article']= this.articles_noms[element.id_article]
        ligne['quantite']= element.quantite_ligne_commande
        ligne['total_ligne'] = element.prix_ligne_commande
         console.log(ligne)
         this.facture.push(ligne)
         })
         console.log("factures",this.facture)
         }).catch(e => {this.errors.push(e)}) 
       }

}
</script>

<style scoped>

form {
    background-color: white;
    margin-top: 142px;
    position: absolute;
    margin-left: 69px;
    padding-left: 1015px;
    padding-bottom: 98px;
    padding-top: 54px;
    border-radius: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    font-size: 14px;
    box-shadow: 2px 5px 8px #0000003d;
}
.num-cmd p{
    padding-right: 20px;
    position: absolute;
    margin-left: -383px;
    margin-top: -14px;
    background: #006D77;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    border-radius: 10px;
    color: white;
    letter-spacing: 1px;
    font-size: 16px;
}
.clnt label {
    margin-left: -942px;
    float: left;
    margin-top: 81px;
    position: absolute;
    letter-spacing: 1px;
    font-size: 16px;
}
.clnt p {
    position: absolute;
    margin-left: -821px;
    margin-top: 81px;
    color: #3D3C3C;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 1px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.dte label {
    margin-left: -414px;
    float: left;
    margin-top: 81px;
    position: absolute;
    letter-spacing: 1px;
    font-size: 16px;
}
.dte p {
    position: absolute;
    margin-left: -311px;
    margin-top: 81px;
    color: #3D3C3C;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 1px;
    
}
.tbl-cmd {
    background: #f0f0f0;
    margin-top: 149px;
    margin-left: -909px;
    margin-right: 100px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 2px 5px 8px #0000003d;
}
.tbl-cmd thead td {
  color: #006D77;
  font-size: 16px;
  padding-top: 2px;
  padding-bottom: 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 1px;
  font-weight: 800;
}
.tbl-cmd tbody td {
  padding-top: 20px;
  padding-bottom: 30px;
  color: #000000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 1px;
  font-weight: 800;
}
.prix-ttl p{
    padding-right: 20px;
    position: absolute;
    margin-left: -290px;
    margin-top: 30px;
    background: #006D77;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    border-radius: 10px;
    color: white;
    letter-spacing: 1px;
    font-size: 16px;
}
</style>