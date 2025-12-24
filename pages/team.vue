<template>
  <div class="min-h-screen bg-[#0f1729]">
    <!-- Hero Section with Parallax -->
    <section class="relative min-h-[90vh] flex items-center overflow-hidden">
      <!-- Parallax Background Layers -->
      <div class="absolute inset-0">
        <!-- Base Grid -->
        <div
          class="absolute inset-0"
          :style="{
            backgroundImage: `
              linear-gradient(90deg, #00e1ff12 1px, transparent 1px),
              linear-gradient(0deg, #1bd4c112 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            opacity: 0.3,
          }"
        ></div>

        <!-- Animated Gradient Mesh -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-[#00e1ff]/5 via-transparent to-[#1bd4c1]/5"
        ></div>

        <!-- Floating Orbs -->
        <div
          v-for="i in 3"
          :key="`orb-${i}`"
          class="absolute rounded-full animate-orb"
          :class="[
            'w-[500px] h-[500px]',
            i === 1
              ? 'top-1/4 -left-40 bg-gradient-to-r from-[#00e1ff]/10 to-transparent'
              : i === 2
              ? 'bottom-1/4 -right-40 bg-gradient-to-l from-[#1bd4c1]/10 to-transparent'
              : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#00e1ff]/5 to-[#1bd4c1]/5',
          ]"
          :style="{ animationDelay: `${i * 2}s` }"
        ></div>

        <!-- Binary Rain Effect -->
        <div class="absolute inset-0 overflow-hidden opacity-20">
          <div
            v-for="i in 20"
            :key="`binary-${i}`"
            class="absolute text-[#00e1ff] font-mono text-sm animate-binary-rain"
            :style="{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }"
          >
            {{ Math.random() > 0.5 ? "1" : "0" }}
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="container mx-auto px-4 relative z-20">
        <div class="max-w-6xl mx-auto">
          <!-- Animated Badge -->
          <div
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#111827] to-[#111827]/90 border border-[#334155]/50 backdrop-blur-sm mb-8 group/badge hover:border-[#00e1ff]/30 transition-all duration-500"
          >
            <!-- Pulsing Dot -->
            <div class="relative">
              <div
                class="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1]"
              ></div>
              <div
                class="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] blur opacity-50 animate-ping"
              ></div>
            </div>
            <span
              class="text-sm font-medium text-white tracking-[0.2em] uppercase"
              >Our Collective Genius</span
            >
            <Icon
              name="uil:arrow-right"
              class="w-4 h-4 text-[#00e1ff] group-hover/badge:translate-x-1 transition-transform duration-300"
            />
          </div>

          <!-- Main Headline -->
          <h1
            class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.9]"
          >
            <span class="text-white block">Meet The</span>
            <span class="relative">
              <!-- Gradient Text with Animation -->
              <span
                class="bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              >
                Masterminds
              </span>
              <!-- Animated Underline -->
              <span class="absolute -bottom-4 left-0 w-full h-1">
                <span
                  class="absolute left-0 w-1/2 h-full bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] animate-slide-right"
                ></span>
                <span
                  class="absolute right-0 w-1/2 h-full bg-gradient-to-l from-[#1bd4c1] to-[#00e1ff] animate-slide-left"
                ></span>
              </span>
            </span>
            <span class="text-white block mt-8">Behind AFTECH</span>
          </h1>

          <!-- Description -->
          <p
            class="text-xl md:text-2xl text-[#cbd5e1] max-w-3xl mt-12 leading-relaxed font-light"
          >
            A symphony of
            <span class="text-[#00e1ff] font-medium">brilliant minds</span>,
            <span class="text-[#1bd4c1] font-medium">creative visionaries</span
            >, and <span class="font-medium">technical virtuosos</span> crafting
            digital experiences that redefine possibilities.
          </p>

          <!-- Interactive Stats -->
          <div
            class="flex flex-wrap gap-8 mt-16 pt-8 border-t border-[#334155]/30"
          >
            <div
              v-for="(stat, index) in teamStats"
              :key="stat.label"
              class="group/stat text-center"
              @mouseenter="hoveredStat = index"
              @mouseleave="hoveredStat = null"
            >
              <!-- Animated Counter -->
              <div class="text-4xl md:text-5xl font-bold mb-2">
                <span
                  class="bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] bg-clip-text text-transparent"
                >
                  {{ stat.value }}
                </span>
                <span class="text-[#00e1ff]">+</span>
              </div>
              <div class="relative inline-block">
                <div
                  class="text-sm text-[#94a3b8] uppercase tracking-wider font-medium transition-all duration-300 group-hover/stat:text-white"
                >
                  {{ stat.label }}
                </div>
                <!-- Animated underline -->
                <div
                  class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] group-hover/stat:w-full transition-all duration-500"
                ></div>
              </div>
            </div>
          </div>

          <!-- Scroll Indicator -->
          <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <div class="flex flex-col items-center gap-2">
              <span class="text-xs text-[#64748b] uppercase tracking-widest"
                >Explore Team</span
              >
              <div class="relative w-6 h-10">
                <div
                  class="absolute inset-0 rounded-full border border-[#334155]"
                ></div>
                <div
                  class="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gradient-to-b from-[#00e1ff] to-[#1bd4c1] rounded-full animate-scroll"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Grid with 3D Effect -->
    <section class="relative py-24 md:py-32 overflow-hidden">
      <!-- Background Pattern -->
      <div
        class="absolute inset-0"
        :style="{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(0, 225, 255, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 70% 80%, rgba(27, 212, 193, 0.1) 0%, transparent 50%)`,
          opacity: 0.5,
        }"
      ></div>

      <div class="container mx-auto px-4 relative z-10">
        <!-- Interactive Filter -->
        <div class="flex flex-wrap items-center justify-center gap-3 mb-16">
          <button
            v-for="filter in filters"
            :key="filter.id"
            @click="activeFilter = filter.id"
            :class="[
              'group/filter relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300 overflow-hidden',
              activeFilter === filter.id
                ? 'bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] text-[#0f1729] font-semibold shadow-lg shadow-[#00e1ff]/20'
                : 'bg-[#111827] border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#00e1ff]/30',
            ]"
          >
            <!-- Shimmer Effect -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/filter:translate-x-[100%] transition-transform duration-1000"
            ></div>
            <span class="relative z-10">{{ filter.label }}</span>
          </button>
        </div>

        <!-- Team Grid with Parallax Cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in filteredTeam"
            :key="member.id"
            class="group/card relative"
            @mousemove="handleCardMove($event, member.id)"
            @mouseleave="resetCard(member.id)"
          >
            <!-- Card Container -->
            <div
              :ref="(el) => setCardRef(el, member.id)"
              class="relative h-full rounded-3xl overflow-hidden transition-all duration-500"
              :style="{
                transform: getCardTransform(member.id),
              }"
            >
              <!-- Glow Border -->
              <div
                class="absolute -inset-0.5 bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] rounded-3xl opacity-0 group-hover/card:opacity-100 blur transition-opacity duration-500 animate-gradient-border -z-10"
              ></div>

              <!-- Main Card -->
              <div
                class="relative h-full bg-[#111827] border border-[#334155] rounded-3xl overflow-hidden group-hover/card:border-[#00e1ff]/30 transition-all duration-500"
              >
                <!-- Image Container with Parallax -->
                <div class="relative h-64 overflow-hidden">
                  <!-- Image with Zoom -->
                  <img
                    :src="member.image"
                    :alt="member.name"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />

                  <!-- Gradient Overlay -->
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80"
                  ></div>

                  <!-- Role Badge with Animation -->
                  <div class="absolute top-4 left-4">
                    <div
                      class="px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm"
                      :class="getRoleColor(member.role)"
                    >
                      {{ member.role }}
                      <span class="ml-1 animate-pulse">●</span>
                    </div>
                  </div>

                  <!-- Social Links Hover Reveal -->
                  <div
                    class="absolute bottom-4 left-4 right-4 flex gap-2 transform translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500"
                  >
                    <a
                      v-for="(link, platform) in member.social"
                      :key="platform"
                      :href="link"
                      class="group/social relative w-10 h-10 rounded-xl bg-[#111827]/90 backdrop-blur-sm border border-[#334155] hover:border-[#00e1ff] flex items-center justify-center transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon
                        :name="getSocialIcon(platform)"
                        class="w-5 h-5 text-[#94a3b8] group-hover/social:text-white transition-colors duration-300"
                      />
                    </a>
                  </div>
                </div>

                <!-- Content Section -->
                <div class="p-6">
                  <!-- Name with Gradient Hover -->
                  <h3 class="text-2xl font-bold mb-3">
                    <span
                      class="text-white group-hover/card:text-transparent group-hover/card:bg-gradient-to-r group-hover/card:from-[#00e1ff] group-hover/card:via-[#1bd4c1] group-hover/card:to-[#00e1ff] group-hover/card:bg-clip-text transition-all duration-500"
                    >
                      {{ member.name }}
                    </span>
                  </h3>

                  <!-- Bio -->
                  <p
                    class="text-[#94a3b8] text-sm leading-relaxed mb-4 line-clamp-2"
                  >
                    {{ member.bio }}
                  </p>

                  <!-- Skills with Animated Tags -->
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span
                      v-for="skill in member.skills"
                      :key="skill"
                      class="group/tag inline-block px-3 py-1.5 text-xs rounded-lg bg-[#1e293b] border border-[#334155] text-[#cbd5e1] hover:text-white hover:border-[#00e1ff]/30 transition-all duration-300"
                    >
                      {{ skill }}
                      <span
                        class="inline-block w-0 group-hover/tag:w-2 transition-all duration-300"
                        >→</span
                      >
                    </span>
                  </div>

                  <!-- Stats Bar -->
                  <div class="pt-4 border-t border-[#334155]">
                    <div class="grid grid-cols-2 gap-4 text-xs">
                      <div class="text-center">
                        <div class="text-white font-semibold">
                          {{ member.experience }}
                        </div>
                        <div class="text-[#94a3b8]">Experience</div>
                      </div>
                      <div class="text-center">
                        <div class="text-white font-semibold">
                          {{ member.projects }}+
                        </div>
                        <div class="text-[#94a3b8]">Projects</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Bottom Progress Bar -->
                <div
                  class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700 origin-left"
                ></div>
              </div>

              <!-- Floating Code Elements -->
              <div
                class="absolute inset-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
              >
                <div
                  v-for="i in 3"
                  :key="`code-${member.id}-${i}`"
                  class="absolute text-[#00e1ff]/20 font-mono text-xs"
                  :style="{
                    left: `${10 + i * 25}%`,
                    top: `${20 + i * 10}%`,
                    animation: `float-code ${3 + i}s ease-in-out infinite`,
                  }"
                >
                  {{ i % 2 === 0 ? "{ }" : "< />" }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- View All Button -->
        <div class="text-center mt-16">
          <button
            @click="loadMore"
            class="group/view-more inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111827] border border-[#334155] hover:border-[#00e1ff]/30 text-white font-medium transition-all duration-300"
          >
            View All Team Members
            <Icon
              name="uil:arrow-right"
              class="w-4 h-4 group-hover/view-more:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>

    <!-- Tech Stack Interactive Visualization -->
    <section class="relative py-24 md:py-32 overflow-hidden">
      <!-- Animated Background -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-[#00e1ff]/5 via-transparent to-[#1bd4c1]/5"
      ></div>

      <!-- Moving Particles -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          v-for="i in 15"
          :key="`particle-${i}`"
          class="absolute w-1 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-particle"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }"
        ></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="text-center max-w-4xl mx-auto mb-16">
          <div
            class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#111827]/50 backdrop-blur-sm border border-[#334155]/50 mb-6"
          >
            <div class="relative">
              <div
                class="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] animate-pulse"
              ></div>
            </div>
            <span
              class="text-sm font-medium text-white tracking-[0.2em] uppercase"
              >Our Tech Arsenal</span
            >
          </div>

          <h2 class="text-5xl md:text-6xl font-bold mb-6">
            <span class="text-white">Mastering The</span>
            <span class="block">
              <span
                class="bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              >
                Digital Frontier
              </span>
            </span>
          </h2>

          <p class="text-lg text-[#cbd5e1] max-w-2xl mx-auto">
            Cutting-edge technologies powering our innovative solutions and
            driving digital transformation.
          </p>
        </div>

        <!-- Interactive Tech Cloud -->
        <div class="relative h-[400px] md:h-[500px] mb-16">
          <div
            v-for="(tech, index) in techCloud"
            :key="tech.name"
            class="absolute tech-tag group/tech"
            :style="getTechTagStyle(index)"
            @mouseenter="hoveredTech = tech.name"
            @mouseleave="hoveredTech = null"
          >
            <div
              class="relative px-4 py-2 rounded-xl backdrop-blur-sm transition-all duration-300"
              :class="[
                'border',
                hoveredTech === tech.name
                  ? 'border-[#00e1ff] bg-[#00e1ff]/10 scale-110'
                  : 'border-[#334155] bg-[#111827]/50',
              ]"
            >
              <span class="text-white font-medium">{{ tech.name }}</span>
              <div
                class="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] opacity-0 group-hover/tech:opacity-20 blur transition-opacity duration-300 -z-10"
              ></div>
            </div>
          </div>
        </div>

        <!-- Tech Categories -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="category in techCategories"
            :key="category.name"
            class="group/category"
          >
            <div
              class="relative h-full rounded-2xl bg-gradient-to-br from-[#111827] to-[#1e293b] border border-[#334155] p-6 transition-all duration-300 hover:border-[#00e1ff]/30"
            >
              <!-- Category Header -->
              <div class="flex items-center gap-3 mb-6">
                <div
                  class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00e1ff]/10 to-[#1bd4c1]/10 flex items-center justify-center"
                >
                  <Icon name="uil:arrow-right" class="w-6 h-6 text-[#00e1ff]" />
                </div>
                <h3 class="text-xl font-bold text-white">
                  {{ category.name }}
                </h3>
              </div>

              <!-- Tech List -->
              <div class="space-y-3">
                <div
                  v-for="tech in category.items"
                  :key="tech"
                  class="group/item flex items-center justify-between p-3 rounded-lg bg-[#1e293b] hover:bg-[#00e1ff]/5 transition-all duration-300"
                >
                  <span class="text-[#cbd5e1] group-hover/item:text-white">{{
                    tech
                  }}</span>
                  <div class="flex items-center gap-2">
                    <div
                      class="w-2 h-2 rounded-full bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] animate-pulse"
                    ></div>
                    <Icon
                      name="uil:arrow-right"
                      class="w-4 h-4 text-[#94a3b8] group-hover/item:text-[#00e1ff] transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>

              <!-- Bottom Gradient -->
              <div
                class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] transform scale-x-0 group-hover/category:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Careers CTA with Parallax -->
    <section class="relative min-h-[80vh] flex items-center overflow-hidden">
      <!-- Parallax Background -->
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-gradient-to-br from-[#00e1ff]/10 via-transparent to-[#1bd4c1]/10"
        ></div>
        <div
          v-for="i in 5"
          :key="`cta-orb-${i}`"
          class="absolute rounded-full bg-gradient-to-r from-[#00e1ff]/5 to-[#1bd4c1]/5 animate-float"
          :class="[
            'w-[300px] h-[300px]',
            i === 1
              ? 'top-1/4 left-1/4'
              : i === 2
              ? 'bottom-1/4 right-1/4'
              : i === 3
              ? 'top-1/3 right-1/3'
              : i === 4
              ? 'bottom-1/3 left-1/3'
              : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          ]"
          :style="{ animationDelay: `${i * 3}s` }"
        ></div>
      </div>

      <div class="container mx-auto px-4 relative z-20">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Animated Badge -->
          <div
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#111827] to-[#111827]/90 border border-[#334155]/50 backdrop-blur-sm mb-8 group/cta-badge hover:border-[#00e1ff]/30 transition-all duration-500"
          >
            <div class="relative">
              <div
                class="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1]"
              ></div>
              <div
                class="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] blur opacity-50 animate-ping"
              ></div>
            </div>
            <span
              class="text-sm font-medium text-white tracking-[0.2em] uppercase"
              >Join The Revolution</span
            >
            <Icon
              name="uil:arrow-right"
              class="w-4 h-4 text-[#00e1ff] group-hover/cta-badge:translate-x-1 transition-transform duration-300"
            />
          </div>

          <!-- Main Headline -->
          <h2
            class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.9]"
          >
            <span class="text-white">Ready To Write</span>
            <span class="block">
              <span
                class="bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              >
                History
              </span>
            </span>
            <span class="text-white block mt-4">Together?</span>
          </h2>

          <!-- Description -->
          <p
            class="text-xl md:text-2xl text-[#cbd5e1] max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Join a team where innovation meets passion, and together we'll build
            the future of digital experiences.
          </p>

          <!-- Animated CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <!-- Primary CTA -->
            <NuxtLink
              to="/contact"
              class="group/primary relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 overflow-hidden"
            >
              <!-- Background Layers -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1]"
              ></div>
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] opacity-0 group-hover/primary:opacity-100 transition-opacity duration-500"
              ></div>

              <!-- Shimmer Effect -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/primary:translate-x-[100%] transition-transform duration-1000"
              ></div>

              <!-- Content -->
              <div
                class="relative z-10 flex items-center justify-center gap-3 text-[#0f1729]"
              >
                <Icon name="uil:envelope" class="w-5 h-5" />
                <span>Start Your Journey</span>
                <Icon
                  name="uil:arrow-right"
                  class="w-5 h-5 group-hover/primary:translate-x-2 transition-transform duration-300"
                />
              </div>

              <!-- Glow Effect -->
              <div
                class="absolute -inset-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-xl blur opacity-0 group-hover/primary:opacity-30 transition-opacity duration-500 -z-10"
              ></div>
            </NuxtLink>

            <!-- Secondary CTA -->
            <NuxtLink
              to="/projects"
              class="group/secondary relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500"
            >
              <!-- Glass Background -->
              <div
                class="absolute inset-0 bg-[#111827]/80 backdrop-blur-sm border border-[#334155] rounded-xl group-hover/secondary:border-[#1bd4c1]/30 transition-all duration-300"
              ></div>

              <!-- Content -->
              <div
                class="relative z-10 flex items-center justify-center gap-3 text-white"
              >
                Explore Our Work
                <Icon
                  name="uil:arrow-right"
                  class="w-5 h-5 group-hover/secondary:translate-x-1 transition-transform duration-300"
                />
              </div>

              <!-- Gradient Border -->
              <div
                class="absolute -inset-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-xl opacity-0 group-hover/secondary:opacity-30 blur transition-opacity duration-300 -z-10"
              ></div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// Team stats
