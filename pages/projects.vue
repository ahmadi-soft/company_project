<template>
  <div class="min-h-screen bg-bg overflow-hidden">
    <!-- Hero Section -->
    <section class="relative py-24 md:py-32 overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <!-- Grid Pattern -->
        <div class="absolute inset-0 opacity-10">
          <div
            class="absolute inset-0"
            :style="{
              backgroundImage: `
                linear-gradient(to right, #00e1ff22 1px, transparent 1px),
                linear-gradient(to bottom, #1bd4c122 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }"
          ></div>
        </div>

        <!-- Animated Orbs -->
        <div class="absolute top-1/3 -left-40 w-[600px] h-[600px]">
          <div
            class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full opacity-5 blur-3xl animate-pulse-slow"
          ></div>
        </div>

        <div class="absolute bottom-1/3 -right-40 w-[500px] h-[500px]">
          <div
            class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] rounded-full opacity-5 blur-3xl animate-pulse-slow"
            style="animation-delay: 1.5s"
          ></div>
        </div>

        <!-- Floating Lines -->
        <div class="absolute inset-0 overflow-hidden">
          <div
            v-for="i in 12"
            :key="i"
            class="absolute w-px h-full bg-gradient-to-b from-transparent via-[#00e1ff]/10 to-transparent animate-float-line"
            :style="{
              left: `${i * 8.33}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
            }"
          ></div>
        </div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div ref="heroRef" class="max-w-4xl mx-auto text-center">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 border border-[#00e1ff]/20 mb-8"
          >
            <div class="flex items-center gap-2">
              <div class="relative">
                <div
                  class="w-2 h-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-pulse"
                ></div>
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full blur opacity-30 animate-ping"
                ></div>
              </div>
              <span
                class="text-textPrimary font-semibold text-sm tracking-wider uppercase"
                >{{ t("projects.badge") }}</span
              >
            </div>
          </div>

          <!-- Title -->
          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span class="text-textPrimary">{{
              t("projects.title.part1")
            }}</span>
            <span class="block">
              <span
                class="bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              >
                {{ t("projects.title.highlight") }}
              </span>
            </span>
          </h1>

          <!-- Description -->
          <p
            class="text-xl md:text-2xl text-[#cbd5e1] max-w-3xl mx-auto leading-relaxed font-light"
          >
            {{ t("projects.description.pre") }}
            <span class="text-[#00e1ff] font-medium">{{
              t("projects.categories.Web Apps")
            }}</span
            >,
            <span class="text-[#1bd4c1] font-medium">{{
              t("projects.categories.Mobile Apps")
            }}</span
            >, and
            <span
              class="bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] bg-clip-text text-transparent font-medium"
              >{{ t("projects.categories.UI/UX Design") }}</span
            >.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter & Projects Section -->
    <section class="relative py-12 pb-32">
      <div class="container mx-auto px-4">
        <!-- Filter Section -->
        <div
          ref="filterRef"
          class="sticky top-24 z-20 mb-12 bg-bgSoft/80 backdrop-blur-xl border border-primary/50 rounded-2xl p-4 shadow-xl"
        >
          <div
            class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <!-- Filter Label -->
            <div class="flex items-center gap-3">
              <div class="relative">
                <svg
                  class="w-5 h-5 text-[#00e1ff]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-textPrimary font-semibold">
                  {{ t("projects.filter.title") }}
                </h3>
                <p class="text-sm text-[#94a3b8]">
                  {{
                    t("projects.filter.found", {
                      count: filteredProjects.length,
                    })
                  }}
                </p>
              </div>
            </div>

            <!-- Filter Buttons -->
            <div class="flex flex-wrap gap-2">
              <button
                v-for="category in categories"
                :key="category"
                @click="setActiveCategory(category)"
                :class="[
                  'group relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300',
                  activeCategory === category
                    ? 'text-textPrimary'
                    : 'text-[#94a3b8] hover:text-white',
                ]"
              >
                <!-- Background for active state -->
                <div
                  v-if="activeCategory === category"
                  class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-xl border border-[#00e1ff]/30"
                ></div>

                <!-- Hover background -->
                <div
                  v-else
                  class="absolute inset-0 bg-primary/20 border border-primary/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>

                <span class="relative z-10">{{
                  t(`projects.categories.${category}`)
                }}</span>

                <!-- Active indicator -->
                <div
                  v-if="activeCategory === category"
                  class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full"
                ></div>
              </button>
            </div>

            <!-- Sort Dropdown -->
            <div class="relative group/sort">
              <button
                class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111827] border border-[#334155] hover:border-[#00e1ff]/30 transition-colors duration-300"
              >
                <svg
                  class="w-4 h-4 text-[#94a3b8]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-white font-medium"
                  >{{ t("projects.sort.label") }}:
                  {{ t(sortOptions[activeSort]) }}</span
                >
              </button>

              <!-- Dropdown Menu -->
              <div
                class="absolute top-full right-0 mt-2 w-48 bg-[#111827] border border-[#334155] rounded-xl shadow-xl opacity-0 invisible group-hover/sort:opacity-100 group-hover/sort:visible transition-all duration-300 z-30"
              >
                <div class="py-2">
                  <button
                    v-for="(label, key) in sortOptions"
                    :key="key"
                    @click="activeSort = key"
                    class="w-full px-4 py-2 text-left text-[#94a3b8] hover:text-white hover:bg-[#1e293b] transition-colors duration-300 flex items-center justify-between"
                  >
                    <span>{{ t(label) }}</span>
                    <svg
                      v-if="activeSort === key"
                      class="w-4 h-4 text-[#00e1ff]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in sortedProjects"
            :key="project.title"
            ref="projectRefs"
            class="opacity-0 translate-y-8"
          >
            <div
              class="group relative"
              @mouseenter="hoveredProject = index"
              @mouseleave="hoveredProject = null"
            >
              <!-- Project Card -->
              <div
                class="relative h-full rounded-3xl overflow-hidden transition-all duration-500"
              >
                <!-- Gradient Border -->
                <div
                  class="absolute -inset-0.5 bg-gradient-to-br from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"
                ></div>

                <!-- Main Card -->
                <div
                  class="relative h-full shadow-lg bg-card rounded-3xl border border-primary/20 group-hover:border-primary/50 overflow-hidden transition-all duration-300"
                >
                  <!-- Project Image -->
                  <div class="relative aspect-[16/9] overflow-hidden">
                    <!-- Image -->
                    <img
                      :src="project.image"
                      :alt="project.title"
                      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <!-- Gradient Overlay -->
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"
                    ></div>

                    <!-- Hover Overlay -->
                    <div
                      class="absolute inset-0 bg-gradient-to-tr from-[#00e1ff]/20 via-transparent to-[#1bd4c1]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    ></div>

                    <!-- Category Badge -->
                    <div class="absolute top-4 left-4">
                      <div class="relative">
                        <div
                          class="px-3 py-1 rounded-full bg-gradient-to-r from-[#00e1ff]/20 to-[#1bd4c1]/20 backdrop-blur-sm border border-white/10"
                        >
                          <span
                            class="text-textPrimary text-xs font-semibold tracking-wider"
                            >{{ project.category }}</span
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Client Badge -->
                    <div class="absolute top-4 right-4">
                      <div class="relative">
                        <div
                          class="w-10 h-10 rounded-xl bg-card/10 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        >
                          <div class="text-textPrimary font-bold text-sm">
                            {{ project.client.charAt(0) }}
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Hover Actions -->
                    <div
                      class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4"
                    >
                      <a
                        :href="project.demoUrl"
                        target="_blank"
                        class="group/action relative px-5 py-2.5 rounded-xl bg-card/10 backdrop-blur-sm border border-white/20 hover:border-[#00e1ff]/30 transition-all duration-300"
                      >
                        <div
                          class="absolute inset-0 bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 rounded-xl opacity-0 group-hover/action:opacity-100 transition-opacity duration-300"
                        ></div>
                        <span
                          class="relative z-10 text-textPrimary font-medium flex items-center gap-2 text-sm"
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
                        class="group/action relative px-5 py-2.5 rounded-xl bg-card/10 backdrop-blur-sm border border-white/20 hover:border-[#1bd4c1]/30 transition-all duration-300"
                      >
                        <div
                          class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1]/10 to-[#00e1ff]/10 rounded-xl opacity-0 group-hover/action:opacity-100 transition-opacity duration-300"
                        ></div>
                        <span
                          class="relative z-10 text-textPrimary font-medium flex items-center gap-2 text-sm"
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
                  <div class="p-6">
                    <!-- Client Info -->
                    <div class="flex items-center gap-2 mb-3">
                      <div
                        class="w-6 h-px bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1]"
                      ></div>
                      <span class="text-[#94a3b8] text-sm font-medium">{{
                        project.client
                      }}</span>
                    </div>

                    <!-- Title -->
                    <h3
                      class="text-xl font-bold text-textPrimary mb-3 group-hover:text-gradient transition-all duration-300 line-clamp-1"
                    >
                      {{ project.title }}
                    </h3>

                    <!-- Description -->
                    <p
                      class="text-[#cbd5e1] mb-4 leading-relaxed font-light text-sm line-clamp-2"
                    >
                      {{ project.description }}
                    </p>

                    <!-- Tech Stack -->
                    <div class="mb-6">
                      <div class="flex flex-wrap gap-2">
                        <div
                          v-for="tag in project.tags.slice(0, 4)"
                          :key="tag"
                          class="group/tag relative"
                        >
                          <div
                            class="px-3 py-1.5 rounded-lg cursor-pointer bg-card border border-primary/30 group-hover/tag:border-primary/50 transition-all duration-300"
                          >
                            <span
                              class="text-textPrimary text-xs font-medium group-hover/tag:text-primary"
                              >{{ tag }}</span
                            >
                          </div>
                          <div
                            class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-lg blur opacity-0 group-hover/tag:opacity-20 transition-opacity duration-300 -z-10"
                          ></div>
                        </div>

                        <div
                          v-if="project.tags.length > 4"
                          class="group/more relative"
                        >
                          <div
                            class="px-3 py-1.5 cursor-pointer rounded-lg bg-card border border-primary/30 group-hover/more:border-primary/500 transition-all duration-300"
                          >
                            <span
                              class="text-textPrimary text-xs font-medium group-hover/more:text-primary"
                              >+{{ project.tags.length - 4 }}</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Project Stats -->
                    <div
                      class="grid grid-cols-3 gap-4 pt-4 border-t border-primary/50"
                    >
                      <div class="text-center">
                        <div class="text-lg font-bold text-textPrimary mb-1">
                          {{ project.year }}
                        </div>
                        <div
                          class="text-xs text-[#94a3b8] uppercase tracking-wider"
                        >
                          {{ t("projects.stats.year") }}
                        </div>
                      </div>
                      <div class="text-center">
                        <div class="text-lg font-bold text-textPrimary mb-1">
                          {{ project.duration }}
                        </div>
                        <div
                          class="text-xs text-[#94a3b8] uppercase tracking-wider"
                        >
                          {{ t("projects.stats.duration") }}
                        </div>
                      </div>
                      <div class="text-center">
                        <div class="text-lg font-bold text-textPrimary mb-1">
                          {{ project.teamSize }}
                        </div>
                        <div
                          class="text-xs text-[#94a3b8] uppercase tracking-wider"
                        >
                          {{ t("projects.stats.team") }}
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
                      v-for="i in 6"
                      :key="i"
                      class="absolute w-1 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-particle"
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
        </div>

        <!-- Empty State -->
        <div
          v-if="filteredProjects.length === 0"
          class="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20"
        >
          <div
            class="w-24 h-24 bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <svg
              class="w-12 h-12 text-[#94a3b8]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 3A1.5 1.5 0 001 4.5v4A1.5 1.5 0 002.5 10h6A1.5 1.5 0 0010 8.5v-4A1.5 1.5 0 008.5 3h-6zm11 2A1.5 1.5 0 0012 6.5v7a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0017.5 5h-4zm-10 7A1.5 1.5 0 002 13.5v2A1.5 1.5 0 003.5 17h6a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 009.5 12h-6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">
            {{ t("projects.empty.title") }}
          </h3>
          <p class="text-[#cbd5e1] mb-6 max-w-md mx-auto">
            {{ t("projects.empty.desc") }}
          </p>
          <button
            @click="setActiveCategory('All')"
            class="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] text-[#0f1729] font-semibold hover:shadow-[0_0_30px_rgba(0,225,255,0.3)] transition-all duration-300"
          >
            {{ t("projects.empty.view_all") }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

// Define reactive state
const activeCategory = ref("All");
const activeSort = ref("recent");
const hoveredProject = ref(null);

// Categories
const categories = [
  "All",
  "Web Apps",
  "Mobile Apps",
  "E-Commerce",
  "UI/UX Design",
  "Enterprise",
];

// Sort options (store translation keys)
const sortOptions = {
  recent: "projects.sort.recent",
  popular: "projects.sort.popular",
  alphabet: "projects.sort.alphabet",
};

// Projects data
const projects = [
  {
    title: "FinTrack Pro",
    client: "Global Finance Corp",
    description:
      "Enterprise-grade financial analytics platform with real-time data visualization and AI-powered insights for investment professionals.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    tags: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "D3.js",
      "TypeScript",
      "Docker",
    ],
    category: "Web Apps",
    demoUrl: "#",
    codeUrl: "#",
    year: "2023",
    duration: "6 months",
    teamSize: "8",
  },
  {
    title: "HealthHub Mobile",
    client: "MedTech Solutions",
    description:
      "Cross-platform healthcare app connecting patients with providers through secure video consultations and health tracking.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop",
    tags: [
      "React Native",
      "Firebase",
      "WebRTC",
      "Node.js",
      "GraphQL",
      "iOS",
      "Android",
    ],
    category: "Mobile Apps",
    demoUrl: "#",
    codeUrl: "#",
    year: "2023",
    duration: "5 months",
    teamSize: "6",
  },
  {
    title: "EcoCommerce",
    client: "Green Living Co",
    description:
      "Sustainable e-commerce platform with carbon footprint tracking and eco-friendly product recommendations.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    tags: ["Next.js", "Stripe", "MongoDB", "Vercel", "Redis", "Tailwind"],
    category: "E-Commerce",
    demoUrl: "#",
    codeUrl: "#",
    year: "2023",
    duration: "4 months",
    teamSize: "5",
  },
  {
    title: "TaskFlow Enterprise",
    client: "Productivity Labs",
    description:
      "Modern project management tool with real-time collaboration, Kanban boards, and AI-powered task prioritization.",
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop",
    tags: ["Vue.js", "GraphQL", "PostgreSQL", "Docker", "WebSocket", "Redis"],
    category: "Enterprise",
    demoUrl: "#",
    codeUrl: "#",
    year: "2023",
    duration: "8 months",
    teamSize: "12",
  },
  {
    title: "FitTracker Pro",
    client: "Active Life Inc",
    description:
      "Comprehensive fitness tracking app with personalized workout plans, nutrition logging, and social challenges.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
    tags: [
      "Flutter",
      "Firebase",
      "TensorFlow",
      "Kotlin",
      "Swift",
      "Machine Learning",
    ],
    category: "Mobile Apps",
    demoUrl: "#",
    codeUrl: "#",
    year: "2023",
    duration: "6 months",
    teamSize: "7",
  },
  {
    title: "LuxuryStay Platform",
    client: "Premium Hotels Group",
    description:
      "High-end hotel booking platform with virtual room tours, concierge services, and loyalty program integration.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    tags: ["React", "Python", "Redis", "Elasticsearch", "Docker", "AWS Lambda"],
    category: "E-Commerce",
    demoUrl: "#",
    codeUrl: "#",
    year: "2023",
    duration: "7 months",
    teamSize: "9",
  },
  {
    title: "CryptoWallet UI/UX",
    client: "BlockChain Ventures",
    description:
      "Sleek and secure cryptocurrency wallet interface design with intuitive trading features and portfolio management.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format&fit=crop",
    tags: [
      "Figma",
      "Prototyping",
      "Design System",
      "Motion",
      "User Research",
      "Testing",
    ],
    category: "UI/UX Design",
    demoUrl: "#",
    codeUrl: "#",
    year: "2023",
    duration: "3 months",
    teamSize: "4",
  },
  {
    title: "SmartHome Hub IoT",
    client: "IoT Innovations",
    description:
      "Intuitive smart home control application for managing connected devices, automation routines, and energy monitoring.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop",
    tags: [
      "React Native",
      "MQTT",
      "Node.js",
      "InfluxDB",
      "WebSocket",
      "Raspberry Pi",
    ],
    category: "Mobile Apps",
    demoUrl: "#",
    codeUrl: "#",
    year: "2023",
    duration: "5 months",
    teamSize: "6",
  },
  {
    title: "LearnLab EdTech",
    client: "EduTech Global",
    description:
      "Interactive e-learning platform with live classes, progress tracking, and gamified learning experiences.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop",
    tags: ["Next.js", "WebSocket", "PostgreSQL", "AWS", "Docker", "Stripe"],
    category: "Web Apps",
    demoUrl: "#",
    codeUrl: "#",
    year: "2023",
    duration: "9 months",
    teamSize: "10",
  },
];

// Computed properties
const filteredProjects = computed(() => {
  if (activeCategory.value === "All") {
    return projects;
  }
  return projects.filter((p) => p.category === activeCategory.value);
});

const sortedProjects = computed(() => {
  const projects = [...filteredProjects.value];

  switch (activeSort.value) {
    case "alphabet":
      return projects.sort((a, b) => a.title.localeCompare(b.title));
    case "popular":
      // Sort by team size as a proxy for popularity
      return projects.sort(
        (a, b) => parseInt(b.teamSize) - parseInt(a.teamSize)
      );
    case "recent":
    default:
      // Sort by year (most recent first)
      return projects.sort((a, b) => parseInt(b.year) - parseInt(a.year));
  }
});

// Methods
const setActiveCategory = (category) => {
  activeCategory.value = category;
  // Animate projects when category changes
  animateProjects();
};

// Animation refs
const heroRef = ref(null);
const filterRef = ref(null);
const projectRefs = ref([]);

// Intersection Observer animation
const animateProjects = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Reset animation state
  projectRefs.value.forEach((el) => {
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(8px)";
      observer.observe(el);
    }
  });
};

onMounted(() => {
  // Initial animation for hero and filter
  setTimeout(() => {
    if (heroRef.value) {
      heroRef.value.classList.add("fade-in-up");
    }
    if (filterRef.value) {
      filterRef.value.classList.add("fade-in-up");
    }
  }, 100);

  // Initial project animation
  setTimeout(() => {
    animateProjects();
  }, 300);
});
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

@keyframes float-line {
  0%,
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
  50% {
    transform: translateY(100%);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Utility Classes */
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

.animate-float-line {
  animation: float-line linear infinite;
}

.fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.text-gradient {
  background: linear-gradient(to right, #00e1ff, #1bd4c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
