<template>
  <div class="kanban-board">
    <StageColumn
      v-for="stage in stages"
      :key="stage.id"
      :stage="stage"
      :contacts="getContactsForStage(stage.id)"
      @moveContact="moveContact"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAPI } from "@/services/api";
import StageColumn from "@/components/StageColumn.vue";

const { stages, contacts, fetchStages, fetchContacts } = useAPI();

const getContactsForStage = (stageId: string) => {
  return contacts.value.filter((contact) => contact.stage === stageId);
};

const moveContact = (contactId: string | undefined, newStageId: string) => {
  const contact = contacts.value.find((c) => c.id === contactId);
  if (contact) return (contact.stage = newStageId);
};

onMounted(() => {
  fetchStages();
  fetchContacts();
});
</script>

<style scoped>
.kanban-board {
  display: flex;
  gap: 1rem;
}
</style>
