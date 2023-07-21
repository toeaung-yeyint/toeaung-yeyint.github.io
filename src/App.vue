<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import AboutSection from "./components/AboutSection.vue";
import MyProjectsSection from "./components/MyProjectsSection.vue";
import ProjectCard from "./components/ProjectCard.vue";
</script>

<template>
  <div class="max-w-screen-lg mx-auto mb-16">
    <NavigationBar />
    <AboutSection />
    <MyProjectsSection>
      <ProjectCard
        projectTitle="teams-titles"
        projectImage="/assets/teams-titles.jpg"
        projectLink="https://toeaung-yeyint.github.io/teams-titles/"
      />
      <ProjectCard
        projectTitle="calculate-shapes-volume"
        projectImage="/assets/calculate-shapes-volume.jpg"
        projectLink="https://toeaung-yeyint.github.io/calculate-shapes-volume/"
      />
      <ProjectCard
        projectTitle="image-object-detection"
        projectImage="/assets/image-object-detection.jpg"
        projectLink="https://toeaung-yeyint.github.io/image-object-detection/"
      />
    </MyProjectsSection>
  </div>
</template>