const teamStats = [
  { value: "25", label: "Expert Engineers" },
  { value: "15", label: "Avg. Years Experience" },
  { value: "98", label: "Client Satisfaction Rate" },
  { value: "150", label: "Projects Delivered" },
];

// Filters
const filters = [
  { id: "all", label: "All Stars" },
  { id: "leadership", label: "Visionaries" },
  { id: "development", label: "Code Wizards" },
  { id: "design", label: "Design Gurus" },
  { id: "devops", label: "Infra Ninjas" },
];

const activeFilter = ref("all");
const hoveredStat = ref(null);
const hoveredTech = ref(null);

// 3D Card Effects
const cardTransforms = ref({});
const cardRefs = ref({});

const setCardRef = (el, id) => {
  if (el) {
    cardRefs.value[id] = el;
  }
};

const handleCardMove = (event, id) => {
  const card = cardRefs.value[id];
  if (!card) return;

  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateY = ((x - centerX) / centerX) * 3;
  const rotateX = ((centerY - y) / centerY) * 3;

  cardTransforms.value[
    id
  ] = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
};

const resetCard = (id) => {
  cardTransforms.value[id] =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
};

const getCardTransform = (id) => {
  return (
    cardTransforms.value[id] ||
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
};

// Team data
const team = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    bio: "Serial entrepreneur with 15+ years in tech. Built three successful startups before founding AFTECH. Passionate about AI and quantum computing.",
    skills: ["Strategic Vision", "AI/ML", "Quantum Computing", "Leadership"],
    experience: "15+ Years",
    projects: 45,
    department: "leadership",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 2,
    name: "Sarah Martinez",
    role: "Lead Frontend Architect",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80",
    bio: "Award-winning UI engineer with expertise in React ecosystem. Speaker at major tech conferences. Passionate about accessibility and performance.",
    skills: ["React", "TypeScript", "WebGL", "Design Systems"],
    experience: "8+ Years",
    projects: 32,
    department: "development",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Backend Systems Architect",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
    bio: "Built scalable systems handling millions of requests daily. Expert in distributed systems and real-time data processing.",
    skills: ["Distributed Systems", "Go", "Kafka", "Microservices"],
    experience: "12+ Years",
    projects: 38,
    department: "development",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 4,
    name: "Emily Zhang",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=80",
    bio: "Former Apple designer bringing minimalist aesthetics to complex interfaces. Advocate for human-centered design.",
    skills: ["UI/UX", "Motion Design", "Brand Strategy", "Design Thinking"],
    experience: "10+ Years",
    projects: 28,
    department: "design",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      dribbble: "https://dribbble.com",
    },
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "Mobile Lead",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=80",
    bio: "Created apps with millions of downloads. Expert in native iOS/Android development and cross-platform solutions.",
    skills: ["Swift", "Kotlin", "React Native", "AR/VR"],
    experience: "9+ Years",
    projects: 24,
    department: "development",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 6,
    name: "Lisa Park",
    role: "DevOps Principal",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
    bio: "Built and scaled infrastructure for Fortune 500 companies. Passionate about security, automation, and SRE practices.",
    skills: ["Kubernetes", "Terraform", "Security", "SRE"],
    experience: "11+ Years",
    projects: 41,
    department: "devops",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

