<script setup>
import {
  PhYoutubeLogo,
  PhInstagramLogo,
  PhGithubLogo,
} from "@phosphor-icons/vue";

import {
  PhoneIcon,
  EnvelopeOpenIcon,
  MapPinIcon,
  CakeIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="2xl:container 2xl:mx-auto">
    <side-header></side-header>
    <section class="sm:pl-0 lg:pl-60 sm:w-full sm:h-screen">
      <main class="lg:flex lg:h-2/3 shadow-md m-4">
        <div class="relative w-full p-4">
          <img
            src="../assets/profile/profile-pic.jpeg"
            alt="profile"
            class="sm:w-full sm:h-full sm:p-4 lg:p-0 lg:w-full lg:h-full object-cover object-right shadow-sm"
          />

          <div
            class="absolute sm:bottom-8 sm:right-8 lg:bottom-4 lg:right-4 bg-green-500 text-green-50 w-1/2 text-center uppercase font-bold"
          >
            Wasit
          </div>
        </div>

        <div class="flex flex-col justify-center p-20">
          <div class="border-b-2 mb-4">
            <h1 class="text-5xl 2xl:text-6xl font-bold mb-4">Hello, I'm Kla</h1>
            <h3
              class="2xl:text-lg capitalize font-semibold text-green-500 mb-4"
            >
              self-taught programmer
            </h3>
            <p class="paragraph-about mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus velit, quo inventore eum animi labore corporis alias
              aliquid perspiciatis doloribus dolor ducimus ut, neque provident
              deleniti suscipit eos. Laudantium, cum.
            </p>
            <div class="flex items-center mb-4 gap-4">
              <p class="paragraph-about">Skills:</p>
              <img
                src="../assets/about/htmlLogo.png"
                alt="html logo"
                class="image-icon-about"
              />
              <img
                src="../assets/about/cssLogo.png"
                alt="css logo"
                class="image-icon-about"
              />
              <img
                src="../assets/about/jsLogo.png"
                alt="javascript logo"
                class="image-icon-about"
              />
              <img
                src="../assets/about/tsLogo.png"
                alt="typescript logo"
                class="image-icon-about"
              />
              <img
                src="../assets/about/vueLogo.jpg"
                alt="vue logo"
                class="image-icon-about"
              />
              <img
                src="../assets/about/tailwindLogo.png"
                alt="tailwind logo"
                class="image-icon-about"
              />
            </div>
          </div>

          <ul class="flex flex-col gap-4 mb-8">
            <li class="list-about">
              <PhoneIcon class="icon-about"></PhoneIcon>
              <p class="paragraph-about">Phone: +66 633432801</p>
            </li>
            <li class="list-about">
              <EnvelopeOpenIcon class="icon-about"></EnvelopeOpenIcon>
              <p class="paragraph-about">Email: manjit.wasit@gmail.com</p>
            </li>
            <li class="list-about">
              <MapPinIcon class="icon-about"></MapPinIcon>
              <p class="paragraph-about">
                Address: 169 Phahon Yothin Road, Anusawari, Bang Khen, Bangkok
              </p>
            </li>
            <li class="list-about">
              <CakeIcon class="icon-about"></CakeIcon>
              <p class="paragraph-about">Date of birth: 29 Jan 1994</p>
            </li>
          </ul>

          <div class="flex items-center gap-4">
            <p class="paragraph-about">Social media:</p>
            <PhYoutubeLogo class="icon-about"></PhYoutubeLogo>
            <PhInstagramLogo class="icon-about"></PhInstagramLogo>
            <PhGithubLogo class="icon-about"></PhGithubLogo>
          </div>
        </div>
      </main>

      <footer class="sm:flex sm:flex-col lg:grid lg:grid-cols-3 gap-4 p-4">
        <!-- 1st -->
        <div class="card-about">
          <h2 class="card-header-about">YouTube</h2>
          <p class="paragraph-about mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            perspiciatis voluptatum illum, non dolores aperiam excepturi ea
            natus nulla ipsum fugiat assumenda quod facilis iste quo adipisci
            dolore error dolorem.
          </p>
          <div class="card-footer-about">
            <a href="https://www.youtube.com/channel/UCT1iC8NPgSUngtrSubhGN8g">
              <p class="uppercase font-semibold text-green-500">View</p>
            </a>
            <a href="https://www.youtube.com/channel/UCT1iC8NPgSUngtrSubhGN8g">
              <PhYoutubeLogo class="icon-about"></PhYoutubeLogo>
            </a>
          </div>
        </div>
        <!-- 2nd -->
        <div class="card-about">
          <h2 class="card-header-about">Instagram</h2>
          <p class="paragraph-about mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            perspiciatis voluptatum illum, non dolores aperiam excepturi ea
            natus nulla ipsum fugiat assumenda quod facilis iste quo adipisci
            dolore error dolorem.
          </p>
          <div class="card-footer-about">
            <a href="https://www.instagram.com/wasit.kla/">
              <p class="uppercase font-semibold text-green-500">View</p>
            </a>
            <a href="https://www.instagram.com/wasit.kla/">
              <PhInstagramLogo class="icon-about"></PhInstagramLogo>
            </a>
          </div>
        </div>
        <!-- 3rd -->
        <div class="card-about">
          <h2 class="card-header-about">Github</h2>
          <p class="paragraph-about mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            perspiciatis voluptatum illum, non dolores aperiam excepturi ea
            natus nulla ipsum fugiat assumenda quod facilis iste quo adipisci
            dolore error dolorem.
          </p>
          <div class="card-footer-about">
            <a href="https://github.com/klamanjit">
              <p class="uppercase font-semibold text-green-500">View</p>
            </a>
            <a href="https://github.com/klamanjit">
              <PhGithubLogo class="icon-about"></PhGithubLogo>
            </a>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>

<style scoped>
.paragraph-about {
  @apply text-base 2xl:text-xl text-slate-500;
}

.image-icon-about {
  @apply p-0.5 h-10 w-10 2xl:h-12 2xl:w-12 object-cover rounded-full shadow-sm;
}
.list-about {
  @apply flex items-center  gap-2;
}

.icon-about {
  @apply h-8 w-8 2xl:h-10 2xl:w-10 fill-green-500;
}

.card-about {
  @apply p-8 shadow-md h-80 2xl:h-96 relative;
}

.card-header-about {
  @apply text-xl 2xl:text-2xl font-bold border-b-2 mb-2 pb-2;
}

.card-footer-about {
  @apply absolute bottom-0 left-0 p-8 w-full  flex justify-between items-center;
}
</style>
