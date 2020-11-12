<template>
  <v-card class="mx-auto project-card-wrap" max-width="700">
    <v-img
      height="350"
      :src="require(`@/assets/projectimages/${project.image}`)"
    ></v-img>

    <v-card-title>
      {{ project.name }}
    </v-card-title>

    <v-card-subtitle class="chip-group">
      <v-chip class="project-chip" v-for="tag in project.tags" :key="tag">{{
        tag
      }}</v-chip>
      <div class="py-8 btn-group">
        <v-btn color="#f61032" outlined v-if="project.code">
          <a :href="project.code" target="_blank">View Code</a>
        </v-btn>
        <v-btn color="#f61032" outlined v-if="project.frontend">
          <a :href="project.frontend" target="_blank">View Frontend Code</a>
        </v-btn>
        <v-btn color="#f61032" outlined v-if="project.backend">
          <a :href="project.backend" target="_blank">View Backend Code</a>
        </v-btn>
        <v-btn color="#f61032" outlined v-if="project.live">
          <a :href="project.live" target="_blank">View Site</a>
        </v-btn>
      </div>
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

.chip-group {
  min-height: 150px;
}
.btn-group button {
  margin: 5px;
}
</style>