// Filtered team
const filteredTeam = computed(() => {
  if (activeFilter.value === "all") return team;
  return team.filter((member) => member.department === activeFilter.value);
});

// Tech Cloud
const techCloud = [
  { name: "React", level: 1 },
  { name: "Vue.js", level: 2 },
  { name: "TypeScript", level: 1 },
  { name: "Node.js", level: 1 },
  { name: "Python", level: 1 },
  { name: "Go", level: 2 },
  { name: "AWS", level: 1 },
  { name: "Kubernetes", level: 2 },
  { name: "Docker", level: 1 },
  { name: "GraphQL", level: 2 },
  { name: "PostgreSQL", level: 1 },
  { name: "MongoDB", level: 2 },
  { name: "Redis", level: 2 },
  { name: "Next.js", level: 1 },
  { name: "Nuxt", level: 2 },
  { name: "Tailwind", level: 1 },
  { name: "Figma", level: 1 },
  { name: "Swift", level: 2 },
  { name: "Kotlin", level: 2 },
  { name: "TensorFlow", level: 3 },
];

// Tech Categories
const techCategories = [
  {
    name: "Frontend Excellence",
    items: [
      "React",
      "Vue.js",
      "TypeScript",
      "Next.js",
      "Nuxt",
      "Tailwind CSS",
      "WebGL",
      "Three.js",
    ],
  },
  {
    name: "Backend Power",
    items: [
      "Node.js",
      "Python",
      "Go",
      "GraphQL",
      "Microservices",
      "Serverless",
      "Real-time Systems",
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      "AWS",
      "GCP",
      "Kubernetes",
      "Docker",
      "Terraform",
      "CI/CD",
      "Monitoring",
      "Security",
    ],
  },
  {
    name: "Mobile & Emerging",
    items: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "AR/VR",
      "IoT",
      "Blockchain",
    ],
  },
  {
    name: "Data & AI",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "TensorFlow",
      "PyTorch",
      "MLOps",
    ],
  },
  {
    name: "Design & Tools",
    items: [
      "Figma",
      "Adobe Creative Suite",
      "Motion Design",
      "Prototyping",
      "Design Systems",
    ],
  },
];

