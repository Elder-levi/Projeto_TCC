<template>
  <header class="navbar">
    <div class="navbar-left">
      <img src="../imagens/Logo4.png" alt="Logo" class="logo" />
      <div class="institution-text">
        <strong>ASSOCIAÇÃO DE APOIO</strong><br />
        À INSTITUIÇÕES CARENTES
      </div>
    </div>

    <nav class="navbar-center">
     
      <router-link to="/">INICIO</router-link>
      <router-link to="/Duvida">DUVIDAS</router-link>
      <router-link to="/QuemSomos">QUEM SOMOS</router-link>
      <router-link to="/Contato">CONTATO</router-link>
      <router-link to="/SejaVoluntario">CADASTRO</router-link>
    </nav>

    <div class="navbar-right">
       <router-link to="/QueroDoar">
       <button class="donate-button">QUERO<br />DOAR</button></router-link>
    </div>
  </header>
</template>


<script>
export default {
  name:'BarraNavegacao',
}
</script>


<style  scoped >

header{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 200px;
  
}

.navbar {
  display: flex;
  justify-content: center;
  background-color: #e0e8f3;
  padding: 10px 20px;
  border-bottom: 2px solid #3a65a0;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo {
  height: 100px;
  margin-right: 10px;
}

.institution-text {
  font-size: 23px;
  line-height: 1.2;
  font-weight: bold;
}

.navbar-center {
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 20px;
  font-size: 24px;
}

.navbar-center a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
}

.navbar-right .donate-button {
  width: 200px;
  background-color: #3a65a0;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
  font-size: 25px;
}
</style>
