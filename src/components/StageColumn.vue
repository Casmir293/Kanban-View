<script setup lang="ts">
import ContactCard from "@/components/ContactCard.vue";

const props = defineProps<{
  stage: Stages;
  contacts: Contacts[];
}>();

const emit = defineEmits<{
  (e: "moveContact", contactId: string | undefined, newStageId: string): void;
}>();

const onDragStart = (contactId: string, event: DragEvent) => {
  console.log("Dragging contact with ID:", contactId);
  event?.dataTransfer?.setData("contactId", contactId);
};

const onDrop = (event: DragEvent) => {
  const contactId = event?.dataTransfer?.getData("contactId");
  console.log(
    "Dropped contact with ID:",
    contactId,
    "on stage:",
    props.stage.id
  );
  emit("moveContact", contactId, props.stage.id);
};
</script>

<template>
  <div
    class="stage-column"
    @dragover.prevent
    @dragenter.prevent
    @drop="onDrop($event)"
  >
    <h3
      :style="{
        background: `${stage.header_color}`,
      }"
    >
      {{ stage.name }}
    </h3>
    <div class="contacts">
      <ContactCard
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
        draggable="true"
        @dragstart="onDragStart(contact.id, $event)"
      />
    </div>
  </div>
</template>

<style scoped>
.stage-column {
  flex: 1;
  border: 1px solid gray;
  border-radius: 5px;
  height: 500px;
  overflow-y: auto;
  position: relative;
}

h3 {
  margin: 0;
  text-align: center;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;
}

.contacts {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
</style>