// Helper functions
const getRoleColor = (role) => {
  const colors = {
    "Founder & CEO":
      "bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] text-[#0f1729]",
    "Lead Frontend Architect":
      "bg-gradient-to-r from-[#00e1ff]/20 to-[#00e1ff]/40 text-white border border-[#00e1ff]/30",
    "Backend Systems Architect":
      "bg-gradient-to-r from-[#1bd4c1]/20 to-[#1bd4c1]/40 text-white border border-[#1bd4c1]/30",
    "Creative Director":
      "bg-gradient-to-r from-[#00e1ff]/20 to-[#1bd4c1]/40 text-white border border-[#334155]",
    "Mobile Lead":
      "bg-gradient-to-r from-[#00e1ff]/20 to-[#00e1ff]/40 text-white border border-[#00e1ff]/30",
    "DevOps Principal":
      "bg-gradient-to-r from-[#1bd4c1]/20 to-[#1bd4c1]/40 text-white border border-[#1bd4c1]/30",
  };
  return colors[role] || "bg-[#334155] text-white border border-[#334155]";
};

const getSocialIcon = (platform) => {
  const icons = {
    github: "uil:github",
    linkedin: "uil:linkedin",
    twitter: "uil:twitter",
    dribbble: "uil:dribbble",
  };
  return icons[platform] || "uil:link";
};

