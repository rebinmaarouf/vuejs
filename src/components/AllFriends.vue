<!-- AllFriends.vue -->
<template>
  <div class="all-friends">
    <h2>All Friends</h2>
    <ul>
      <li v-for="friend in friends" :key="friend.id" class="friend-item">
        <span>{{ friend.name }}</span>
        <span v-if="friend.isOnline" class="text-green-500">(Online)</span>
        <button @click="unfriend(friend.id)" class="ml-4 text-red-500">Unfriend</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AllFriends',
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
  methods: {
    unfriend(friendId) {
      this.friends = this.friends.filter(friend => friend.id !== friendId);
    },
  },
};
</script>

<style scoped>
.all-friends {
  padding: 20px;
}

.friend-item {
  margin-bottom: 10px;
}

.text-green-500 {
  color: green;
}

button {
  cursor: pointer;
  border: none;
  background: none;
}
</style>
