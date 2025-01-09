<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/userhook">UserHook</router-link>
      <router-link to="/userlist">UserList</router-link>
      <router-link to="/showdatajson">ShowDataJson</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

router-link {
  text-decoration: none;
  color: blue;
}

router-link.active {
  font-weight: bold; /* Highlight active route */
}
</style>
