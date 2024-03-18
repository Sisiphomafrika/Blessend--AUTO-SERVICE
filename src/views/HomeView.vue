<template>
  <div>
    <section id="intro">
      <div class="info">
        <h1>Hope Haven Brews</h1>
        <p>
          Welcome to our brewery, where passion meets craftsmanship to create exceptional beer. At Hop Haven Brews, we take pride in every step of the brewing process, from selecting the finest ingredients to perfecting the flavor profiles of our brews.
        </p>
        <a href="#content" class="button explore">Explore</a>
      </div>
      <div class="split-beer">
        <img
          class="beer"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/81c84fb8-55aa-4b2b-95d9-b4ff217b3aa4"
        />
        <img
          class="beer"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3a1385a8-2ce1-49ec-a8a7-99e0b6a5aca9"
        />
        <img
          class="beer"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9efc9dd0-9036-419b-bf16-619164b94095"
        />
      </div>
    </section>

    <section id="content">
      <!-- Cards -->
      <div v-for="(item, index) in cards" :key="index" class="card">
        <img :src="item.imgSrc" class="card-img" />
        <div class="title">
          <h2>{{ item.title }}</h2>
        </div>
        <div class="more">
          <button class="modal-open" :data-modal="'modal' + (index + 1)">
            more
            <ion-icon class="open-icon" name="open-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
      </div>

      <!-- Modals -->
      <div v-for="(item, index) in cards" :key="index" class="modal" :id="'modal' + (index + 1)">
        <div class="modal-content">
          <div class="modal-header">
            {{ item.title }}<button class="modal-close">
              <ion-icon class="close-icon" name="close-outline">Close</ion-icon>
            </button>
          </div>
          <div class="modal-body">
            <img :src="item.imgSrc" alt="" />
            <ul>
              <li v-for="(detail, i) in item.details" :key="i">{{ detail }}</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button class="button close-btn modal-close">Close</button>
          </div>
        </div>
      </div>
    </section>

    <footer>
    

<div class="footer">
  <span class="name">Hop Haven Brews</span>
  <ul></ul>
  <span class="social-media">
    <a href="#" class="fa fa-facebook-square"></a>
    <a href="#" class="fa fa-twitter-square"></a>
  </span>
  <span class="copyright">Copyright © 2024, Hop Haven Brews.</span>
</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Beer Galore',
          imgSrc: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/8970757c-5e57-43ee-9014-60640eaa2469',
          details: [
            'Savor a wide variety of world-famous German beers, including lagers, ales, and stouts.',
            'Raise your stein high and enjoy traditional Bavarian toasts with friends old and new.',
            'Be sure to try the special brews crafted exclusively for Oktoberfest.',
          ],
        },
        {
          title: 'Bavarian Culture Showcase',
          imgSrc: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/98d23019-9931-4e20-a823-30724a018d9c',
          details: [
            'Immerse yourself in the rich Bavarian culture with art exhibitions and demonstrations.',
            'Learn about the history and traditions of Oktoberfest through informative displays.',
          ],
        },
        {
          title: 'Souvenirs and Shopping',
          imgSrc: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/58bdbc26-b73b-4066-99ba-cbbfb45214d6',
          details: [
            'Shop for unique Bavarian souvenirs, clothing, and trinkets at our market stalls.',
            'Take home a piece of Oktoberfest to remember this incredible experience.',
          ],
        },
        {
          title: 'Bavarian Culinary Delights',
          imgSrc: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/be357710-c460-45e8-a61e-2db9c45eb12b',
          details: [
            'Indulge in mouthwatering German cuisine, from bratwurst and schnitzel to pretzels and sauerkraut.',
            'Experience the rich flavors of authentic Bavarian dishes prepared by skilled chefs.',
          ],
        },
        {
          title: 'Live Music and Entertainment',
          imgSrc: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e2f37f05-f3a7-45b9-83dc-1e1ab9212e43',
          details: [
            'Get your groove on with live traditional German bands and folk dancers.',
            'Expect a vibrant atmosphere filled with music, dancing, and cultural performances.',
          ],
        },
        {
          title: 'Fun and Games',
          imgSrc: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/82bb545a-3d20-442c-9670-191105298b4b',
          details: [
            'Participate in traditional Oktoberfest games, including stein-holding contests and bratwurst-eating competitions.',
            'Bring the whole family; we have activities for all ages, including a dedicated kids\' zone.',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=Young+Serif&display=swap");

/* -------------- */
/* DEFAULT VALUES */

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  background-image: radial-gradient(at 9.2% 73.7%, #ffddc9 0px, transparent 50%),
    radial-gradient(at 92.3% 7.6%, #fff9cf 0px, transparent 50%);
  background-repeat: no-repeat;
}

/* ------ */
/* INTRO */

#intro {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  padding: 40px;
  min-height: 100dvh;
  overflow: hidden;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px 50px;
}

.info h1 {
  font-family: "Young Serif", serif;
  text-align: center;
  font-size: 3rem;
}

.info p {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.split-beer {
  display: flex;
  flex-direction: row;
}

.beer {
  max-width: 100%;
  width: 250px;
  border-radius: 20px;
  margin-left: 15px;
  border: 2px solid orange;
}

.beer:nth-child(2) {
  transform: translateY(-1.5rem);
}

.button:after,
.close-btn:after {
  background: #fff;
}

.explore,
.explore:before,
.close-btn,
.close-btn:before {
  background: rgba(255, 193, 7, 1);
  background: linear-gradient(
    45deg,
    rgba(255, 193, 7, 1) 0%,
    rgba(255, 87, 34, 1) 100%
  );
  background: -moz-linear-gradient(
    45deg,
    rgba(255, 193, 7, 1) 0%,
    rgba(255, 87, 34, 1) 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(255, 193, 7, 1) 0%,
    rgba(255, 87, 34, 1) 100%
  );
}

.button {
  display: inline-block;
  position: relative;
  border-radius: 10px;
  text-decoration: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.button:hover {
  text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.8);
}

.button:hover::after {
  left: 100%;
  top: 100%;
  bottom: 100%;
  right: 100%;
}

.button::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  border-radius: inherit;
  transition: all 0.5s;
}

.button::after {
  content: "";
  display: block;
  position: absolute;
  left: 2.5px;
  top: 2px;
  bottom: 2.5px;
  right: 2px;
  z-index: -1;
  border-radius: 8px;
  transition: all 0.5s;
}

/* -------- */
/* CONTENT */

#content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 60px 40px;
  min-height: 100dvh;
  overflow: hidden;
}

.card {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50% 50%;
  border: 1px solid #000;
  width: 300px;
  aspect-ratio: 1/1;
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.03),
    0 22.3px 17.9px rgba(0, 0, 0, 0.05);
}

