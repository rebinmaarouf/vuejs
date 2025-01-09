<!-- OnlineFriends.vue -->
<template>
    <div class="online-friends">
      <h2>Online Friends</h2>
      <ul>
        <li v-for="friend in onlineFriends" :key="friend.id" class="friend-item">
          <span>{{ friend.name }}</span>
          <button @click="unfriend(friend.id)" class="ml-4 text-red-500">Unfriend</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OnlineFriends',
    data() {
      return {
        friends: [
          { id: 1, name: 'Alice', isOnline: true },
          { id: 2, name: 'Bob', isOnline: false },
          { id: 3, name: 'Charlie', isOnline: true },
          { id: 4, name: 'David', isOnline: false },
          { id: 5, name: 'Eve', isOnline: true },
        ],
      };
    },
    computed: {
      onlineFriends() {
        return this.friends.filter(friend => friend.isOnline);
      },
    },
    methods: {
      unfriend(friendId) {
        this.friends = this.friends.filter(friend => friend.id !== friendId);
      },
    },
  };
  </script>
  
  <style scoped>
  .online-friends {
    padding: 20px;
  }
  
  .friend-item {
    margin-bottom: 10px;
  }
  
  button {
    cursor: pointer;
    border: none;
    background: none;
  }
  </style>
  