<template>
  <div class="Login">
    <div>
      <h1> Bienvenue sur Groupomania </h1>
      <h2> Merci de vous connecter </h2>
      <section>
        <form [formGroup]="loginForm" *ngIf="!loading">
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" formControlName="email">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" formControlName="password">
  </div>
  <button mat-raised-button color="primary" [disabled]="loginForm.invalid" (click)="onLogin()">LOGIN</button>
  <p class="text-danger" *ngIf="errorMsg">{{ errorMsg }}</p>
</form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profil",
  data() {
    return 

  }
}
</script>
