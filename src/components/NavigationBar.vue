<template>
  <div class="flex items-center justify-between py-10">
    <a href="https://toeaung-yeyint.github.io/" class="text-2xl font-semibold"
      >Home</a
    >
    <div class="flex gap-x-8 text-xl items-center">
      <a href="https://www.linkedin.com/in/toeaung-yeyint/"
        ><i class="fa-brands fa-linkedin"></i
      ></a>
      <a href="https://github.com/toeaung-yeyint"
        ><i class="fa-brands fa-github"></i
      ></a>
      <i
        @click="toggleDarkMode"
        :class="darkModeIcon"
        class="cursor-pointer w-7"
      ></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const darkModeIcon = ref("fa-solid fa-moon");

const toggleDarkMode = () => {
  darkModeIcon.value === "fa-solid fa-moon"
    ? (darkModeIcon.value = "fa-solid fa-sun")
    : (darkModeIcon.value = "fa-solid fa-moon");
  document.documentElement.classList.toggle("dark");
};
</script>
