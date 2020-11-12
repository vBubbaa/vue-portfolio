<template>
  <v-container class="about">
    <v-row justify="center">
      <v-col cols="12" sm="6" align="center" class="info-row">
        <div class="title">About Me.</div>
        <div class="section-wrap">
          <div class="section">
            I got my start into the technology world while obtaining my
            Bachelors degree in Information Technology from Arizona State
            University.
          </div>
          <div class="section">
            While obtaining my degree, I got a job as a helpdesk support
            technician at Arizona State University Herberger Institute. I
            assisted staff with technical issues they had, and coordinated with
            other student workers and IT techs to fix, update, manage, and
            inventory items.
          </div>
          <div class="section">
            After a few months, I got promoted to the development team, and was
            soon building out web applications for the Herberger Intitute at
            Arizona State University. We utilized HTML, CSS, Javascript, and a
            C# ASP.NET backend to update already existing web applications as
            well as take staff suggestions to build out new web pages.
          </div>
          <div class="section">
            After gathering valuable experience as a full-stack developer, I was
            soon to be graduating, and decided to pursue freelancing and be able
            to focus more on my senior capstone and learn new technologies to
            work with.
          </div>
          <div class="section">
            While freelancing, I picked up several new skills and added them to
            my toolkit. For backend development, I picked up Django and Django
            Rest Framework and learned about all things REST. For frontend
            development I initially picked up ReactJS, but soon after learning
            the core fundamentals, made the switch to VueJS and also NuxtJS. I
            also picked up other tools such as material UI libraries including
            Vuetify, Bootstrap, and TailwindCSS. I worked on several projects
            using Django and Django Rest Framework along with utilizing frontend
            frameworks.
          </div>
          <div class="section">
            Throughout my journey, I have learned and used a wide variety of
            tools. I have a diverse skillset, and an unbeatable eagerness to
            learn. To this day, I am always staying up to date with newest and
            most cutting edge technologies.
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="image-col" align="center">
        <v-img
          src="@/assets/me.jpg"
          width="500px"
          height="600px"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about {
  min-height: 70vh;
}

.image-col {
  width: 100%;
}

.title {
  font-size: 40px !important;
  font-weight: bold;
  padding-bottom: 1.5rem;
}

.section {
  font-size: 16px;
  width: '80%';
  padding: 1.5rem 0;
}

.info-row {
  height: 70vh !important;
  overflow-y: auto;
}

/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #535353;
}
</style>