a:link,
a:visited,
a:hover,
a:active {
  background-color: transparent;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #000;
  border-radius: 20px 20px 0 0;
  text-align: center;
}

.more {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  background-color: #fff;
  border-radius: 0 0 20px 20px;
}

.open-icon {
  font-size: 1.25rem;
  color: #000;
  transform: translateY(3px);
  margin-left: 3px;
  z-index: 1;
}

.modal-open {
  text-transform: uppercase;
  color: #000;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  grid-area: 1 / 2 / span 1 / span 1;
}

.card-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  object-position: 50% 50%;
  z-index: 2;
  transition: all 450ms ease-in 200ms;
}

.card:hover > .card-img {
  width: 50%;
  height: 50%;
  top: 50%;
  border-radius: 0 0 0 20px;
}

/* ------ */
/* MODAL */

body.prevent-background-scroll {
  min-height: 100dvh;
  overflow-y: hidden;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
  animation: openModal 0.3s ease-in-out 1 normal;
}

@keyframes openModal {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 50%;
  border-radius: 4px;
  z-index: 30;
}

.modal-header {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  padding: 15px 20px 10px;
  font-size: 1.2rem;
}

.modal-header::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #d1d5db;
}

.modal-header .modal-close {
  background: #efefef;
  border: 0;
  outline: 0;
  transform: translateY(3px);
  background-color: transparent;
  cursor: pointer;
}

.close-icon {
  font-size: 1.6rem;
  color: #000;
  transform: scale(1);
  transition: all 0.3s;
}

.close-icon:hover {
  transform: scale(1.3);
}

.modal-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 50px;
  height: 70vh;
  overflow-y: auto;
}

.modal-body > img {
  max-width: 100%;
  width: 300px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 20px;
}

.modal-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 20px;
}

/* ---------- */
/* SCROLLBAR */

.modal-body::-webkit-scrollbar {
  width: 0.7rem;
}

.modal-body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.3rem rgb(79, 78, 78);
  background-color: rgba(255, 87, 34, 0.1);
}

.modal-body::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem rgba(255, 87, 34, 1);
  outline: none;
}

/* ------ */
/* FOOTER */

footer {
  display: grid;
  place-items: center;
  padding: 20px 150px 60px;
}

footer > p {
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
}

/* ------ */
/* MEDIA QUERIES */

@media (max-width: 1100px) {
  .beer {
    width: 200px;
  }

  #content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 800px) {
  #intro {
    padding: 30px;
  }

  .beer {
    width: 150px;
  }

  .info {
    gap: 20px;
    padding: 30px 30px;
  }

  .info h1 {
    font-size: 2.5rem;
  }

  .info p {
    font-size: 1rem;
  }

  #content {
    gap: 30px;
    padding: 60px 20px;
  }

  .card {
    width: 250px;
  }

  .modal-content {
    width: 80%;
  }

  footer {
    padding: 20px 80px 60px;
  }

  footer > p {
    font-size: 1.1rem;
  }
}

@media (max-width: 550px) {
  #intro {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "split-beer"
      "info";
  }

  .info {
    grid-area: info;
  }

  .split-beer {
    grid-area: split-beer;
    margin: 20px auto;
  }

  .beer {
    width: 100px;
  }

  #content {
    grid-template-columns: repeat(1, 1fr);
    padding: 40px 40px;
  }

  /*footer*/
* { margin: 0; padding: 0; box-sizing: border-box; }

.footer {
  display: block;
  width: 100%;
  padding: 10px;
  text-align: center;
  background-color: black;
  background-image: url("http://extensionreforms.dacnet.nic.in/images/9.jpg");
  background-size: contain;
  background-position: top center;
  background-repeat: repeat;  
}


.footer > span {
  display: block;
  color: #dddddd;
  font-family: sans-serif;
}

.footer > span > a {
  color: steelblue;
  text-decoration: none;
}


.footer > .name {
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 200%;
  font-family: cookie;
  color:darkblue;
}

.footer > .social-media { margin-bottom: 10px; }
.footer > .social-media > a {
  padding: 0 5px;
  font-size: 38px;
  color:darkblue;
}


.footer > .copyright { font-size: 60%; }


.footer > .quick-access > a {
  border-right: 1px solid ;
  padding: 0 1em;
  font-size: 60%;
  
}
.footer > .quick-access > a:last-child { border: 0; }
.footer>ul{
  color:darkblue;
}
}

</style>>
