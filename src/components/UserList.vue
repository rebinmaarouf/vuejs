<template>
    <div>
      <h1>User List</h1>
      <ul>
        <!-- Loop through the users and display their data -->
        <li v-for="user in users" :key="user.id">
          <p><strong>Name:</strong> {{ user.name }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
        </li>
      </ul>
      <h1>Post</h1><hr>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      // Define a reactive variable to hold the JSON data
      const users = ref([]);
  
      // Fetch JSON data from the public directory
      onMounted(async () => {
        try {
          const response = await fetch('/data.json');
          const data = await response.json();
          users.value = data; // Set the data to the reactive variable
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
      });
  
      return {
        users
      };
    }
  };
  </script>
  
  <style scoped>
  /* You can add some styles for better presentation */
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
  }
  h1{
    color: red;
    text-align: center;
  }
  </style>
  