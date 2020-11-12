<template>
  <v-container>
    <v-row justify="center" align="stretch">
      <v-col
        xs="12"
        sm="12"
        md="12"
        lg="12"
        xl="6"
        v-for="project in projects"
        :key="project.id"
      >
        <projectcard :project="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import projects from '../content/projects.json';
import projectcard from '../components/project/projectcard';

export default {
  name: 'Projects',
  components: {
    projectcard,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<style scoped></style>
