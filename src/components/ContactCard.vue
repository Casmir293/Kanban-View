<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  contact: Contacts;
}>();
</script>

<template>
  <div class="contact-card">
    <p>
      <b>{{ contact.full_name }}</b>
    </p>
    <p>{{ contact.phone_number }}</p>
  </div>
</template>

<style scoped>
.contact-card {
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: grab;
}
</style>
