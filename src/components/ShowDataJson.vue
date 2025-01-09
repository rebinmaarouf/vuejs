<template>
    <div>
      <h1>Posts</h1>
  
      <!-- Search Input -->
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Search posts by title..." 
      />
      
      <!-- Display a loading message if data is being fetched -->
      <p v-if="isLoading">Loading...</p>
      <p v-if="errorMessage">{{ errorMessage }}</p>
  
      <ul v-if="!isLoading && !errorMessage">
        <!-- Filter posts based on the search query -->
        <li v-for="post in filteredPosts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
          <hr />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  
  export default {
    setup() {
      // Define reactive variables
      const posts = ref([]);
      const isLoading = ref(true); // To show a loading message
      const errorMessage = ref('');
      const searchQuery = ref(''); // Search query input by the user
  
      // Fetch data from JSONPlaceholder API
      onMounted(async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          posts.value = data; // Set the data to the posts variable
        } catch (error) {
          errorMessage.value = error.message; // Set an error message if the fetch fails
        } finally {
          isLoading.value = false; // Stop loading
        }
      });
  
      // Computed property to filter posts based on the search query
      const filteredPosts = computed(() =>
        posts.value.filter(post =>
          post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      );
  
      return {
        posts,
        isLoading,
        errorMessage,
        searchQuery,
        filteredPosts,
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add some basic styling */
  h3 {
    color: #333;
  }
  
  p {
    font-size: 14px;
  }
  
  ul {
    padding: 0;
  }
  
  li {
    margin: 10px 0;
  }
  
  li h3 {
    margin-bottom: 5px;
    font-size: 18px;
    color: #1a73e8;
  }
  
  input {
    margin-bottom: 20px;
    padding: 8px;
    width: 100%;
    max-width: 400px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  