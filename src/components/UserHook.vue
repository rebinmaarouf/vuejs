<template>
  <div>
    <h1>New User Hook Test</h1>
    <p>{{ data }}</p>  <!-- Display the data value here -->
    <button @click="updateData">Update Data</button>
  </div>
</template>

<script>
import { onBeforeMount, onMounted ,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onActivated,onDeactivated, ref } from 'vue';

export default {
  setup() {
    // Reactive data
    const data = ref("Initial Data");
    
    // Method to update the data
    const updateData = () => {
      data.value = "Updated Data";
    };

    // Lifecycle hooks should be defined separately
    onBeforeMount(() => {
      console.log('New Component is about to be mounted');
    });

    onMounted(() => {
      console.log('Component has been mounted');
    });

    onBeforeUpdate(() => {
      console.log('Component is about to update');
    });

    onUpdated(() => {
      console.log('Component has been updated');
    });

    onBeforeUnmount(() => {
      console.log('Component is about to be destroyed');
    });

    onUnmounted(() => {
      console.log('Component has been destroyed');
    });

    onActivated(() => {
      console.log('Component has been activated');
    });

    onDeactivated(() => {
      console.log('Component has been deactivated');
    });

    return {
      data,
      updateData
    };
  },
};
</script>

<style>
/* Add styles here if needed */
</style>
