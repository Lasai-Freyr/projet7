 <template>
  <div class="profil">
    <div>
      <h1> Bienvenue sur votre profil {{ user}} </h1>
      <section>

      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profil",
  data() {
    return {
      user: "Thomas"
    }

  }
}
</script>
