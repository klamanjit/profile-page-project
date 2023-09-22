<template>
  <div class="2xl:container 2xl:mx-auto">
    <side-header></side-header>
    <section
      class="phone:pt-20 sm:pt-20 lg:pt-12 lg:pl-72 w-full phone:p-2 lg:p-12"
    >
      <nav
        class="flex justify-between items-center border-b-4 border-b-slate-950 pb-4 mb-8"
      >
        <ul class="nav-list-resume">
          <h2 class="nav-header-resume">Wasit</h2>

          <h2 class="nav-header-resume">Manjit</h2>
          <li class="paragraph-resume">Male, Thai, 28/01/1994</li>
        </ul>

        <ul>
          <li class="paragraph-resume">252/169 The Base Saphanmai</li>
          <li class="paragraph-resume">Phahon Yothin Road, Anusawari,</li>
          <li class="paragraph-resume">Bang Khen, Bangkok 10220</li>
        </ul>
      </nav>

      <main class="grid grid-cols-resume-template">
        <!-- 1st row -->
        <!-- 1st column -->
        <div class="col-start-1">
          <h2 class="header-column-resume">Programming related</h2>
          <div class="relative">
            <span class="big-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-8">Udemy-Online Course</p>
            <p class="paragraph-resume ml-8">(2/2023)</p>
          </div>
        </div>

        <!-- 2nd column -->
        <div class="col-start-2">
          <div class="div-line-resume">
            <p class="line-resume"></p>
          </div>
          <h3 class="subhead-column">Self-Learned Programmer</h3>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Fundamental understanding of Python, HTML, CSS, JavaScript,
              TypeScript and Vue.js.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Skilled in developing web pages from scratch using HTML, CSS, and
              JavaScript, as well as utilizing frameworks like Vue.js and
              Tailwind CSS. Along with using basic of git version control.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5 mb-4">
              Porfolio on Github : <br />
              <a
                class="text-slate-950 italic underline"
                href="https://github.com/klamanjit/portfolio"
                >https://github.com/klamanjit/portfolio</a
              >
            </p>
          </div>
        </div>

        <!-- projects-->

        <div class="col-start-1">
          <div class="relative">
            <span class="big-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-8">Project Portfolio</p>
            <p class="paragraph-resume ml-8">(6/2023)</p>
          </div>
        </div>

        <div class="col-start-2">
          <!-- Profile -->
          <h3 class="subhead-column">Profile Page Project</h3>

          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              My profile page includes my resume, side projects, and social
              media links.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Developed web applications utilizing Vite.js and Vue.js(Vue 3) as
              the primary frameworks, with styling implemented using Tailwind
              CSS.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5 mb-4">
              Code and Site on GitHub : <br />
              <a
                class="text-slate-950 italic underline mr-2"
                href="https://github.com/klamanjit/profile-page-project"
                >View code</a
              >
              <a
                class="text-slate-950 italic underline"
                href="https://klamanjit.github.io/profile-page-project/"
                >Visit Site</a
              >
            </p>
          </div>

          <!-- To do list -->
          <h3 class="subhead-column">To Do List Project</h3>

          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              To-do list platform for task management with add, edit, and delete
              functionalities.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Developed web applications utilizing Vite.js and Vue.js(Vue 3) as
              the primary frameworks, with styling implemented using Tailwind
              CSS.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5 mb-4">
              Code and Site on GitHub : <br />
              <a
                class="text-slate-950 italic underline mr-2"
                href="https://github.com/klamanjit/daily-task-project"
                >View code</a
              >
              <a
                class="text-slate-950 italic underline"
                href="https://klamanjit.github.io/daily-task-project/"
                >Visit Site</a
              >
            </p>
          </div>

          <!-- Food -->
          <h3 class="subhead-column">Food Project</h3>

          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Focus on Thai cuisine, including descriptions of dishes and
              associated restaurants.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Developed web applications utilizing Vite.js and Vue.js(Vue 3) as
              the primary frameworks, with styling implemented using Tailwind
              CSS.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5 mb-4">
              Code and Site on GitHub : <br />
              <a
                class="text-slate-950 italic underline mr-2"
                href="https://github.com/klamanjit/jinan-food-project"
                >View code</a
              >
              <a
                class="text-slate-950 italic underline"
                href="https://klamanjit.github.io/jinan-food-project/"
                >Visit Site</a
              >
            </p>
          </div>

          <!-- catArticle -->
          <h3 class="subhead-column">Cat Article Project</h3>

          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Offers comprehensive insights on the world's top five cat breeds,
              including detailed descriptions, characteristics, and origins.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Designed and developed a web application utilizing TypeScript for
              scripting, HTML for structure, and CSS for styling.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5 mb-4">
              Code and Site on GitHub : <br />
              <a
                class="text-slate-950 italic underline mr-2"
                href="https://github.com/klamanjit/catsArticle-demo"
                >View code</a
              >
              <a
                class="text-slate-950 italic underline"
                href="https://klamanjit.github.io/catsArticle-demo/"
                >Visit Site</a
              >
            </p>
          </div>

          <!-- Kuro game page-->
          <h3 class="subhead-column">Game page Project</h3>

          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Dedicated YouTube game channel featuring a variety of gameplays,
              including Action, Strategy, and RPG genres.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Created web applications through the use of HTML, CSS, and
              JavaScript, with a focus on responsive design and user-friendly
              interfaces.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5 mb-8">
              Code and Site on GitHub : <br />
              <a
                class="text-slate-950 italic underline mr-2"
                href="https://github.com/klamanjit/kuro-game-page-projrct"
                >View code</a
              >
              <a
                class="text-slate-950 italic underline"
                href="https://klamanjit.github.io/kuro-game-page-projrct/"
                >Visit Site</a
              >
            </p>
          </div>
        </div>

        <!-- 2nd row -->
        <!-- 1st column -->
        <div class="col-start-1">
          <h2 class="header-column-resume">Work Experience</h2>
          <div class="relative">
            <span class="big-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-8">
              Gintech (Thailand) Limited Pathum Thani, <br />Thailand
            </p>
            <p class="paragraph-resume ml-8">(4/2019 - 7/2019)</p>
          </div>
        </div>

        <!-- 2nd column -->
        <div class="col-start-2">
          <div class="div-line-resume">
            <p class="line-resume"></p>
          </div>
          <h3 class="subhead-column">Process Engineer</h3>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Optimized and improve solar cell technology, improved process
              stability and effectiveness, promoted cell conversion efficiency.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Reviewed, documented, and maintained existing operational
              processes and flows. Worked with management towards improvement of
              manufacturing processes.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5 mb-4">
              Provided reports and graphs demonstrating areas of improvement and
              daily reports to management on progress and results.
            </p>
          </div>
        </div>

        <!-- /// -->

        <div class="col-start-1">
          <div class="relative">
            <span class="big-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-8">
              National Science and <br />Technology Development Agency
              (NSTDA),<br />
              Pathum Thani, Thailand
            </p>
            <p class="paragraph-resume ml-8">(06 – 08/2017)</p>
          </div>
        </div>

        <!-- 2nd column -->
        <div class="col-start-2">
          <h3 class="subhead-column">Engineering Intern</h3>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Assisted in research and development for the Nano-spray dryer
              machine in order to find the most suitable condition of the
              machine to produce powdered products and built Excel models to
              analyze performance.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Assisted in engineering equipment testing. Helped with technical
              task in workshops.
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5 mb-8">
              Responsible for writing weekly lab reports.
            </p>
          </div>
        </div>

        <!-- 3rd row -->
        <!-- 1st column -->
        <div class="col-start-1">
          <h2 class="header-column-resume">Education</h2>
          <div class="relative">
            <span class="big-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-8">
              Sirindhorn International <br />
              Institute of Technology (SIIT) <br />
              Thammasat University Pathum Thani, Thailand
            </p>
            <p class="paragraph-resume ml-8 mb-8">(2018)</p>
          </div>
        </div>

        <!-- 2nd column -->
        <div class="col-start-2">
          <div class="div-line-resume">
            <p class="line-resume"></p>
          </div>
          <h3 class="subhead-column">Bachelor of Chemical Engineering</h3>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5">
              Major in Chemical engineering - Bio-Chemical Engineering and
              technology department (BCET).
            </p>
          </div>
          <div class="relative">
            <span class="small-dot-resume">&#8226;</span>
            <p class="paragraph-resume ml-5 mb-8">
              Graduated in 2018 with GPA 2.78.
            </p>
          </div>
        </div>

        <!-- 3rd row -->
        <!-- 1st column -->
        <div class="col-start-1">
          <h2 class="header-column-resume">Professional Skills</h2>
        </div>

        <!-- 2nd column -->
        <div class="col-start-2">
          <div class="div-line-resume">
            <p class="line-resume"></p>
          </div>
        </div>

        <ul class="col-end-3 col-span-2 flex justify-between">
          <li class="relative">
            <span class="big-dot-resume">&#8226;</span>
            <h3 class="subhead-column ml-8">Office Software</h3>
            <p class="paragraph-resume ml-8">
              (Words, Excels, PowerPoint, Page, Keynote)
            </p>
          </li>

          <li class="relative">
            <span class="big-dot-resume">&#8226;</span>
            <h3 class="subhead-column ml-8">Programming Skills</h3>
            <p class="paragraph-resume ml-8">
              (Python, JavaScript, HTML, CSS, TypeScript, Vue.js, Tailwind CSS)
            </p>
          </li>

          <li class="relative">
            <span class="big-dot-resume">&#8226;</span>
            <h3 class="subhead-column ml-8">Design Software</h3>
            <p class="paragraph-resume ml-8">
              (Canvas, Adobe premiere pro, iMovie)
            </p>
          </li>
        </ul>
      </main>
    </section>
  </div>
</template>

<style scoped>
.nav-list-resume {
  @apply flex flex-col;
}

.nav-header-resume {
  @apply phone:text-xl sm:text-3xl 2xl:text-5xl font-extrabold tracking-widest;
}

.paragraph-resume {
  @apply phone:text-xs sm:text-base 2xl:text-xl text-slate-500;
}

.header-column-resume {
  @apply h-8 uppercase phone:text-base sm:text-xl 2xl:text-3xl font-semibold tracking-widest mb-8;
}

.big-dot-resume {
  @apply phone:text-4xl sm:text-6xl 2xl:text-7xl  absolute left-0 phone:-top-4 sm:-top-6  2xl:-top-7;
}

.div-line-resume {
  @apply phone:h-7 h-8 flex items-center justify-center mb-8;
}

.line-resume {
  @apply w-full h-0.5 2xl:h-1 bg-slate-300;
}

.subhead-column {
  @apply phone:text-sm  sm:text-lg 2xl:text-2xl font-semibold mb-2;
}

.small-dot-resume {
  @apply phone:text-xl  sm:text-3xl 2xl:text-4xl absolute -top-2 left-0;
}
</style>
