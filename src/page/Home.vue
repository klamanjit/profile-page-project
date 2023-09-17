<template>
  <div class="2xl:container 2xl:mx-auto">
    <side-header></side-header>
    <section class="lg:pl-60 sm:w-full sm:h-screen">
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
            <base-button mode="hero-home-button" class="2xl:text-xl"
              >DOWNLOAD RESUME</base-button
            >
            <base-button mode="hero-home-button" class="2xl:text-xl"
              >HIRE ME</base-button
            >
          </div>
        </div>
      </div>
      <!-- Description -->
      <div class="p-4 w-full">
        <p class="paragraph">
          By <span class="span">admin</span> Posted on
          <span class="span"> December 3, 2023</span> Posted in
          <span class="span">Art</span>
        </p>

        <h2 class="text-xl 2xl:text-2xl font-semibold mb-2">
          Lorem ipsum, dolor sit amet Consectetur adipisicing elit. Hic eius ex
          quae.
        </h2>

        <p class="paragraph text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed debitis
          hic voluptates aperiam doloribus omnis rerum porro animi harum esse
          numquam tempora commodi, aspernatur nemo beatae pariatur deserunt enim
          repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          libero sunt possimus? Perferendis unde recusandae doloribus nulla,
          explicabo nobis repudiandae accusantium aspernatur tempore laudantium
          facilis id fuga asperiores, vel obcaecati?
        </p>
        <p class="paragraph font-semibold text-green-500">READ MORE</p>
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
