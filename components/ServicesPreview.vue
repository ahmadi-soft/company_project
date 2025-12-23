<template>
  <section class="relative py-20 md:py-32 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-[#0f1729]">
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
      <div class="absolute -top-40 -right-40 w-96 h-96">
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full opacity-5 blur-3xl animate-pulse-slow"
        ></div>
      </div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96">
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] rounded-full opacity-5 blur-3xl animate-pulse-slow"
          style="animation-delay: 2s"
        ></div>
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header Section -->
      <div class="text-center max-w-4xl mx-auto mb-16 md:mb-24">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 border border-[#334155] hover:border-[#00e1ff]/30 transition-all duration-300 mb-6 group/badge"
        >
          <!-- Animated sparkles -->
          <div class="relative">
            <div
              class="w-2 h-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-pulse"
            ></div>
            <div
              class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full blur opacity-30"
            ></div>
          </div>
          <span class="text-sm font-medium text-white tracking-wider"
            >Our Expertise</span
          >
          <div class="relative">
            <div
              class="w-2 h-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-pulse"
              style="animation-delay: 0.5s"
            ></div>
            <div
              class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full blur opacity-30"
            ></div>
          </div>
        </div>

        <!-- Main Heading -->
        <h2
          class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span class="text-white">Full-Stack</span>
          <span class="block">
            <span
              class="bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            >
              Development
            </span>
            <span class="text-white">Services</span>
          </span>
        </h2>

        <!-- Description -->
        <p
          class="text-lg md:text-xl text-[#cbd5e1] max-w-3xl mx-auto leading-relaxed"
        >
          From backend infrastructure to pixel-perfect frontends, we deliver
          <span class="text-[#00e1ff] font-medium">end-to-end solutions</span>
          tailored to your specific needs and business goals.
        </p>

        <!-- Animated underline -->
        <div class="relative inline-block mt-8">
          <div
            class="w-24 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full mx-auto"
          ></div>
          <div
            class="absolute -inset-x-12 -bottom-1 h-1 bg-gradient-to-r from-transparent via-[#00e1ff] to-transparent blur-sm"
          ></div>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="group/service relative"
          :style="{ '--delay': `${index * 100}ms` }"
        >
          <!-- Card Container -->
          <div class="relative h-full">
            <!-- Outer glow on hover -->
            <div
              class="absolute -inset-0.5 bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] rounded-2xl opacity-0 group-hover/service:opacity-30 blur transition-opacity duration-500 animate-gradient-border -z-10"
            ></div>

            <!-- Main Card -->
            <div
              class="relative h-full rounded-2xl bg-[#111827] border border-[#334155] group-hover/service:border-[#00e1ff]/30 overflow-hidden transition-all duration-500 transform group-hover/service:-translate-y-2"
            >
              <!-- Shimmer effect -->
              <div class="absolute inset-0 overflow-hidden">
                <div
                  class="absolute -inset-y-full -left-32 w-32 bg-white/5 skew-x-12 group-hover/service:left-full transition-all duration-1000"
                ></div>
              </div>

              <!-- Icon Section -->
              <div class="p-8">
                <!-- Icon Container -->
                <div class="relative inline-block mb-6">
                  <!-- Animated background -->
                  <div
                    class="absolute -ins-2 rounded-xl bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] opacity-20 blur group-hover/service:opacity-40 transition-opacity duration-500"
                  ></div>

                  <!-- Icon Circle -->
                  <div
                    class="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#00e1ff]/10 to-[#1bd4c1]/10 border border-[#334155] group-hover/service:border-[#00e1ff]/50 flex items-center justify-center transition-all duration-300 group-hover/service:scale-110"
                  >
                    <!-- Animated icon -->
                    <div class="relative">
                      <!-- SVG Icon -->
                      <svg
                        class="w-8 h-8"
                        :class="
                          service.color === 'primary'
                            ? 'text-[#00e1ff]'
                            : 'text-[#1bd4c1]'
                        "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <component :is="getIconComponent(service.icon)" />
                      </svg>

                      <!-- Pulsing dot -->
                      <div
                        class="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                        :class="
                          service.color === 'primary'
                            ? 'bg-[#00e1ff]'
                            : 'bg-[#1bd4c1]'
                        "
                      >
                        <div
                          class="absolute inset-0 rounded-full animate-ping"
                          :class="
                            service.color === 'primary'
                              ? 'bg-[#00e1ff]'
                              : 'bg-[#1bd4c1]'
                          "
                          style="animation-delay: calc(var(--delay) + 200ms)"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Content -->
                <div class="space-y-4">
                  <!-- Title -->
                  <h3
                    class="text-2xl font-bold text-white group-hover/service:text-transparent group-hover/service:bg-gradient-to-r group-hover/service:from-[#00e1ff] group-hover/service:via-[#1bd4c1] group-hover/service:to-[#00e1ff] group-hover/service:bg-clip-text transition-all duration-500"
                  >
                    {{ service.title }}
                  </h3>

                  <!-- Description -->
                  <p class="text-[#94a3b8] leading-relaxed">
                    {{ service.description }}
                  </p>

                  <!-- Tech Tags -->
                  <div class="flex flex-wrap gap-2 pt-4">
                    <span
                      v-for="tag in service.tags"
                      :key="tag"
                      class="px-3 py-1.5 text-sm rounded-lg bg-[#1e293b] border border-[#334155] text-[#cbd5e1] group-hover/service:text-white group-hover/service:border-[#00e1ff]/30 transition-all duration-300"
                    >
                      {{ tag }}
                    </span>
                  </div>

                  <!-- Hover Arrow -->
                  <div class="pt-6">
                    <div
                      class="inline-flex items-center gap-2 text-sm font-medium text-[#64748b] group-hover/service:text-[#00e1ff] transition-colors duration-300"
                    >
                      <span>Learn more</span>
                      <svg
                        class="w-4 h-4 group-hover/service:translate-x-1 transition-transform duration-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Bottom gradient bar -->
              <div
                class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] transform scale-x-0 group-hover/service:scale-x-100 transition-transform duration-500 origin-left"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16 md:mt-24">
        <!-- Connecting line -->
        <div class="relative mb-12">
          <div
            class="absolute left-1/2 top-0 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-transparent via-[#00e1ff] to-transparent"
          ></div>
        </div>

        <NuxtLink
          to="/services"
          class="group/cta inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 relative overflow-hidden"
        >
          <!-- Gradient background -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-[#111827] to-[#111827] rounded-xl"
          ></div>

          <!-- Hover gradient overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-[#00e1ff]/10 via-[#1bd4c1]/10 to-[#00e1ff]/10 opacity-0 group-hover/cta:opacity-100 rounded-xl transition-opacity duration-500"
          ></div>

          <!-- Animated border -->
          <div
            class="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] opacity-0 group-hover/cta:opacity-100 blur transition-opacity duration-500 animate-gradient-border"
          ></div>

          <!-- Content -->
          <span class="relative z-10 text-white flex items-center gap-3">
            Explore All Services
            <!-- Animated arrow -->
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
          </span>

          <!-- Floating particles on hover -->
          <div
            class="absolute inset-0 overflow-hidden opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"
          >
            <div
              v-for="i in 8"
              :key="i"
              class="absolute w-1 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-particle"
              :style="{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: `${Math.random() * 2 + 1}s`,
              }"
            ></div>
          </div>
        </NuxtLink>
      </div>

      <!-- Tech Stack Overview -->
      <div class="mt-20 pt-12 border-t border-[#334155]/30">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-white mb-2">
              Our Technology Stack
            </h3>
            <p class="text-[#94a3b8]">
              Built with cutting-edge technologies for optimal performance
            </p>
          </div>

          <div class="flex flex-wrap justify-center gap-4">
            <div
              v-for="tech in techStack"
              :key="tech.name"
              class="group/tech flex items-center gap-3 px-4 py-3 rounded-xl bg-[#111827] border border-[#334155] hover:border-[#00e1ff]/30 transition-all duration-300"
            >
              <div class="relative">
                <div class="w-6 h-6" :class="tech.iconColor">
                  <!-- Tech icons would go here -->
                </div>
              </div>
              <span class="text-white font-medium">{{ tech.name }}</span>
              <div class="w-2 h-2 rounded-full" :class="tech.dotColor"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Services data
const services = [
  {
    icon: "Server",
    title: "Backend Development",
    description:
      "Robust APIs, scalable databases, and cloud infrastructure that powers your applications with high performance and reliability.",
    tags: ["Node.js", "Python", "AWS", "PostgreSQL", "GraphQL", "Docker"],
    color: "primary",
  },
  {
    icon: "Monitor",
    title: "Frontend Development",
    description:
      "Beautiful, responsive interfaces built with modern frameworks and best practices for exceptional user experiences.",
    tags: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "Nuxt"],
    color: "secondary",
  },
  {
    icon: "Smartphone",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android platforms.",
    tags: ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android"],
    color: "primary",
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with functionality to create intuitive and engaging digital products.",
    tags: [
      "Figma",
      "Prototyping",
      "User Research",
      "Design Systems",
      "Wireframing",
    ],
    color: "secondary",
  },
];

