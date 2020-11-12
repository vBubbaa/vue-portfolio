<template>
  <v-container>
    <div v-for="project in projects" :key="project.id">
      <v-img
        :src="require(`@/assets/projectimages/${project.image}`)"
        width="150"
        height="150"
        contain
      ></v-img>
      {{ project.name }}
    </div>
  </v-container>
</template>

<script>
import projects from '../content/projects.json';

export default {
  name: 'Projects',
  data() {
    return {
      projects,
    };
  },
};
</script>

<style scoped></style>
