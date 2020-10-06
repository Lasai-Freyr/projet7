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
      user: null,
    }

  },
  
  mounted() {
  const userAd =  localStorage.getItem('user');
  const toke =  localStorage.getItem('token');
  console.log( userAd);
  console.log( "token", toke);
  console.log("gogeta");
  },
  methods: {
    DeleteAccount() {
       const userAd =  localStorage.getItem('user');
        console.log( userAd);
      console.log("axios del post");
      axios.delete(`http://localhost:8080/api/auth/delete`, {body: userAd},{headers:{"Authorization": `Bearer ${this.token}`} })
      
    },    
  }, 
}
</script>
