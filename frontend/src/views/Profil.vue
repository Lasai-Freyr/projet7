 <template>
  <div class="profil">
    <div>
      <h1> Bienvenue sur votre profil {{ user}} </h1>
      <section>
         <input class="button-signup" type="submit" value="Supprimer son compte" @click="DeleteAccount()">
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Profil",
  data() {
    return {
      user: {},
    }

  },
  mounted() {
    
    
    console.log("gogeta")
    const jwt = require('jsonwebtoken');
    const token = localStorage.getItem('token');
    const decodedToken = jwt.verify(token, 'RANDOM TOKEN_SECRET');
    const id = decodedToken.userId;
    console.log(id);
    axios.get(`http://localhost:8080/api/auth/${id}`)
    .then(response => {
        console.log("son goku")
        console.log(response);
        //this.user = response.data[0];       
    })  
  },  
  methods: {
    DeleteAccount() {
      this.$store.dispatch('delete');
      this.$router.push('/');
      window.alert("Compte supprimé");
    },    
  }, 
}
</script>
