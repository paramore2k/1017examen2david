<template>
  <div>
<!--   Section header  -->
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <img src="../assets/user_icon.png" class="img-responsive img-circle" alt="Image profile utilisateur">
          <h1 class="tm-title">{{ 'Bienvenue' | traduire(lang)}}</h1>
        </div>
      </div>
    </div>
  </header>
<!-- Fin de la section header -->

    <!-- Section à propos et compétences -->

    <section class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12">
    <!--  À propos -->
          <div class="about">
            <h2>{{ 'About' | traduire(lang)}}</h2>
            <p>{{ 'presentation1' | traduire(lang) }}</p>
          </div>
        </div>

    <!--   Compétences     -->
        <div class="col-md-6 col-sm-12">
          <div class="skills">
            <h2 class="white">{{ 'Compétences' | traduire(lang)}}</h2>
            <strong>PHP MySQL</strong>
            <span class="pull-right">70%</span>
            <div class="progress">
              <div class="progress-bar progress-bar-primary" role="progressbar"
                   aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
            </div>
            <strong>UI/UX Design</strong>
            <span class="pull-right">85%</span>
            <div class="progress">
              <div class="progress-bar progress-bar-primary" role="progressbar"
                   aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;"></div>
            </div>
            <strong>Bootstrap</strong>
            <span class="pull-right">95%</span>
            <div class="progress">
              <div class="progress-bar progress-bar-primary" role="progressbar"
                   aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section contact et expérience -->

    <section class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <div class="contact">
            <h2>{{ 'Contact' | traduire(lang)}}</h2>
            <Contact></Contact>
          </div>
        </div>
        <div class="col-md-8 col-sm-12">
          <div class="experience">
            <h3 class="white">{{ 'Projets' | traduire(lang)}}</h3>
            <div class="experience-content">
              <Projet></Projet>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Projet from "@/views/Projet";
import Contact from "@/views/Contact";
import { mixinTraductions} from "@/mixins/mixinTraductions";

export default {
  name: "Profile",
  mixins: [mixinTraductions],
  components: {Contact, Projet},
  methods: {
  deconnection() {
    this.montrerProfile = false;
    this.loggedIn = false;
  }
},

}
</script>

<style scoped>

/* Section header */

header {
  text-align: center;
  overflow: hidden;
  position: relative;
  padding-bottom: 140px;
}

header img {
  display: inline-block !important;
}


.tm-title {
  color: #66CCFF;
}

.about,.skills,
.education,.languages,
.contact, .experience {
  padding: 40px;
  min-height: 330px;
}

/* Section à propos */

.about {
  background: #fff;
  box-shadow: 0 1px 5px rgba(50,50,50,0.08);
}

.white {
  color: #fff;
}
.education, .languages,
.contact, .experience {
  margin-top: 30px;
}
/* section compétences  */
.skills {
  background: #3366CC;
  color: #f5f5f5;
}
.skills .progress {
  border-radius: 0px;
  height: 4px;
}
.skills .progress .progress-bar-primary {
  background: #204090;
}
.skills strong {
  display: inline-block;
  font-weight: normal;
  padding-bottom: 6px;
}

/* Section éducation */

.education {
  background: #3366CC;
  color: #f5f5f5;
}
.education .education-content {
  padding-bottom: 14px;
}
.education h5 {
  display: inline-block;
}
.education span {
  padding-right: 10px;
  padding-left: 20px;
}

/* Section langues */

.languages {
  background: #fff;
  box-shadow: 0 1px 5px rgba(50,50,50,0.08);
}
.languages ul {
  padding: 10px;
}
.languages ul li {
  padding-bottom: 6px;
}

/* Section contact */

.contact {
  background: #fff;
  box-shadow: 0px 1px 5px rgba(50,50,50,0.08);
}
.contact .fa {
  padding-right: 6px;
}

/* experience section */
.experience {
  background: #3366CC;
  color: #f5f5f5;
}
.experience .experience-content {
  padding-bottom: 14px;
}
.experience h5 {
  display: inline-block;
}
.experience span {
  padding-right: 10px;
  padding-left: 20px;
}

/* Section îcones */
.social-icons {
  padding: 0;
  margin: 0;
}
.social-icons li {
  display: inline-block;
  list-style: none;
}
.social-icons li a {
  background: #3366CC;
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  transition: all 0.4s ease-in;
  position: relative;
  bottom: 10px;
  top: 10px;
}
.social-icons li a:hover {
  background: #202020;
  color: #fff;
}

</style>
