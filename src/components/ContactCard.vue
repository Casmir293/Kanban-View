<template>
  <div class="contact-card">
    <p>{{ contact.full_name }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  contact: Contacts;
}>();
</script>

<style scoped>
.contact-card {
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: grab;
}
</style>
