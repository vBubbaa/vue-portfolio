<template>
  <v-app class="main-app">
    <nav class="px-8 py-6 nav-row text-right">
      <router-link to="/" class="home-link">MJ.</router-link>
    </nav>
    <v-main class="main-wrap">
      <router-view></router-view>
    </v-main>
    <footer>
      <div>
        <a href="https://github.com/vBubbaa" target="_blank">
          <v-icon large color="white">mdi-github</v-icon>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/michael-james-60b81216b/"
          target="_blank"
        >
          <v-icon large color="white">mdi-linkedin</v-icon>
        </a>
      </div>
    </footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.nav-row {
  background: black !important;
}

.home-link {
  font-size: 42px;
  font-weight: bold;
}

.main-wrap {
  background-color: black;
}

footer {
  background-color: black !important;
  text-align: center;
}

footer div {
  display: inline-block;
  padding: 1.5rem;
}

i:hover {
  color: #fa0f32 !important;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
.main-app {
  font-family: 'Poppins', sans-serif !important;
}

a {
  color: white !important;
  text-decoration: none !important;
}

a:hover {
  color: #fa0f32 !important;
}

.router-link-exact-active {
  color: #fa0f32 !important;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
}

/* Track */
::-webkit-scrollbar-track {
  background: #535353;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(158, 158, 158);
}
</style>
