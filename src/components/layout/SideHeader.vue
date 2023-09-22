<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import { PhList } from "@phosphor-icons/vue";
import {
  HomeIcon,
  CameraIcon,
  IdentificationIcon,
  PhotoIcon,
  EnvelopeIcon,
} from "@heroicons/vue/24/solid";

const router = useRouter();
const route = useRoute();

// responsive sideBar
const isTopBar = ref(false);
</script>

<template>
  <nav class="section-sidebar">
    <div class="flex flex-col h-1/4 justify-center items-center gap-2">
      <img
        src="../../assets/profile/profile-pic.jpeg"
        alt="profile"
        class="object-cover phone:w-12 phone:h-12 sm:w-16 sm:h-16 lg:w-32 lg:h-32 2xl:w-40 2xl:h-40 rounded-full"
      />

      <h2 class="phone:hidden sm:hidden text-lg 2xl:text-xl font-bold">
        Wasit Manjit
      </h2>
    </div>

    <!-- responsive sm -->
    <PhList
      @click="isTopBar = true"
      class="phone:h-8 phone:w-8 sm:h-10 sm:w-10 lg:hidden fill-slate-50"
    ></PhList>

    <!-- topBar backdrop -->
    <div
      v-if="isTopBar"
      @click="isTopBar = false"
      class="absolute top-0 left-0 w-screen h-screen bg-slate-50 bg-opacity-90"
    ></div>
    <ul
      v-if="isTopBar"
      class="lg:hidden flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2"
    >
      <li class="list">
        <base-button
          link
          to="/home"
          :class="{
            cardActive: route.path === '/home',
            card: route.path !== '/home',
          }"
        >
          <HomeIcon class="icon"></HomeIcon>
          <p>Home</p>
        </base-button>
      </li>
      <li class="list">
        <base-button
          link
          to="/about"
          :class="{
            cardActive: route.path === '/about',
            card: route.path !== '/about',
          }"
        >
          <CameraIcon class="icon"></CameraIcon>
          <p>About me</p>
        </base-button>
      </li>
      <li class="list">
        <base-button
          link
          to="/resume"
          :class="{
            cardActive: route.path === '/resume',
            card: route.path !== '/resume',
          }"
        >
          <IdentificationIcon class="icon"></IdentificationIcon>
          <p>Resume</p>
        </base-button>
      </li>
      <li class="list">
        <base-button
          link
          to="/projects"
          :class="{
            cardActive: route.path === '/projects',
            card: route.path !== '/projects',
          }"
        >
          <PhotoIcon class="icon"></PhotoIcon>
          <p>Projects</p>
        </base-button>
      </li>
      <li class="list">
        <base-button
          link
          to="/contact"
          :class="{
            cardActive: route.path === '/contact',
            card: route.path !== '/contact',
          }"
        >
          <EnvelopeIcon class="icon"></EnvelopeIcon>
          <p>Contact Me</p>
        </base-button>
      </li>
    </ul>

    <!-- responsive lg -->
    <ul class="phone:hidden sm:hidden lg:block p-2">
      <li class="list">
        <base-button
          link
          to="/home"
          :class="{
            cardActive: route.path === '/home',
            card: route.path !== '/home',
          }"
        >
          <HomeIcon class="icon"></HomeIcon>
          <p>Home</p>
        </base-button>
      </li>
      <li class="list">
        <base-button
          link
          to="/about"
          :class="{
            cardActive: route.path === '/about',
            card: route.path !== '/about',
          }"
        >
          <CameraIcon class="icon"></CameraIcon>
          <p>About me</p>
        </base-button>
      </li>
      <li class="list">
        <base-button
          link
          to="/resume"
          :class="{
            cardActive: route.path === '/resume',
            card: route.path !== '/resume',
          }"
        >
          <IdentificationIcon class="icon"></IdentificationIcon>
          <p>Resume</p>
        </base-button>
      </li>
      <li class="list">
        <base-button
          link
          to="/projects"
          :class="{
            cardActive: route.path === '/projects',
            card: route.path !== '/projects',
          }"
        >
          <PhotoIcon class="icon"></PhotoIcon>
          <p>Projects</p>
        </base-button>
      </li>
      <li class="list">
        <base-button
          link
          to="/contact"
          :class="{
            cardActive: route.path === '/contact',
            card: route.path !== '/contact',
          }"
        >
          <EnvelopeIcon class="icon"></EnvelopeIcon>
          <p>Contact Me</p>
        </base-button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.section-sidebar {
  @apply phone:fixed phone:top-0 phone:left-0 phone:w-full phone:h-20  phone:flex phone:justify-between phone:items-center phone:z-40  phone:bg-slate-900 phone:bg-opacity-25 phone:shadow-sm phone:p-4
  sm:fixed sm:top-0 sm:left-0 sm:w-full sm:h-20  sm:flex sm:justify-between sm:items-center sm:z-40  sm:bg-slate-900 sm:bg-opacity-25 sm:shadow-sm sm:p-4
  lg:fixed lg:top-0 lg:left-0 lg:h-full lg:w-64 lg:block lg:bg-slate-100
  2xl:w-72;
}
.list {
  @apply p-4 border-b-2;
}

.cardActive {
  @apply p-4 h-20 border-l-4 border-l-green-500 flex font-semibold   text-green-500 items-center gap-2;
}

.card {
  @apply p-4 h-20  flex font-semibold  items-center gap-2;
}

.icon {
  @apply phone:h-6 phone:w-6 sm:h-8 sm:w-8 2xl:h-12 2xl:w-12 ml-2;
}
</style>
