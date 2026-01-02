<template>
  <section class="relative py-24 md:py-32 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-bg">
      <!-- Animated gradient orbs -->
      <div class="absolute top-1/4 -left-40 w-[800px] h-[800px]">
        <div
          class="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-5 blur-3xl animate-pulse-slow"
        ></div>
      </div>

      <div class="absolute bottom-1/4 -right-40 w-[600px] h-[600px]">
        <div
          class="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full opacity-5 blur-3xl animate-pulse-slow"
          style="animation-delay: 2s"
        ></div>
      </div>

      <!-- Grid lines -->
      <div
        class="absolute inset-0"
        :style="{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 225, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(27, 212, 193, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }"
      ></div>

      <!-- Floating lines -->
      <div
        v-for="i in 8"
        :key="i"
        class="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"
        :style="{ left: `${i * 12.5}%` }"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header -->
      <div
        class="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20"
      >
        <div class="max-w-2xl">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6"
          >
            <div class="flex items-center gap-2">
              <div class="relative">
                <div
                  class="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"
                ></div>
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 animate-ping"
                ></div>
              </div>
              <span
                class="text-textPrimary font-semibold text-sm tracking-wider uppercase"
                >{{ t("featured_projects.badge") }}</span
              >
            </div>
          </div>

          <!-- Title -->
          <h2 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span class="text-textPrimary">{{
              t("featured_projects.title.part1")
            }}</span>
            <span
              class="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            >
              {{ t("featured_projects.title.highlight") }}
            </span>
            <span class="text-textPrimary">{{
              t("featured_projects.title.part3")
            }}</span>
          </h2>

          <!-- Description -->
          <p class="text-lg text-textLightGray mt-6 leading-relaxed font-light">
            {{ t("featured_projects.description.prefix") }}
            <span class="text-primary font-medium">{{
              t("featured_projects.description.tech")
            }}</span>
            {{ t("featured_projects.description.and") }}
            <span class="text-secondary font-medium">{{
              t("featured_projects.description.design")
            }}</span
            >.
          </p>
        </div>

        <!-- View All Button -->
        <NuxtLink
          to="/projects"
          class="group/all-projects relative inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 bg-[#111827] border border-[#334155] rounded-xl group-hover/all-projects:border-primary/30 transition-colors duration-300"
          ></div>

          <!-- Hover gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover/all-projects:opacity-100 transition-opacity duration-300"
          ></div>

          <!-- Content -->
          <span class="relative z-10 text-white">{{
            t("featured_projects.view_all")
          }}</span>
          <svg
            class="relative z-10 w-5 h-5 text-primary group-hover/all-projects:translate-x-1 transition-transform duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </NuxtLink>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="group relative"
          @mouseenter="hoveredProject = index"
          @mouseleave="hoveredProject = null"
        >
          <!-- Card -->
          <div
            class="relative h-full shadow-lg rounded-3xl overflow-hidden transition-all duration-500"
          >
            <!-- Gradient Border -->
            <div
              class="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"
            ></div>

            <!-- Main Card -->
            <div
              class="relative h-full bg-bg rounded-3xl border border-border group-hover:border-primary/30 overflow-hidden transition-all duration-300"
            >
              <!-- Project Image -->
              <div class="relative aspect-[16/10] overflow-hidden">
                <!-- Background Image -->
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <!-- Gradient Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent"
                ></div>

                <!-- Hover Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>

                <!-- Category Badge -->
                <div class="absolute top-6 left-6">
                  <div class="relative">
                    <div
                      class="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10"
                    >
                      <span
                        class="text-textPrimary text-xs font-semibold tracking-wider"
                        >{{ project.category }}</span
                      >
                    </div>
                    <div
                      class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"
                    ></div>
                  </div>
                </div>

                <!-- Client Logo -->
                <div class="absolute top-6 right-6">
                  <div
                    class="w-10 h-10 rounded-xl bg-primary/10 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                  >
                    <div class="text-textPrimary font-bold text-sm">
                      {{ project.client.charAt(0) }}
                    </div>
                  </div>
                </div>

                <!-- Hover Action Buttons -->
                <div
                  class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4"
                >
                  <a
                    :href="project.demoUrl"
                    target="_blank"
                    class="group/demo relative px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-primary/30 transition-all duration-300"
                  >
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover/demo:opacity-100 transition-opacity duration-300"
                    ></div>
                    <span
                      class="relative z-10 text-textPrimary font-medium flex items-center gap-2"
                    >
                      <svg
                        class="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                        />
                        <path
                          d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                        />
                      </svg>
                      {{ t("featured_projects.actions.live_demo") }}
                    </span>
                  </a>

                  <a
                    :href="project.codeUrl"
                    target="_blank"
                    class="group/code relative px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-secondary/30 transition-all duration-300"
                  >
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl opacity-0 group-hover/code:opacity-100 transition-opacity duration-300"
                    ></div>
                    <span
                      class="relative z-10 text-textPrimary font-medium flex items-center gap-2"
                    >
                      <svg
                        class="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      {{ t("featured_projects.actions.view_code") }}
                    </span>
                  </a>
                </div>
              </div>

              <!-- Project Content -->
              <div class="p-8">
                <!-- Client -->
                <div class="flex items-center gap-2 mb-3">
                  <div
                    class="w-6 h-px bg-gradient-to-r from-primary to-secondary"
                  ></div>
                  <span class="text-textGray text-sm font-medium">{{
                    project.client
                  }}</span>
                </div>

                <!-- Title -->
                <h3
                  class="text-2xl font-bold text-textPrimary mb-4 group-hover:text-gradient transition-all duration-300"
                >
                  {{ project.title }}
                </h3>

                <!-- Description -->
                <p class="text-textLightGray mb-6 leading-relaxed font-light">
                  {{ project.description }}
                </p>

                <!-- Tech Stack -->
                <div class="mb-8">
                  <div class="flex flex-wrap gap-2">
                    <div
                      v-for="tag in project.tags"
                      :key="tag"
                      class="group/tag relative"
                    >
                      <div
                        class="px-3 py-1.5 rounded-lg bg-bgSoft border border-primary/30 group-hover/tag:border-primary/50 transition-all duration-300"
                      >
                        <span
                          class="text-textGray text-xs font-medium cursor-pointer group-hover/tag:text-primary"
                          >{{ tag }}</span
                        >
                      </div>
                      <div
                        class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-0 group-hover/tag:opacity-20 transition-opacity duration-300 -z-10"
                      ></div>
                    </div>
                  </div>
                </div>

                <!-- Stats -->
                <div
                  class="grid grid-cols-3 gap-4 pt-6 border-t border-primary/50"
                >
                  <div
                    v-for="stat in project.stats"
                    :key="stat.label"
                    class="text-center"
                  >
                    <div class="text-2xl font-bold text-textPrimary mb-1">
                      {{ stat.value }}
                    </div>
                    <div
                      class="text-xs text-textLightGray uppercase tracking-wider"
                    >
                      {{ stat.label }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floating Particles on Hover -->
              <div
                v-if="hoveredProject === index"
                class="absolute inset-0 overflow-hidden pointer-events-none"
              >
                <div
                  v-for="i in 8"
                  :key="i"
                  class="absolute w-1 h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-particle"
                  :style="{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 0.5}s`,
                    animationDuration: `${Math.random() * 1 + 0.5}s`,
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Projects Footer -->
      <div class="mt-20 pt-12 border-t border-primary/50">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div class="max-w-xl">
            <h3 class="text-3xl font-bold text-textPrimary mb-4">
              {{ t("featured_projects.cta.title.part1") }}
              <span
                class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >{{ t("featured_projects.cta.title.highlight") }}</span
              >
            </h3>
            <p class="text-textLightGray">
              {{ t("featured_projects.cta.description") }}
            </p>
          </div>

          <NuxtLink
            to="/contact"
            class="group/cta relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,225,255,0.3)]"
          >
            <!-- Background gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl"
            ></div>

            <!-- Hover gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover/cta:opacity-100 rounded-xl transition-opacity duration-300"
            ></div>

            <!-- Shine effect -->
            <div class="absolute inset-0 overflow-hidden rounded-xl">
              <div
                class="absolute -inset-y-full -left-24 w-24 bg-white/30 skew-x-12 group-hover/cta:left-full transition-all duration-1000"
              ></div>
            </div>

            <!-- Content -->
            <div
              class="relative z-10 flex items-center justify-center gap-3 text-[#0f1729]"
            >
              <span>{{ t("featured_projects.cta.button") }}</span>
              <svg
                class="w-5 h-5 group-hover/cta:translate-x-2 transition-transform duration-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const projects = [
  {
    title: "FinTrack Pro",
    client: "Global Finance Corp",
    description:
      "Enterprise-grade financial analytics platform with real-time data visualization and AI-powered insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
    category: "Web Application",
    demoUrl: "https://demo.example.com",
    codeUrl: "https://github.com",
    stats: [
      { value: "99.9%", label: "Uptime" },
      { value: "2.5x", label: "Efficiency" },
      { value: "50K", label: "Users" },
    ],
  },
  {
    title: "HealthHub Mobile",
    client: "MedTech Solutions",
    description:
      "Cross-platform healthcare app connecting patients with providers through secure video consultations.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",

    tags: ["React Native", "Firebase", "WebRTC", "iOS", "Android"],
    category: "Mobile App",
    demoUrl: "https://demo.example.com",
    codeUrl: "https://github.com",
    stats: [
      { value: "4.9", label: "Rating" },
      { value: "10K+", label: "Downloads" },
      { value: "98%", label: "Satisfaction" },
    ],
  },
  {
    title: "EcoCommerce",
    client: "Green Living Co",
    description:
      "Sustainable e-commerce platform with carbon footprint tracking and eco-friendly product recommendations.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    tags: ["Next.js", "Stripe", "MongoDB", "Redis", "Docker"],
    category: "E-Commerce",
    demoUrl: "https://demo.example.com",
    codeUrl: "https://github.com",
    stats: [
      { value: "40%", label: "Growth" },
      { value: "1M+", label: "Revenue" },
      { value: "95%", label: "Retention" },
    ],
  },
];

const hoveredProject = ref(null);
</script>

<style>
/* Custom Animations */
@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes particle {
  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
  50% {
    transform: translateY(-20px) scale(1.2);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.05;
    transform: scale(1);
  }
  50% {
    opacity: 0.08;
    transform: scale(1.05);
  }
}

.animate-gradient {
  animation: gradient 3s ease infinite;
  background-size: 200% auto;
}

.animate-particle {
  animation: particle linear infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.text-gradient {
  background: linear-gradient(to right, #00e1ff, #1bd4c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0f1729;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #00e1ff, #1bd4c1);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #1bd4c1, #00e1ff);
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
</style>
