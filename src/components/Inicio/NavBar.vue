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
    <router-link to="/Cadastro">CADASTRO</router-link>
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

header {
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
}

.navbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #e0e8f3;
  padding: 15px 20px;
  border-bottom: 2px solid #3a65a0;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 1 auto;
}

.logo {
  height: 80px;
  max-width: 100px;
}

.institution-text {
  font-size: 20px;
  line-height: 1.2;
  font-weight: bold;
}

.navbar-center {
  display: flex;
  flex: 2 1 auto;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 20px;
}

.navbar-center a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
}

.navbar-right {
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
}

.donate-button {
  width: 150px;
  background-color: #3a65a0;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 10px 15px;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.donate-button:hover {
  transform: scale(1.05);
}

/* Responsivo para telas menores */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .navbar-left,
  .navbar-center,
  .navbar-right {
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
  }

  .institution-text {
    text-align: center;
    font-size: 18px;
  }

  .navbar-center {
    font-size: 18px;
    gap: 15px;
  }

  .donate-button {
    width: 130px;
    font-size: 16px;
    padding: 8px 12px;
  }

  .logo {
    height: 60px;
  }
}

</style>
