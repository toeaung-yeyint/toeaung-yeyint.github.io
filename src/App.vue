<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import AboutSection from "./components/AboutSection.vue";
import MyProjectsSection from "./components/MyProjectsSection.vue";
import ProjectCard from "./components/ProjectCard.vue";
</script>

<template>
	<div class="max-w-screen-lg mx-auto">
		<NavigationBar />
		<AboutSection />
		<MyProjectsSection>
			<ProjectCard
				projectTitle="teams-titles"
				projectImage="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80"
			/>
			<ProjectCard
				projectTitle="teams-titles"
				projectImage="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80"
			/>
			<ProjectCard
				projectTitle="teams-titles"
				projectImage="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80"
			/>
		</MyProjectsSection>
	</div>
</template>
