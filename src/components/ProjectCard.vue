<template>
	<a href="#" class="flex flex-col shadow-2xl group">
		<div class="overflow-hidden">
			<img
				:src="projectImage"
				alt=""
				class="group-hover:scale-110 transition-scale duration-500 object-cover"
			/>
		</div>
		<h3
			class="dark:text-gray-300 text-center relative p-3 text-sky-600 text-lg font-bold after:content-[''] after:w-full after:h-1 after:bg-gradient-to-r after:from-transparent after:via-[#007aff] after:to-transparent after:absolute after:top-0 after:left-0 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-500"
		>
			{{ projectTitle }}
		</h3>
	</a>
</template>

<script setup>
const props = defineProps(["projectTitle", "projectImage"]);
</script>
