<template>
  <section class="relative py-24 md:py-32 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-[#0f1729]">
      <!-- Main gradient orb -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full opacity-10 blur-3xl animate-pulse-slow"
        ></div>
      </div>

      <!-- Grid pattern -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute inset-0"
          :style="{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, #00e1ff22 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }"
        ></div>
      </div>

      <!-- Floating elements -->
      <div class="absolute top-1/4 left-1/4">
        <div
          class="w-32 h-32 bg-gradient-to-br from-[#00e1ff]/20 to-transparent rounded-full border border-[#00e1ff]/30 animate-float"
        ></div>
      </div>

      <div class="absolute bottom-1/4 right-1/4">
        <div
          class="w-24 h-24 bg-gradient-to-bl from-[#1bd4c1]/20 to-transparent rounded-full border border-[#1bd4c1]/30 animate-float"
          style="animation-delay: 1s"
        ></div>
      </div>

      <!-- Particle effect -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          v-for="i in 20"
          :key="i"
          class="absolute w-1 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-particle"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 2 + 2}s`,
          }"
        ></div>
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Animated Icon -->
        <div class="flex justify-center mb-10">
          <div class="relative group/icon">
            <!-- Outer ring -->
            <div
              class="absolute -inset-4 bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] rounded-full opacity-20 blur-lg group-hover/icon:opacity-30 transition-opacity duration-500 animate-spin-slow"
            ></div>

            <!-- Middle ring -->
            <div
              class="absolute -inset-2 bg-gradient-to-r from-[#1bd4c1] via-[#00e1ff] to-[#1bd4c1] rounded-full opacity-30 blur-md group-hover/icon:opacity-40 transition-opacity duration-500 animate-spin-slow-reverse"
            ></div>

            <!-- Main icon container -->
            <div
              class="relative w-24 h-24 rounded-2xl bg-[#111827] border border-[#334155] group-hover/icon:border-[#00e1ff]/30 flex items-center justify-center transition-all duration-300 group-hover/icon:scale-110"
            >
              <!-- Sparkle icon -->
              <div class="relative">
                <svg
                  class="w-12 h-12 text-[#00e1ff] group-hover/icon:text-[#1bd4c1] transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                    clip-rule="evenodd"
                  />
                </svg>

                <!-- Pulsing dot -->
                <div class="absolute -top-1 -right-1 w-3 h-3">
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-ping"
                  ></div>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Heading -->
        <h2
          ref="headingRef"
          class="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8 leading-tight"
        >
          <span class="text-white">{{ t("cta.heading.part1") }}</span>
          <span class="block">
            <span
              class="bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            >
              {{ t("cta.heading.part2") }}
            </span>
          </span>
        </h2>

        <!-- Description -->
        <p
          ref="descriptionRef"
          class="text-xl md:text-2xl text-center text-[#cbd5e1] mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          {{ t("cta.description") }}
        </p>

        <!-- Action Buttons -->
        <div
          ref="buttonsRef"
          class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <!-- Primary Button -->
          <NuxtLink
            to="/contact"
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
              <span>{{ t("cta.buttons.primary") }}</span>
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
            to="/projects"
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
              <svg
                class="w-5 h-5 text-[#00e1ff] group-hover/secondary:text-[#1bd4c1] transition-colors duration-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>{{ t("cta.buttons.secondary") }}</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Trust Indicators -->
        <div class="max-w-3xl mx-auto">
          <!-- Divider -->
          <div class="relative mb-8">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-[#334155]"></div>
            </div>
            <div class="relative flex justify-center">
              <span
                class="px-4 bg-[#0f1729] text-[#94a3b8] text-sm uppercase tracking-wider"
                >{{ t("cta.trusted_by") }}</span
              >
            </div>
          </div>

          <!-- Company Logos -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div
              v-for="company in companies"
              :key="company.name"
              class="group/company relative"
            >
              <!-- Logo container -->
              <div
                class="relative p-6 rounded-xl bg-[#111827]/50 border border-[#334155] group-hover/company:border-[#00e1ff]/20 transition-all duration-300"
              >
                <!-- Background glow on hover -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-[#00e1ff]/5 to-[#1bd4c1]/5 rounded-xl opacity-0 group-hover/company:opacity-100 transition-opacity duration-300"
                ></div>

                <!-- Logo content -->
                <div class="relative z-10 flex items-center justify-center">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-white mb-1">
                      {{ company.initials }}
                    </div>
                    <div class="text-xs text-[#94a3b8]">{{ company.name }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="mt-12 pt-8 border-t border-[#334155]">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div
                class="flex items-center justify-center gap-3 text-[#cbd5e1]"
              >
                <svg
                  class="w-5 h-5 text-[#00e1ff]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716a1.5 1.5 0 011.465 1.175V15.5a1.5 1.5 0 01-1.5 1.5h-2.25a2.25 2.25 0 01-2.25-2.25v-1.16c0-.116-.027-.231-.077-.333a10.726 10.726 0 01-1.299-3.287 10.726 10.726 0 01-1.299 3.287c-.05.102-.077.217-.077.333v1.16A2.25 2.25 0 015.75 17H3.5A1.5 1.5 0 012 15.5v-12z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div>
                  <div class="text-sm text-[#94a3b8]">
                    {{ t("cta.contact_info.call.label") }}
                  </div>
                  <div class="text-white font-medium">
                    {{ t("cta.contact_info.call.value") }}
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center">
              <div
                class="flex items-center justify-center gap-3 text-[#cbd5e1]"
              >
                <svg
                  class="w-5 h-5 text-[#1bd4c1]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
                <div>
                  <div class="text-sm text-[#94a3b8]">
                    {{ t("cta.contact_info.email.label") }}
                  </div>
                  <div class="text-white font-medium">
                    {{ t("cta.contact_info.email.value") }}
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center">
              <div
                class="flex items-center justify-center gap-3 text-[#cbd5e1]"
              >
                <svg
                  class="w-5 h-5 text-[#00e1ff]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div>
                  <div class="text-sm text-[#94a3b8]">
                    {{ t("cta.contact_info.visit.label") }}
                  </div>
                  <div class="text-white font-medium">
                    {{ t("cta.contact_info.visit.value") }}
                  </div>
                </div>
              </div>
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

const companies = [
  { name: "TechCorp", initials: "TC" },
  { name: "Global Finance", initials: "GF" },
  { name: "Innovate Co", initials: "IC" },
  { name: "Digital Solutions", initials: "DS" },
];

const headingRef = ref(null);
const descriptionRef = ref(null);
const buttonsRef = ref(null);

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  if (headingRef.value) observer.observe(headingRef.value);
  if (descriptionRef.value) observer.observe(descriptionRef.value);
  if (buttonsRef.value) observer.observe(buttonsRef.value);
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
    transform: translateY(-30px) scale(1.3);
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

@keyframes spin-slow-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(5deg);
  }
  66% {
    transform: translateY(10px) rotate(-5deg);
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

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-spin-slow-reverse {
  animation: spin-slow-reverse 25s linear infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
