<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background Layers -->
    <div class="absolute inset-0 bg-[#0f1729]">
      <!-- Background Image -->
      <img
        src="~/assets/images/bg-1.jpeg"
        :alt="t('hero.alt.bg')"
        class="absolute inset-0 w-full h-full object-cover"
        :style="{
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        }"
      />

      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-[#00e1ff]/5 via-transparent to-[#1bd4c1]/5"
      ></div>

      <!-- Grid Pattern -->
      <div
        class="absolute inset-0"
        :style="{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 225, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(27, 212, 193, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage:
            'radial-gradient(circle at center, black 30%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, black 30%, transparent 70%)',
        }"
      ></div>

      <!-- Animated Particles - FIXED: Only render on client -->
      <ClientOnly>
        <div class="absolute inset-0 overflow-hidden">
          <div
            v-for="(particle, i) in particles"
            :key="i"
            class="absolute w-1 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-particle"
            :style="{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }"
          ></div>
        </div>
      </ClientOnly>
    </div>

    <!-- Animated Orbs -->
    <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px]">
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full opacity-10 blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute inset-10 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] rounded-full opacity-5 blur-2xl animate-spin-slow"
      ></div>
    </div>

    <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]">
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] rounded-full opacity-10 blur-3xl animate-pulse-slow"
        style="animation-delay: 1s"
      ></div>
    </div>

    <!-- Floating Code Elements -->
    <div class="absolute top-1/3 left-1/5">
      <div class="relative">
        <div
          class="w-24 h-24 bg-gradient-to-br from-[#00e1ff]/20 to-transparent rounded-lg border border-[#00e1ff]/30 backdrop-blur-sm animate-float"
        >
          <div class="absolute inset-2 flex items-center justify-center">
            <div class="text-[#00e1ff] font-mono text-sm">{ }</div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-1/3 right-1/5">
      <div class="relative">
        <div
          class="w-20 h-20 bg-gradient-to-bl from-[#1bd4c1]/20 to-transparent rounded-lg border border-[#1bd4c1]/30 backdrop-blur-sm animate-float"
          style="animation-delay: 1s"
        >
          <div class="absolute inset-2 flex items-center justify-center">
            <div class="text-[#1bd4c1] font-mono text-sm">< /></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 relative z-20">
      <div class="max-w-6xl mx-auto max-sm:mt-20">
        <!-- Tagline Badge -->
        <div class="flex justify-center mb-8">
          <div
            class="group relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-[#334155]/50 hover:border-[#00e1ff]/30 transition-all duration-300 overflow-hidden"
          >
            <!-- Animated border -->
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"
            ></div>

            <!-- Content -->
            <div class="relative flex items-center gap-2">
              <!-- Animated sparkle -->
              <div class="relative">
                <div
                  class="w-5 h-5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full"
                ></div>
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full blur opacity-50 animate-ping"
                ></div>
              </div>

              <span
                class="text-white font-medium text-sm tracking-wider uppercase"
                >{{ t("hero.tagline") }}</span
              >

              <!-- Arrow -->
              <svg
                class="w-4 h-4 text-[#00e1ff] group-hover:translate-x-1 transition-transform duration-300"
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

        <!-- Main Heading -->
        <div class="text-center mb-8">
          <h1
            class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
          >
            <span class="block text-white">{{ t("hero.title.we_build") }}</span>
            <span class="block relative">
              <!-- Gradient text with animation -->
              <span
                class="bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              >
                {{ t("hero.title.next_generation") }}
              </span>
              <span
                class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] rounded-full blur-sm"
              ></span>
            </span>
            <span class="block text-white mt-4">{{
              t("hero.title.software_solutions")
            }}</span>
          </h1>
        </div>

        <!-- Description -->
        <div class="max-w-3xl mx-auto mb-12">
          <p
            class="text-xl md:text-2xl text-center text-[#cbd5e1] leading-relaxed font-light"
          >
            {{
              t("hero.description", {
                concept: "",
                deployment: "",
                scalable: "",
              })
            }}
            <span class="text-[#00e1ff] font-medium">{{
              t("hero.description_keywords.concept")
            }}</span>
            {{ t("hero.to") }}
            <span class="text-[#1bd4c1] font-medium">{{
              t("hero.description_keywords.deployment")
            }}</span
            >{{ t("hero.transform") }}
            <span
              class="bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] bg-clip-text text-transparent font-medium"
              >{{ t("hero.description_keywords.scalable") }}</span
            >
            {{ t("hero.description_tail") }}
          </p>
        </div>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <!-- Primary Button -->
          <NuxtLink
            to="/projects"
            class="group/primary relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,225,255,0.3)]"
          >
            <!-- Background gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-xl"
            ></div>

            <!-- Hover gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] opacity-0 group-hover/primary:opacity-100 rounded-xl transition-opacity duration-300"
            ></div>

            <!-- Shine effect -->
            <div class="absolute inset-0 overflow-hidden rounded-xl">
              <div
                class="absolute -inset-y-full -left-24 w-24 bg-white/30 skew-x-12 group-hover/primary:left-full transition-all duration-1000"
              ></div>
            </div>

            <!-- Content -->
            <div
              class="relative z-10 flex items-center justify-center gap-3 text-[#0f1729]"
            >
              <span>{{ t("hero.cta.view_work") }}</span>
              <svg
                class="w-5 h-5 group-hover/primary:translate-x-2 transition-transform duration-300"
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

            <!-- Outer glow -->
            <div
              class="absolute -inset-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-xl blur opacity-0 group-hover/primary:opacity-30 transition-opacity duration-300 -z-10"
            ></div>
          </NuxtLink>

          <!-- Secondary Button -->
          <NuxtLink
            to="/contact"
            class="group/secondary relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
          >
            <!-- Glass background -->
            <div
              class="absolute inset-0 bg-[#111827]/80 backdrop-blur-sm border border-[#334155] rounded-xl group-hover/secondary:border-[#00e1ff]/30 transition-colors duration-300"
            ></div>

            <!-- Gradient border on hover -->
            <div
              class="absolute -inset-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-xl opacity-0 group-hover/secondary:opacity-30 blur transition-opacity duration-300 -z-10"
            ></div>

            <!-- Content -->
            <div
              class="relative z-10 flex items-center justify-center gap-3 text-white"
            >
              <!-- Play icon with pulse -->
              <div class="relative">
                <div
                  class="w-6 h-6 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded flex items-center justify-center"
                >
                  <svg
                    class="w-3 h-3 text-[#0f1729]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  class="absolute -inset-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full blur opacity-20 animate-ping"
                ></div>
              </div>
              <span>{{ t("hero.cta.book_call") }}</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Stats Section -->
        <div class="relative">
          <!-- Divider line -->
          <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#00e1ff] to-transparent blur-sm"
          ></div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-16">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="group/stat relative text-center"
              @mouseenter="hoveredStat = index"
              @mouseleave="hoveredStat = null"
            >
              <!-- Animated background -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-[#00e1ff]/10 to-[#1bd4c1]/10 rounded-2xl opacity-0 group-hover/stat:opacity-100 blur transition-opacity duration-300"
              ></div>

              <!-- Content -->
              <div class="relative z-10">
                <!-- Animated number -->
                <div class="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  <span
                    class="bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] bg-clip-text text-transparent"
                  >
                    {{ stat.value }}
                  </span>
                  <span class="text-[#00e1ff]">+</span>
                </div>

                <!-- Label with animation -->
                <div class="relative inline-block">
                  <div
                    class="text-[#94a3b8] text-sm md:text-base font-medium uppercase tracking-wider"
                  >
                    {{ t(stat.label) }}
                  </div>
                  <!-- Underline animation -->
                  <div
                    class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] group-hover/stat:w-full transition-all duration-500"
                  ></div>
                </div>
              </div>

              <!-- Floating particles on hover - FIXED: Only render on client -->
              <ClientOnly>
                <div
                  v-if="hoveredStat === index"
                  class="absolute inset-0 overflow-hidden pointer-events-none"
                >
                  <div
                    v-for="i in 5"
                    :key="i"
                    class="absolute w-1 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-particle"
                    :style="hoverParticleStyles[i - 1]"
                  ></div>
                </div>
              </ClientOnly>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div
            class="group/scroll flex flex-col items-center gap-2 cursor-pointer"
            @click="scrollToNext"
          >
            <span
              class="text-xs text-[#64748b] uppercase tracking-wider group-hover/scroll:text-[#94a3b8] transition-colors duration-300"
            >
              {{ t("hero.scroll_down") }}
            </span>
            <!-- Animated scroll line -->
            <div
              class="relative w-5 h-10 rounded-full border border-[#334155] group-hover/scroll:border-[#00e1ff] transition-colors duration-300"
            >
              <div
                class="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gradient-to-b from-[#00e1ff] to-[#1bd4c1] rounded-full animate-scroll"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const stats = [
  { value: "150", label: "hero.stats.projects" },
  { value: "50", label: "hero.stats.clients" },
  { value: "25", label: "hero.stats.team" },
  { value: "8", label: "hero.stats.experience" },
];

