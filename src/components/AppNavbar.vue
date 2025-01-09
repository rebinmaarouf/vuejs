<template>
    <nav class="navbar bg-blue-600 text-white px-4 py-3">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <div class="text-lg font-bold">
          <a href="#" class="hover:text-gray-200">MyLogo</a>
        </div>
  
        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-6">
          <li><a href="#" class="hover:text-gray-200">Home</a></li>
          <li><a href="#" class="hover:text-gray-200">About</a></li>
          <li><a href="#" class="hover:text-gray-200">Services</a></li>
          <li><a href="#" class="hover:text-gray-200">Contact</a></li>
        </ul>
  
        <!-- Mobile Menu Button -->
        <button
          class="md:hidden focus:outline-none"
          @click="toggleMenu"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              v-if="!menuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
  
      <!-- Mobile Menu -->
      <ul
        v-if="menuOpen"
        class="md:hidden mt-3 space-y-2 text-center bg-blue-700 p-3 rounded-lg"
      >
        <li><a href="#" class="block hover:text-gray-200">Home</a></li>
        <li><a href="#" class="block hover:text-gray-200">About</a></li>
        <li><a href="#" class="block hover:text-gray-200">Services</a></li>
        <li><a href="#" class="block hover:text-gray-200">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "AppNavbar",
    data() {
      return {
        menuOpen: false, // State for toggling the mobile menu
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
    },
  };
  </script>
  

<style scoped>
/* Scoped styles for this component */
.navbar {
  background-color: #e0dddd;
  padding: 10px;
}

.navbar h1 {
  color: #fff;
  font-size: 1.5rem;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
}

.navbar ul li {
  display: inline-block;
  margin-right: 20px;
}

.navbar ul li:hover {
  color: #ddd;
}
</style>
  