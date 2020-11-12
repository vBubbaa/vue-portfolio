<template>
  <div class="home">
    <v-container>
      <v-row class="home-row">
        <v-col
          v-if="!$vuetify.breakpoint.mobile"
          cols="6"
          class="link-col"
          align-self="center"
        >
          <div>
            <router-link to="/projects">Projects.</router-link>
          </div>
          <div>
            <router-link to="/resume">Resume.</router-link>
          </div>
          <div>
            <router-link to="/about">About.</router-link>
          </div>
        </v-col>
        <v-col v-else cols="12" class="link-col-mobile text-center">
          <div>
            <router-link to="/projects">Projects.</router-link>
          </div>
          <div>
            <router-link to="/resume">Resume.</router-link>
          </div>
          <div>
            <router-link to="/about">About.</router-link>
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="text-center" align-self="center">
          <div class="name">Michael James</div>
          <div class="about-subsection-title">
            Full-stack web applications developer
          </div>
          <hr class="subsection-hr" />
          <div class="about-subsection">
            I am a highly-motivated developer with a vast skillset and an
            unbeated urge to learn. When working with me, you will not only be
            bringing on a skilled developer, but a developer that can adapt to
            the needs of any team and is more than happy to learn and use
            whatever skillset you want brought to the table. I stay up to date
            with the newest and most cutting edge technology as a passion, not
            as a job.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  margin: 0;
  padding: 0;
  min-width: 100%;
  min-height: 100%;
  color: white;
}

.home-row {
  padding: 0 2rem;
  min-height: 60vh;
}

.link-col div {
  padding: 20px 0;
}

.link-col div a {
  font-size: 50px;
  font-weight: bold;
}

.link-col-mobile div {
  display: inline-block;
  padding: 5px;
  font-size: 20px;
}

.name {
  font-size: 50px;
  font-weight: bold;
}

.about-subsection-title {
  font-size: 20px;
}

.about-subsection {
  font-size: 18px;
  line-height: 2;
}

.subsection-hr {
  border: 2px solid #fa0f32;
  color: #fa0f32 !important;
  margin: 20px 0;
}
</style>
