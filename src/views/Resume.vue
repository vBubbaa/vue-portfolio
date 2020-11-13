<template>
  <v-container>
    <div class="section-wrap">
      <div :class="[$vuetify.breakpoint.mobile ? 'full-wd' : 'sm-wd']">
        <div class="header">
          <h1>
            Resume.
          </h1>
        </div>

        <div class="section">
          <h3 class="section-title">Professional Profile</h3>
          <div class="section-content">
            Full-Stack Web Applications Developer with a vast skillset and an
            unparalleled urge to learn. When bringing me onto your team, not
            only will you be getting a skilled developer, but a developer that
            can adapt to any team's needs and can utilize whatever tool is
            needed to get the job done.
          </div>
        </div>

        <hr />

        <div class="section">
          <h3 class="section-title">Skills</h3>
          <div class="section-content">
            Python, JavaScript, C#, HTML, CSS, JQuery, Ajax, VueJS, NuxtJS,
            Bootstrap, Vuetify, TailwindCSS, Django, Django Rest Framework,
            Django Rest Authentication, ASP.NET, SQL, Jira / Scrum, JWT
            Authentication, Photoshop
          </div>
        </div>

        <hr />

        <div class="section">
          <h3 class="section-title">Education</h3>
          <h4 class="section-subtitle">
            Information Technology (B.S) | Arizona State University | 2020
          </h4>
          <div class="section-content">
            <ul>
              <li>Web Development related courses</li>
              <li>Emphasis in Computer Networking and Database Systems</li>
              <li>
                Courses related to cyber-security and Linux/Unix administration
              </li>
              <li>
                Senior capstone project allowing users to control an Android
                phone with facial movements. Performs onscreen clicks and
                mouse-like movements using only facial movements.
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div class="section">
          <h3 class="section-title">Professional Experience</h3>
          <h4 class="section-subtitle">
            Full-Stack Web Developer | 3/19 – Present | Freelance
          </h4>
          <div class="section-content">
            <ul>
              <li>
                Built and deployed Django and Django Rest Framework back-ends
              </li>
              <li>
                Built and deployed dynamic and mobile responsive front-end web
                applications with VueJS
              </li>
              <li>
                Utilized NuxtJS for server-side rendering
              </li>
              <li>
                Advanced model filtering with several filtering options
              </li>
              <li>
                Steam client connection management with application tracking and
                application history
              </li>
              <li>
                Implemented the Vuetify material UI library to build out elegant
                front-end web applications
              </li>
              <li>
                Used OpenID to authenticate with the Steam platform using Django
                Rest Authentication
              </li>
            </ul>
            <div>
              See one of the websites I worked on:
              <a
                class="work-link"
                target="_blank"
                href="http://steamcomparer.com/"
                >http://steamcomparer.com/</a
              >
            </div>
          </div>
        </div>
        <br />
        <div class="section">
          <div class="section-subtitle">
            Full Stack Web Developer | 8/18 – 3/19 | Arizona State University
            Herberger Institute
          </div>
          <div class="section-content">
            <ul>
              <li>
                Developed and managed several Arizona State University Herberger
                Institute websites
              </li>
              <li>
                Worked with the ASP.NET back-end to build views and models
              </li>
              <li>
                Used HTML, CSS, Javascript, and JQuery to build out the
                front-end of the web-applications
              </li>
              <li>
                Connected ASP.NET with active directory using the LDAP protocol
              </li>
            </ul>
            <br />
            <div>
              See one of the websites I worked on:
              <a
                class="work-link"
                target="_blank"
                href="https://herbergerinstitute.asu.edu/research-and-initiatives/counteract"
                >https://herbergerinstitute.asu.edu/research-and-initiatives/counteract</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Resume',
};
</script>

<style scoped>
hr {
  border: 1px solid gray;
  margin: 1.5rem 0;
}

.header {
  margin-bottom: 20px;
}

.section-title {
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 20px;
}

.section-subtitle {
  text-decoration: underline;
  font-style: italic;
}

.section-content {
  font-size: 18px;
}

.section-wrap {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.sm-wd {
  width: 60%;
}

.full-wd {
  width: 100%;
}

.work-link {
  color: gray !important;
}

.work-link:hover {
  color: #fa0f32 !important;
}
</style>
