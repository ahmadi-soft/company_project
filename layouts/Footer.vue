<template>
  <footer
    class="relative overflow-hidden border-t border-[#1e293b] bg-[#0f1729]"
  >
    <!-- Background effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Grid pattern -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute inset-0"
          style="
            background-image: linear-gradient(
                to right,
                #00e1ff22 1px,
                transparent 1px
              ),
              linear-gradient(to bottom, #00e1ff22 1px, transparent 1px);
            background-size: 40px 40px;
          "
        ></div>
      </div>

      <!-- Animated gradient orbs -->
      <div class="absolute -top-40 -left-40 w-80 h-80">
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full opacity-5 blur-3xl animate-pulse"
        ></div>
      </div>
      <div class="absolute -bottom-40 -right-40 w-80 h-80">
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] rounded-full opacity-5 blur-3xl animate-pulse delay-1000"
        ></div>
      </div>
    </div>

    <div class="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
      <!-- Main footer content -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
      >
        <!-- Brand section -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Logo and brand -->
          <div class="flex items-center gap-3 group cursor-pointer">
            <div class="relative">
              <!-- Animated logo container -->
              <div class="relative w-14 h-14">
                <!-- Outer ring animation -->
                <div
                  class="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] opacity-30 animate-spin-slow"
                ></div>
                <!-- Main logo -->
                <div
                  class="absolute inset-[2px] rounded-xl bg-[#111827] flex items-center justify-center"
                >
                  <div class="relative">
                    <svg
                      class="w-6 h-6 text-[#00e1ff]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14 18L18 12L14 6M10 6L6 12L10 18"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <!-- Pulsing dot -->

                    <div
                      class="absolute -inset-1 bg-[#00e1ff] rounded-full blur opacity-20"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <h2
                class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              >
                {{ t("navbar.brand") }}
              </h2>
              <p class="text-sm text-[#94a3b8] mt-1">
                {{ t("navbar.tagline") }}
              </p>
              <div
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] group-hover:w-full transition-all duration-500"
              ></div>
            </div>
          </div>

          <!-- Tagline -->
          <p class="text-[#cbd5e1] text-lg leading-relaxed max-w-lg">
            {{ t("footer.about.tagline") }}
          </p>

          <!-- Newsletter -->
          <div class="space-y-4 pt-4">
            <h3 class="text-white font-semibold flex items-center gap-2">
              <Icon
                name="ph:paper-plane-tilt-fill"
                class="w-5 h-5 text-[#00e1ff]"
              />
              {{ t("footer.newsletter.title") }}
            </h3>
            <div class="flex flex-col sm:flex-row gap-3">
              <div class="relative flex-1">
                <input
                  type="email"
                  :placeholder="t('footer.newsletter.placeholder')"
                  class="w-full px-4 py-3 rounded-lg bg-[#111827] border border-[#334155] text-white placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#00e1ff] focus:border-transparent transition-all duration-300 pl-10"
                />
                <Icon
                  name="ph:envelope-simple"
                  class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#64748b]"
                />
              </div>
              <button
                class="group relative px-6 py-3 rounded-lg bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] text-[#0f1729] font-semibold hover:shadow-[0_0_30px_rgba(0,225,255,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
              >
                <span class="relative z-10 flex items-center gap-2">
                  {{ t("footer.newsletter.subscribe") }}
                  <Icon
                    name="ph:arrow-right"
                    class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Links sections -->
        <div
          v-for="[category, links] in Object.entries(footerLinks)"
          :key="category"
          class="space-y-4"
        >
          <div class="relative">
            <h3
              class="text-white font-semibold text-lg mb-4 inline-flex items-center gap-2"
            >
              <Icon name="ph:caret-right-fill" class="w-4 h-4 text-[#00e1ff]" />
              {{ t(`footer.categories.${category}`) }}
            </h3>
            <div
              class="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full"
            ></div>
          </div>
          <ul class="space-y-3">
            <li v-for="link in links" :key="link.nameKey">
              <NuxtLink
                :to="link.path"
                class="group flex items-center text-[#94a3b8] hover:text-white transition-all duration-300 py-1.5"
              >
                <div class="relative overflow-hidden">
                  <div
                    class="w-2 h-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                  ></div>
                </div>
                <span
                  class="ml-3 group-hover:translate-x-1 transition-transform duration-300"
                >
                  {{ t(link.nameKey) }}
                </span>
                <Icon
                  name="ph:arrow-up-right"
                  class="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-[#00e1ff]"
                />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar - MODERN DESIGN -->
      <div class="mt-12 pt-8 border-t border-[#1e293b]">
        <!-- Main bottom bar -->
        <div
          class="flex flex-col lg:flex-row items-center justify-between gap-6 p-4 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-[#334155]/50"
        >
          <!-- Left: Trust badges -->
          <div class="flex flex-wrap items-center gap-4">
            <!-- Secure badge -->
            <div
              class="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 border border-[#00e1ff]/20"
            >
              <div class="relative">
                <Icon
                  name="ph:shield-check-fill"
                  class="w-5 h-5 text-[#00e1ff]"
                />
                <div
                  class="absolute -inset-1 bg-[#00e1ff] rounded-full blur opacity-20"
                ></div>
              </div>
              <span class="text-sm text-white font-medium">{{
                t("footer.badges.secure")
              }}</span>
            </div>

            <!-- Global badge -->
            <div
              class="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[#1bd4c1]/10 to-[#00e1ff]/10 border border-[#1bd4c1]/20"
            >
              <div class="relative">
                <Icon
                  name="ph:globe-hemisphere-west-fill"
                  class="w-5 h-5 text-[#1bd4c1]"
                />
                <div
                  class="absolute -inset-1 bg-[#1bd4c1] rounded-full blur opacity-20"
                ></div>
              </div>
              <span class="text-sm text-white font-medium">{{
                t("footer.badges.global")
              }}</span>
            </div>
          </div>

          <!-- Center: Copyright -->
          <div class="text-center">
            <p class="text-[#94a3b8] text-sm">
              © {{ new Date().getFullYear() }}
              <span
                class="text-white font-semibold bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] bg-clip-text text-transparent"
                >{{ t("navbar.brand") }}</span
              >. {{ t("footer.copyright") }}
            </p>
            <p class="text-xs text-[#64748b] mt-1">
              {{ t("footer.since", { year: new Date().getFullYear() }) }}
            </p>
          </div>

          <!-- Right: Legal links -->
          <div class="flex items-center gap-2">
            <NuxtLink
              to="#"
              class="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#1e293b] transition-all duration-300"
            >
              <div class="relative">
                <Icon
                  name="ph:lock-key-fill"
                  class="w-4 h-4 text-[#94a3b8] group-hover:text-[#00e1ff]"
                />
                <div
                  class="absolute -inset-1 bg-[#00e1ff] rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                ></div>
              </div>
              <span class="text-sm text-[#94a3b8] group-hover:text-white">{{
                t("footer.legal.privacy")
              }}</span>
            </NuxtLink>

            <div class="w-px h-4 bg-[#334155]"></div>

            <NuxtLink
              to="#"
              class="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#1e293b] transition-all duration-300"
            >
              <div class="relative">
                <Icon
                  name="ph:file-text-fill"
                  class="w-4 h-4 text-[#94a3b8] group-hover:text-[#1bd4c1]"
                />
                <div
                  class="absolute -inset-1 bg-[#1bd4c1] rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                ></div>
              </div>
              <span class="text-sm text-[#94a3b8] group-hover:text-white">{{
                t("footer.legal.terms")
              }}</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Tech stack -->
        <div class="mt-6">
          <div class="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span class="text-[#64748b]">{{ t("footer.powered_by") }}</span>

            <!-- Tech badges -->
            <div class="flex flex-wrap items-center justify-center gap-2">
              <div
                v-for="tech in techStack"
                :key="tech.name"
                class="group relative px-3 py-1.5 rounded-lg bg-[#111827] border border-[#334155] hover:border-[#00e1ff]/30 transition-all duration-300 cursor-pointer"
              >
                <div class="flex items-center gap-2">
                  <Icon :name="tech.icon" class="w-4 h-4" :class="tech.color" />
                  <span class="text-[#cbd5e1] group-hover:text-white">{{
                    tech.name
                  }}</span>
                </div>
                <!-- Hover effect -->
                <div
                  class="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00e1ff]/5 to-[#1bd4c1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
            </div>

            <!-- CTA Button -->
            <button
              class="ml-2 group flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 hover:from-[#00e1ff]/20 hover:to-[#1bd4c1]/20 border border-[#00e1ff]/20 hover:border-[#00e1ff]/40 transition-all duration-300"
            >
              <span class="text-sm text-white font-medium">{{
                t("footer.view_tech")
              }}</span>
              <Icon
                name="ph:arrow-up-right"
                class="w-3 h-3 text-[#00e1ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        <!-- Contact info -->
        <div class="mt-6 pt-6 border-t border-[#1e293b]">
          <div
            class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#94a3b8]"
          >
            <div class="flex items-center gap-4">
              <!-- href="mailto:hello@aftech.dev" -->
              <a
                :href="`mailto:${contactEmail}`"
                class="flex items-center gap-2 hover:text-[#00e1ff] transition-colors duration-300"
              >
                <Icon name="ph:envelope-fill" class="w-4 h-4" />
                {{ contactEmail }}
              </a>
              <div class="w-px h-4 bg-[#334155] hidden md:block"></div>
              <a
                :href="`tel:${t('footer.contact.phone')}`"
                class="flex items-center gap-2 hover:text-[#1bd4c1] transition-colors duration-300"
              >
                <Icon name="ph:phone-fill" class="w-4 h-4" />
                {{ t("footer.contact.phone") }}
              </a>
            </div>

            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <Icon name="ph:map-pin-fill" class="w-4 h-4 text-[#00e1ff]" />
                <span>{{ t("footer.contact.location") }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
// Define footer links (use translation keys for labels)
const footerLinks = {
  services: [
    { nameKey: "footer.links.services.backend", path: "/services#backend" },
    { nameKey: "footer.links.services.frontend", path: "/services#frontend" },
    { nameKey: "footer.links.services.mobile", path: "/services#mobile" },
    { nameKey: "footer.links.services.design", path: "/services#design" },
    { nameKey: "footer.links.services.devops", path: "/services#devops" },
  ],
  company: [
    { nameKey: "footer.links.company.about", path: "/team" },
    { nameKey: "footer.links.company.projects", path: "/projects" },
    { nameKey: "footer.links.company.careers", path: "/team" },
    { nameKey: "footer.links.company.contact", path: "/contact" },
    { nameKey: "footer.links.company.partners", path: "#" },
  ],
  resources: [
    { nameKey: "footer.links.resources.blog", path: "#" },
    { nameKey: "footer.links.resources.case_studies", path: "/projects" },
    { nameKey: "footer.links.resources.docs", path: "#" },
    { nameKey: "footer.links.resources.support", path: "/contact" },
    { nameKey: "footer.links.resources.api", path: "#" },
  ],
};

// Tech stack with colors
const techStack = [
  { name: "Nuxt 3", icon: "logos:nuxt-icon", color: "text-[#00DC82]" },
  {
    name: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
    color: "text-[#06B6D4]",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    color: "text-[#3178C6]",
  },
  { name: "Vue.js", icon: "logos:vue", color: "text-[#41B883]" },
  { name: "Node.js", icon: "logos:nodejs-icon", color: "text-[#339933]" },
];

// Contact email constant (keep out of i18n messages to avoid message-compiler linked-format parsing)
const contactEmail = "hello@gmail.com";
</script>

<style scoped>
/* Custom animations */
@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  animation: gradient 3s ease infinite;
  background-size: 200% auto;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #111827;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #00e1ff, #1bd4c1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #1bd4c1, #00e1ff);
}
</style>