const getTechTagStyle = (index) => {
  const angle = (index / techCloud.length) * Math.PI * 2;
  const radius = 150 + techCloud[index].level * 30;
  const x = Math.cos(angle) * radius + 200;
  const y = Math.sin(angle) * radius + 200;

  return {
    left: `${x}px`,
    top: `${y}px`,
    transform: `scale(${0.8 + techCloud[index].level * 0.2})`,
  };
};

// Methods
const loadMore = () => {
  // In a real app, this would load more team members
  console.log("Loading more team members...");
};

// Initialize card transforms
onMounted(() => {
  team.forEach((member) => {
    resetCard(member.id);
  });
});
</script>

<style>
/* Advanced Animations */
@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes gradient-border {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes orb {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.1;
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
    opacity: 0.15;
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
    opacity: 0.05;
  }
}

@keyframes binary-rain {
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes particle {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
  50% {
    transform: translate(100px, -100px);
  }
}

@keyframes slide-right {
  0%,
  100% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
}

@keyframes slide-left {
  0%,
  100% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(-100%);
  }
}

@keyframes scroll {
  0% {
    transform: translate(-50%, 0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 30px);
    opacity: 0;
  }
}

@keyframes float-code {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(5deg);
  }
  66% {
    transform: translateY(5px) rotate(-5deg);
  }
}

/* Utility Classes */
.animate-gradient {
  animation: gradient 3s ease infinite;
  background-size: 200% auto;
}

.animate-gradient-border {
  animation: gradient-border 2s ease infinite;
  background-size: 300% 300%;
}

.animate-orb {
  animation: orb 15s ease-in-out infinite;
  filter: blur(40px);
}

.animate-binary-rain {
  animation: binary-rain linear infinite;
}

.animate-particle {
  animation: particle linear infinite;
}

.animate-slide-right {
  animation: slide-right 3s ease-in-out infinite;
}

.animate-slide-left {
  animation: slide-left 3s ease-in-out infinite;
}

.animate-scroll {
  animation: scroll 2s ease-in-out infinite;
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

/* Glass Effects */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Line clamp for bios */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Tech cloud positioning */
.tech-tag {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-tag:hover {
  z-index: 50;
}
</style>
