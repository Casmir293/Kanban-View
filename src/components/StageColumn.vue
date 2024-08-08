<template>
  <div
    class="stage-column"
    :style="{ borderColor: stage.header_color }"
    @dragover.prevent
    @dragenter.prevent
    @drop="onDrop"
  >
    <h3>{{ stage.name }}</h3>
    <div class="contacts">
      <ContactCard
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
        draggable="true"
        @dragstart="onDragStart(contact.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactCard from "@/components/ContactCard.vue";

const props = defineProps<{
  stage: Stages;
  contacts: Contacts[];
}>();

const emit = defineEmits<{
  (e: "moveContact", contactId: string, newStageId: string): void;
}>();

const onDragStart = (contactId: string) => {
  console.log("Dragging contact with ID:", contactId);
  event.dataTransfer?.setData("contactId", contactId);
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
};

const onDrop = () => {
  const contactId = event.dataTransfer?.getData("contactId");
  console.log(
    "Dropped contact with ID:",
    contactId,
    "on stage:",
    props.stage.id
  );
  emit("moveContact", contactId, props.stage.id);
};
</script>

<style scoped>
.stage-column {
  flex: 1;
  padding: 1rem;
  border: 2px solid;
  border-radius: 5px;
}
.contacts {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
