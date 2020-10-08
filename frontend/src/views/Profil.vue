 <template>
  <div class="profil">
    <div>
      <h1> Bienvenue sur votre profil {{ user.name}} </h1>
      <section>
         <input class="button-signup" type="submit" value="Supprimer son compte" @click="DeleteAccount()">
      </section>
    </div>
  </div>
</template>

<script>
import http from '../http';

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
    const decodedToken = jwt.verify(token, '753215846392576321586015406875');
    const id = decodedToken.userId;
    console.log(id);
    http.get(`/auth/${id}`)
    .then(response => {
        console.log("son goku")
        console.log(response.data);
        this.user = response.data[0];       
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