const hoveredStat = ref(null);
const particles = ref([]);
const hoverParticleStyles = ref([]);

// Generate particle positions on client side only
const generateParticles = () => {
  particles.value = Array.from({ length: 30 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));
};

// Generate deterministic hover particle styles
const generateHoverParticleStyles = () => {
  hoverParticleStyles.value = Array.from({ length: 5 }, (_, i) => {
    // Use consistent values based on index
    const base = i * 0.2;
    return {
      left: `${(Math.sin(base) * 0.5 + 0.5) * 100}%`,
      top: `${(Math.cos(base) * 0.5 + 0.5) * 100}%`,
      animationDelay: `${base * 0.5}s`,
      animationDuration: `${Math.abs(Math.sin(base)) * 1 + 0.5}s`,
    };
  });
};

const scrollToNext = () => {
  // Use nextTick to ensure DOM is ready
  setTimeout(() => {
    const nextSection = document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

// Initialize particles on client side
onMounted(() => {
  generateParticles();
  generateHoverParticleStyles();
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
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.15;
    transform: scale(1.05);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(3deg);
  }
  66% {
    transform: translateY(10px) rotate(-3deg);
  }
}

@keyframes scroll {
  0% {
    transform: translate(-50%, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 20px);
    opacity: 0;
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

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
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

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Ensure particles only show on supported browsers */
@supports not (backdrop-filter: blur(1px)) {
  .backdrop-blur-sm {
    backdrop-filter: none;
    background: rgba(17, 24, 39, 0.9);
  }
}
</style>
