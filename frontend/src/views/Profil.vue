 <template>
  <div class="profil">
    <div>
      <h1> Bienvenue sur votre profil <span v-if="user.role == 'role.Admin'"> Administrateur </span> {{ user.name}} </h1>
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
     const userId = sessionStorage.getItem('user');
    const id = userId;
    http.get(`/auth/${id}`)
    .then(response => {
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
