<template>
  <div id="main-wrapper">
    <router-view :user="user"/>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
      user: function() {
          return JSON.parse(localStorage.getItem('user'))
      }
  },
  components: {},
};
</script>
