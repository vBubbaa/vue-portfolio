<template>
  <v-card class="mx-auto project-card-wrap" max-width="700">
    <v-img
      height="350"
      :src="require(`@/assets/projectimages/${project.image}`)"
    ></v-img>

    <v-card-title>
      {{ project.name }}
    </v-card-title>

    <v-card-subtitle>
      <v-chip class="project-chip" v-for="tag in project.tags" :key="tag">{{
        tag
      }}</v-chip>
    </v-card-subtitle>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon color="#fa0f32">{{
          show ? 'mdi-chevron-up' : 'mdi-chevron-down'
        }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ project.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'projectcard',
  data() {
    return {
      show: false,
    };
  },
  props: {
    project: Object,
  },
};
</script>

<style scoped>
.project-chip {
  margin: 5px;
}

.project-card-wrap {
  margin: 1.5rem;
}
</style>
