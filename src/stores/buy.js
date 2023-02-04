import { ref } from "vue";
import { defineStore } from "pinia";

export const Adorp = defineStore("AOP", () => {
  const AOP = ref([]);
  const Pheim = (cd,nm,gp) => {
    const sbj ={
        code:cd,
        name:nm,
        group:gp,
    };
    AOP.value.push(sbj);
  };
  const Lb = (n) => {
    AOP.value.splice(n,1);
  };
  return { AOP,Pheim,Lb};
});