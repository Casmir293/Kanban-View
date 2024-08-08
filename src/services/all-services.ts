import { ref } from 'vue';

export function useStages() {
  const BASE_URL = 'http://127.0.0.1:8081';
  const stages = ref<any[]>([]);
  const contacts = ref<any[]>([]);

  const fetchStages = async () => {
    const response = await fetch(`${BASE_URL}/stages.json`);
    const data = await response.json();
    stages.value = data.results.sort((a: any, b: any) => a.order - b.order);
  };

  const fetchContacts = async () => {
    const response = await fetch(`${BASE_URL}/all-contacts.json`);
    const data = await response.json();
    contacts.value = data.results;
  };

  return {
    stages,
    contacts,
    fetchStages,
    fetchContacts
  };
}