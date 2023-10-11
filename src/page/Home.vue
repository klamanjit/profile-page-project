<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="2xl:container 2xl:mx-auto">
    <section class="phone:w-full phone:h-screen sm:w-full sm:h-screen lg:pl-60">
      <!-- Hero section -->
      <div
        class="bg-hero-pattern w-full h-2/3 bg-cover bg-center bg-no-repeat flex items-center justify-center relative mb-4"
      >
        <div
          class="absolute top-0 left-0 w-full h-full bg-slate-900 bg-opacity-50"
        ></div>
        <div class="flex flex-col items-center justify-center z-10">
          <img
            src="../assets/profile/profile-pic.jpeg"
            alt="profile"
            class="object-cover 2xl:w-48 2xl:h-48 w-32 h-32 rounded-full mb-8 shadow-sm"
          />
          <h1 class="text-slate-50 text-4xl 2xl:text-5xl font-bold mb-4">
            Wasit Manjit
          </h1>
          <h3 class="text-slate-50 text-sm 2xl:text-base mb-4">
            I'm a self-taught programmer
          </h3>

          <div class="flex justify-center items-center gap-4">
            <base-button
              mode="hero-home-button"
              class="2xl:text-xl"
              @click="router.push('/resume')"
              >VIEW RESUME</base-button
            >
            <base-button
              mode="hero-home-button"
              class="2xl:text-xl"
              @click="router.push('/contact')"
              >CONTACT ME</base-button
            >
          </div>
        </div>
      </div>
      <!-- Description -->
      <div class="p-4 w-full">
        <p class="paragraph">
          By <span class="span">Wasit</span> Posted on
          <span class="span"> September 22, 2023</span>
        </p>

        <h2 class="text-xl 2xl:text-2xl font-semibold mb-2">
          Profiles, Projects, and the Creative Horizon
        </h2>

        <p class="paragraph text-slate-500">
          My profile page offers a comprehensive view of my professional and
          personal identity. It includes my resume, project portfolio, and links
          to my social media profiles, providing a well-rounded representation
          of my skills and interests. Additionally, my to-do list application
          empowers users to manage daily tasks efficiently, built with
          Vue.js(Vue 3) and Tailwind CSS. On the food page, I explore the world
          of Thai cuisine, detailing various dishes and the restaurants that
          offer them, developed using Vue.js(Vue 3) and Tailwind CSS. For cat
          enthusiasts, my cat article page delves into the five most famous cat
          breeds, complete with detailed descriptions, created with TypeScript,
          HTML, and CSS. Finally, on my Kuro Game page, I share my YouTube game
          channel, categorizing gameplays into Action, Strategy, and RPG genres,
          with the platform built using pure HTML, CSS, and JavaScript.
        </p>
        <p
          class="paragraph font-semibold text-green-500 cursor-pointer inline-block"
          @click="router.push('/about')"
        >
          READ MORE
        </p>
      </div>
    </section>
  </div>
</template>

<style>
.span {
  @apply 2xl:text-2xl text-base text-green-500 font-semibold;
}

.paragraph {
  @apply text-base 2xl:text-2xl mb-2;
}
</style>