// Tech stack data
const techStack = [
  { name: "React", iconColor: "text-[#61DAFB]", dotColor: "bg-[#61DAFB]" },
  { name: "Vue.js", iconColor: "text-[#4FC08D]", dotColor: "bg-[#4FC08D]" },
  { name: "Node.js", iconColor: "text-[#339933]", dotColor: "bg-[#339933]" },
  { name: "Python", iconColor: "text-[#3776AB]", dotColor: "bg-[#3776AB]" },
  { name: "TypeScript", iconColor: "text-[#3178C6]", dotColor: "bg-[#3178C6]" },
  { name: "AWS", iconColor: "text-[#FF9900]", dotColor: "bg-[#FF9900]" },
  { name: "Docker", iconColor: "text-[#2496ED]", dotColor: "bg-[#2496ED]" },
  { name: "PostgreSQL", iconColor: "text-[#336791]", dotColor: "bg-[#336791]" },
];

// SVG Icon components
const getIconComponent = (iconName) => {
  const icons = {
    Server: () => `
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8z" />
      <path d="M20 9H4" />
      <path d="M12 9v8" />
      <path d="M8 13h8" />
    `,
    Monitor: () => `
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    `,
    Smartphone: () => `
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h0" />
      <path d="M9 6h6" />
    `,
    Palette: () => `
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    `,
  };
  return icons[iconName] || icons.Server;
};
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

@keyframes gradient-border {
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
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
  50% {
    transform: translate(var(--tx, 10px), var(--ty, -10px)) scale(1.2);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.05;
  }
  50% {
    opacity: 0.1;
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

.animate-particle {
  animation: particle linear infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* Custom scrollbar */
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
