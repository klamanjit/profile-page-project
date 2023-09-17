<script setup>
import {
  PhEnvelopeSimpleOpen,
  PhChatsCircle,
  PhPhoneCall,
  PhGithubLogo,
} from "@phosphor-icons/vue";

import { ref } from "vue";

const userName = ref({
  val: "",
  isValid: true,
});
const userEmail = ref({
  val: "",
  isValid: true,
});
const userMessage = ref({
  val: "",
  isValid: true,
});

const isSubmit = ref(false);

function validateUser() {
  isSubmit.value = true;
  if (userName.value.val === "") {
    userName.value.isValid = false;
    isSubmit.value = false;
  }
  if (userEmail.value.val === "") {
    userEmail.value.isValid = false;
    isSubmit.value = false;
  }
  if (userMessage.value.val === "") {
    userMessage.value.isValid = false;
    isSubmit.value = false;
  }
}

function saveUserInfo() {
  validateUser();
  if (!isSubmit.value) {
    return;
  }

  localStorage.setItem("userName", userName.value);
  localStorage.setItem("userEmail", userEmail.value);
  localStorage.setItem("userMessage", userMessage.value);

  userName.value = "";
  userEmail.value = "";
  userMessage.value = "";

  isSubmit.value = true;
}

function clearUserInfo() {
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userMessage");
}

function closePopup() {
  isSubmit.value = false;
}

// clearUserInfo();
</script>

<template>
  <div class="2xl:container 2xl:mx-auto 2xl:my-auto">
    <div
      class="min-h-screen w-screen bg-slate-900 bg-opacity-10"
      v-if="isSubmit"
      @click="closePopup"
    ></div>
    <div
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg p-4 rounded-lg"
      v-if="isSubmit"
    >
      <p class="mb-4 text-base 2xl:text-lg">
        Thank you for sending me a message
      </p>
      <base-button
        mode="card-project-button"
        class="text-xs 2xl:textsm font-semibold"
        @click="closePopup"
      >
        Continue
      </base-button>
    </div>
    <side-header></side-header>
    <section
      class="w-full h-screen sm:pt-28 lg:pt-12 lg:pl-60 p-12 overflow-x-hidden container mx-auto"
      v-if="!isSubmit"
    >
      <main
        class="sm:flex sm:flex-col lg:grid lg:grid-cols-contact-template min-h-1/2 w-full shadow-lg rounded-lg mb-8"
      >
        <div
          class="bg-slate-600 flex flex-col justify-center items-center p-10"
        >
          <PhChatsCircle
            class="h-40 w-40 2xl:h-48 2xl:w-48 fill-green-500"
          ></PhChatsCircle>
          <p
            class="text-base 2xl:text-2xl text-slate-50 text-center font-semibold"
          >
            If you have a question or just want to get in touch, use this form.
            I am looking forward to hearing from you!
          </p>
        </div>
        <form class="p-14" @submit.prevent="saveUserInfo">
          <h1
            class="text-5xl 2xl:text-6xl text-slate-950 font-extrabold text-center mb-8"
          >
            Contact Me
          </h1>
          <input
            class="input-contact"
            type="text"
            placeholder="Your name"
            v-model.trim="userName.val"
            @blur="userName.isValid = true"
          />
          <p v-if="!userName.isValid" class="error-paragraph-contact">
            * Your name can not be empty
          </p>
          <input
            class="input-contact"
            type="email"
            placeholder="Your email"
            v-model="userEmail.val"
            @blur="userEmail.isValid = true"
          />
          <p v-if="!userEmail.isValid" class="error-paragraph-contact">
            * Your email can not be empty
          </p>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            class="input-contact"
            v-model="userMessage.val"
            @blur="userMessage.isValid = true"
          ></textarea>
          <p v-if="!userMessage.isValid" class="error-paragraph-contact">
            * Your message can not be empty
          </p>

          <base-button
            class="card-project-button w-full text-lg 2xl:text-xl font-semibold"
          >
            Submit
          </base-button>
        </form>
      </main>

      <footer
        class="p-4 sm:flex sm:flex-col sm:gap-8 lg:flex-row lg:justify-between items-center"
      >
        <div class="circle-contact">
          <PhEnvelopeSimpleOpen
            class="icon-circle-contact"
          ></PhEnvelopeSimpleOpen>
          <p class="paragraph-circle-contact">manjit.wasit@gmail.com</p>
        </div>
        <div class="circle-contact">
          <PhPhoneCall class="icon-circle-contact"></PhPhoneCall>
          <p class="paragraph-circle-contact">+66 633432801</p>
        </div>
        <div class="circle-contact">
          <PhGithubLogo class="icon-circle-contact"></PhGithubLogo>
          <p class="paragraph-circle-contact">klamanjit</p>
        </div>
      </footer>
    </section>
  </div>
</template>

<style scoped>
.input-contact {
  @apply block w-full 2xl:text-2xl bg-slate-400 placeholder:text-slate-100 placeholder:font-semibold focus:outline-none focus:bg-slate-600 focus:text-slate-50 rounded-md p-4 mb-4;
}

.circle-contact {
  @apply h-48 w-48 2xl:h-52 2xl:w-52 bg-green-500 rounded-full shadow-lg flex flex-col items-center justify-center gap-2;
}

.icon-circle-contact {
  @apply h-10 w-10 2xl:h-12 2xl:w-12 fill-green-50;
}

.paragraph-circle-contact {
  @apply text-xs 2xl:text-sm text-gray-50 font-semibold;
}

.error-paragraph-contact {
  @apply text-sm 2xl:text-lg text-red-500 font-semibold mb-4;
}
</style>
