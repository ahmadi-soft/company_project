<template>
  <nav
    ref="navRef"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-700 transform',
      scrolled
        ? 'bg-[#0f1729]/80 backdrop-blur-xl border-b border-[#1e293b]/50 shadow-2xl shadow-[#00e1ff]/10'
        : 'bg-[#0f1729]/90 backdrop-blur-md',
    ]"
    :style="{
      '--primary': '#00e1ff',
      '--secondary': '#1bd4c1',
      '--bg': '#0f1729',
      '--card': '#111827',
      opacity: navOpacity,
      transform: `translateY(${navTranslateY}px)`,
      transition: `opacity ${navTransitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1), 
                  transform ${navTransitionDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1),
                  background-color 700ms ease,
                  backdrop-filter 700ms ease,
                  border-color 700ms ease`,
    }"
  >
    <!-- Scroll progress indicator -->
    <div
      v-if="scrolled"
      class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] transition-all duration-1000"
      :style="{
        width: `${scrollProgress}%`,
        opacity: scrollProgress > 0 ? navOpacity : 0,
      }"
    ></div>

    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo with subtle scale animation -->
        <NuxtLink
          to="/"
          class="flex items-center gap-3 group"
          @mouseenter="startLogoAnimation"
          @mouseleave="resetLogoAnimation"
          :style="{
            transform: `scale(${
              scrolled ? 0.95 : 1
            }) translateY(${logoTranslateY}px)`,
            opacity: logoOpacity,
            transition:
              'transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 500ms ease',
          }"
        >
          <!-- Animated Logo Container -->
          <div class="relative">
            <!-- Outer glow effect -->
            <div
              class="absolute -inset-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-xl blur-md transition-all duration-700"
              :class="
                scrolled ? 'opacity-40' : 'opacity-20 group-hover:opacity-30'
              "
              :style="{
                opacity: scrolled ? 0.4 * navOpacity : 0.2 * navOpacity,
              }"
            ></div>

            <!-- Logo background with gradient border -->
            <div class="relative">
              <!-- Animated gradient border -->
              <div
                class="absolute -inset-0.5 bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] rounded-xl blur transition-all duration-700"
                :class="{ 'animate-gradient-border': logoAnimated }"
                :style="{
                  opacity: 0.8 * navOpacity,
                  backgroundSize: '300% 300%',
                  backgroundPosition: scrolled ? '100% 50%' : '0% 50%',
                }"
              ></div>

              <!-- Main logo -->
              <div
                class="relative w-12 h-12 rounded-xl bg-[#111827] flex items-center justify-center transition-all duration-500"
                :class="scrolled ? 'shadow-lg shadow-[#00e1ff]/20' : ''"
                :style="{ opacity: navOpacity }"
              >
                <!-- Animated code symbol -->
                <div class="relative">
                  <svg
                    class="w-6 h-6 transition-colors duration-500"
                    :class="scrolled ? 'text-[#1bd4c1]' : 'text-[#00e1ff]'"
                    viewBox="0 0 24 24"
                    fill="none"
                    :style="{ opacity: navOpacity }"
                  >
                    <path
                      d="M14 18L18 12L14 6M10 6L6 12L10 18"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      :class="{ 'animate-pulse': logoAnimated }"
                    />
                  </svg>

                  <!-- Pulsing dot -->
                  <div
                    class="absolute -top-1 -right-1 w-2 h-2 bg-[#1bd4c1] rounded-full transition-all duration-500"
                    :class="[
                      { 'animate-ping': logoAnimated },
                      scrolled ? 'scale-125' : '',
                    ]"
                    :style="{ opacity: navOpacity }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Company Name with Gradient -->
          <div class="relative">
            <h1
              class="text-2xl font-bold bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent transition-all duration-700"
              :style="{
                backgroundSize: scrolled ? '200% auto' : '100% auto',
                backgroundPosition: scrolled ? '100% 50%' : '0% 50%',
                opacity: navOpacity,
              }"
            >
              {{ t("navbar.brand") }}
            </h1>
            <p
              class="text-xs font-medium mt-0.5 transition-all duration-500"
              :class="scrolled ? 'text-[#cbd5e1]' : 'text-[#94a3b8]'"
              :style="{ opacity: navOpacity }"
            >
              {{ t("navbar.tagline") }}
            </p>

            <!-- Underline animation -->
            <div
              class="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] transition-all duration-700"
              :style="{
                width: scrolled ? '100%' : '0',
                opacity: (scrolled ? 1 : 0.5) * navOpacity,
              }"
            ></div>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation with fade animation -->
        <div
          class="hidden lg:flex items-center gap-1"
          :style="{
            opacity: navOpacity,
            transform: `translateY(${navItemsTranslateY}px)`,
            transition: `opacity ${navTransitionDuration}ms ease, transform ${navTransitionDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
          }"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :class="[
              'relative px-4 py-2 rounded-lg font-medium transition-all duration-500 group/nav-item',
              route.path === item.path
                ? 'text-white bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10'
                : 'text-[#94a3b8] hover:text-white',
            ]"
            @mouseenter="setActiveHover(item.path)"
            @mouseleave="resetActiveHover"
            :style="{
              opacity: navOpacity,
              transform: `translateY(${navItemsTranslateY}px)`,
              transitionDelay: `${navItems.indexOf(item) * 30}ms`,
              transition: `opacity ${navTransitionDuration}ms ease, transform ${navTransitionDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
            }"
          >
            <!-- Active indicator -->
            <div
              v-if="route.path === item.path"
              class="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00e1ff]/20 to-[#1bd4c1]/20 transition-opacity duration-500"
              :style="{ opacity: 0.2 * navOpacity }"
            ></div>

            <!-- Hover indicator -->
            <div
              class="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 opacity-0 group-hover/nav-item:opacity-100 transition-opacity duration-300"
              v-show="!route.path === item.path"
              :style="{ opacity: 0.1 * navOpacity }"
            ></div>

            <span class="relative z-10 flex items-center gap-2">
              {{ t(item.nameKey) }}
              <svg
                v-if="route.path === item.path"
                class="w-4 h-4 transition-all duration-500"
                :class="
                  scrolled ? 'text-[#1bd4c1] animate-pulse' : 'text-[#00e1ff]'
                "
                viewBox="0 0 20 20"
                fill="currentColor"
                :style="{ opacity: navOpacity }"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>

            <!-- Bottom indicator for active item -->
            <div
              v-if="route.path === item.path"
              class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full transition-all duration-500"
              :class="scrolled ? 'scale-125' : ''"
              :style="{ opacity: navOpacity }"
            ></div>
          </NuxtLink>
        </div>

        <!-- Desktop Actions with fade animation -->
        <div
          class="hidden lg:flex items-center gap-4"
          :style="{
            opacity: navOpacity,
            transform: `translateY(${actionsTranslateY}px) scale(${
              scrolled ? 0.95 : 1
            })`,
            transition: `opacity ${navTransitionDuration}ms ease, 
                        transform ${navTransitionDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
          }"
        >
          <!-- Language Button -->
          <button
            @click="openLangModal"
            class="group/language relative px-4 py-2 rounded-xl bg-[#111827] border transition-all duration-500 flex items-center gap-3"
            :class="
              scrolled
                ? 'border-[#00e1ff]/30 shadow-lg shadow-[#00e1ff]/5'
                : 'border-[#334155] hover:border-[#00e1ff]/30'
            "
            :style="{
              opacity: navOpacity,
            }"
            :aria-label="t('navbar.language')"
          >
            <!-- Current Language Display -->
            <div class="flex items-center gap-3">
              <span class="text-xl">{{ getCurrentFlag() }}</span>
              <div class="text-left">
                <div
                  class="text-sm font-medium text-white transition-all duration-300"
                >
                  {{ currentLocale.toUpperCase() }}
                </div>
                <div class="text-xs text-[#94a3b8] transition-all duration-300">
                  {{ getCurrentLanguageName() }}
                </div>
              </div>
            </div>

            <!-- Language Icon -->
            <svg
              class="w-4 h-4 transition-all duration-500 text-[#64748b] group-hover/language:text-[#00e1ff]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1h3zm4 6a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zm0 4a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zm0 4a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>

            <!-- Background Glow -->
            <div
              class="absolute -inset-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-xl opacity-0 group-hover/language:opacity-10 blur transition-opacity duration-300"
              :style="{ opacity: 0.1 * navOpacity }"
            ></div>

            <!-- Animated Border -->
            <div
              class="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] opacity-0 group-hover/language:opacity-30 blur-sm transition-opacity duration-500"
              :style="{
                backgroundSize: '300% 300%',
              }"
            ></div>
          </button>

          <!-- Contact Button -->
          <NuxtLink
            to="/contact"
            class="group/contact relative px-6 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-500"
            :style="{
              transform: `scale(${scrolled ? 0.95 : 1})`,
              boxShadow: scrolled
                ? '0 4px 20px rgba(0, 225, 255, 0.2)'
                : 'none',
              opacity: navOpacity,
            }"
          >
            <!-- Gradient background -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] transition-all duration-500"
              :class="scrolled ? 'opacity-90' : 'opacity-100'"
            ></div>

            <!-- Hover overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300"
            ></div>

            <!-- Shine effect -->
            <div class="absolute inset-0 overflow-hidden">
              <div
                class="absolute -inset-y-full -left-20 w-20 bg-white/20 skew-x-12 group-hover/contact:left-full transition-all duration-1000"
              ></div>
            </div>
            <!-- Text -->
            <span
              class="relative z-10 text-[#0f1729] font-bold flex items-center gap-2 transition-all duration-500"
              :class="scrolled ? 'text-sm' : ''"
            >
              {{ t("navbar.get_started") }}
              <svg
                :class="[
                  'w-4 h-4 transition-transform duration-300',
                  contactArrowHoverClass,
                  contactArrowFlipClass,
                ]"
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

            <!-- Glow effect -->
            <div
              class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-xl blur opacity-0 group-hover/contact:opacity-50 transition-opacity duration-300 -z-10"
            ></div>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden relative p-2 rounded-lg bg-[#111827] border transition-all duration-500 group/menu"
          :class="
            scrolled
              ? 'border-[#00e1ff]/40 shadow-lg shadow-[#00e1ff]/10'
              : 'border-[#334155] hover:border-[#00e1ff]/30'
          "
          :aria-label="t('navbar.toggle_menu')"
          :style="{
            opacity: navOpacity,
            transform: `scale(${
              scrolled ? 0.9 : 1
            }) translateY(${mobileToggleTranslateY}px)`,
            transition: `opacity ${navTransitionDuration}ms ease, transform ${navTransitionDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
          }"
        >
          <!-- Animated hamburger icon -->
          <div class="relative w-6 h-5">
            <span
              class="absolute left-0 w-6 h-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full transition-all duration-300"
              :class="
                isMobileOpen
                  ? 'top-1/2 transform -translate-y-1/2 rotate-45'
                  : 'top-0'
              "
              :style="{ opacity: navOpacity }"
            ></span>
            <span
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full transition-all duration-300"
              :class="isMobileOpen ? 'opacity-0' : 'opacity-100'"
              :style="{ opacity: navOpacity }"
            ></span>
            <span
              class="absolute left-0 w-6 h-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full transition-all duration-300"
              :class="
                isMobileOpen
                  ? 'top-1/2 transform -translate-y-1/2 -rotate-45'
                  : 'bottom-0'
              "
              :style="{ opacity: navOpacity }"
            ></span>
          </div>

          <!-- Background glow -->
          <div
            class="absolute -inset-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-lg opacity-0 group-hover/menu:opacity-10 blur transition-opacity duration-300"
            :style="{ opacity: 0.1 * navOpacity }"
          ></div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMobileOpen"
        class="lg:hidden overflow-hidden transition-all duration-300"
        :class="isMobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'"
        :style="{
          opacity: isMobileOpen ? 1 : 0,
          transform: isMobileOpen ? 'translateY(0)' : 'translateY(-10px)',
        }"
      >
        <div class="py-4 border-t border-[#1e293b] mt-2">
          <div class="flex flex-col gap-2">
            <NuxtLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              @click="closeMobileMenu"
              :class="[
                'relative px-4 py-3 rounded-xl font-medium transition-all duration-300 group/mobile-item',
                route.path === item.path
                  ? 'text-white bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 border border-[#00e1ff]/20'
                  : 'text-[#94a3b8] hover:text-white hover:bg-[#111827]',
              ]"
              :style="{
                opacity: isMobileOpen ? 1 : 0,
                transform: isMobileOpen ? 'translateY(0)' : 'translateY(-5px)',
                transitionDelay: `${navItems.indexOf(item) * 50}ms`,
              }"
            >
              <!-- Active indicator -->
              <div
                v-if="route.path === item.path"
                class="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#00e1ff] to-[#1bd4c1] rounded-r-full"
              ></div>

              <!-- Hover gradient -->
              <div
                class="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00e1ff]/5 to-[#1bd4c1]/5 opacity-0 group-hover/mobile-item:opacity-100 transition-opacity duration-300"
              ></div>

              <span class="relative z-10 flex items-center justify-between">
                <span>{{ t(item.nameKey) }}</span>
                <svg
                  class="w-4 h-4 text-[#00e1ff] group-hover/mobile-item:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </NuxtLink>

            <!-- Mobile Actions -->
            <div
              class="flex items-center gap-3 mt-4 pt-4 border-t border-[#1e293b]"
            >
              <!-- Language Button Mobile -->
              <button
                @click="openLangModal"
                class="group/language-mobile flex-1 py-3 rounded-xl bg-[#111827] border border-[#1e293b] hover:border-[#00e1ff]/30 transition-all duration-300 flex items-center justify-center gap-2"
                :style="{
                  opacity: isMobileOpen ? 1 : 0,
                  transform: isMobileOpen
                    ? 'translateY(0)'
                    : 'translateY(-5px)',
                  transitionDelay: '150ms',
                }"
                :aria-label="t('navbar.language')"
              >
                <span class="text-lg">{{ getCurrentFlag() }}</span>
                <span class="font-medium text-white">{{
                  getCurrentLanguageName()
                }}</span>
                <span
                  class="text-xs px-1.5 py-0.5 rounded bg-[#1e293b] text-[#94a3b8]"
                >
                  {{ currentLocale.toUpperCase() }}
                </span>
              </button>

              <!-- Contact Button Mobile -->
              <NuxtLink
                to="/contact"
                @click="closeMobileMenu"
                class="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] text-[#0f1729] font-semibold text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,225,255,0.3)]"
                :style="{
                  opacity: isMobileOpen ? 1 : 0,
                  transform: isMobileOpen
                    ? 'translateY(0)'
                    : 'translateY(-5px)',
                  transitionDelay: '200ms',
                }"
              >
                {{ t("navbar.contact_us") }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Add padding to main content -->
  <div :class="['transition-all duration-300', scrolled ? 'pt-20' : 'pt-20']">
    <slot />
  </div>

  <LanguageModal v-model:show="showLangModal" @select="onLanguageSelected" />
</template>

<script setup>
import LanguageModal from "~/components/LanguageModal.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
const route = useRoute();

const { t, locale } = useI18n();

// Define navigation items (use i18n keys for names)
const navItems = [
  { nameKey: "navbar.nav.home", path: "/" },
  { nameKey: "navbar.nav.services", path: "/services" },
  { nameKey: "navbar.nav.projects", path: "/projects" },
  { nameKey: "navbar.nav.team", path: "/team" },
  { nameKey: "navbar.nav.contact", path: "/contact" },
];

// Language data
const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
];

// Reactive states
const scrolled = ref(false);
const isMobileOpen = ref(false);
const logoAnimated = ref(false);
const scrollProgress = ref(0);
const lastScrollY = ref(0);
const scrollTimeout = ref(null);
const currentLocale = ref(locale.value);
const showLangModal = ref(false);

// RTL-aware helpers for contact arrow
const isRtl = computed(() => currentLocale.value === "ar");
const contactArrowHoverClass = computed(() =>
  isRtl.value
    ? "group-hover/contact:-translate-x-1"
    : "group-hover/contact:translate-x-1"
);
const contactArrowFlipClass = computed(() =>
  isRtl.value ? "scale-x-[-1]" : ""
);

// Fade animation states (navbar always stays at top, just fades in/out)
const navOpacity = ref(1);
const navTranslateY = ref(0);
const logoOpacity = ref(1);
const logoTranslateY = ref(0);
const navItemsTranslateY = ref(0);
const actionsTranslateY = ref(0);
const mobileToggleTranslateY = ref(0);
const navTransitionDuration = ref(500);

// Scroll tracking for direction
const isScrollingDown = ref(false);
const scrollThreshold = 50; // Minimum scroll distance before animation starts
const fadeIntensity = 0.3; // How much to fade (0-1)
const maxFade = 0.7; // Maximum fade opacity (0.3 = 30% opacity at max fade)

// Language helper functions
const getCurrentFlag = () => {
  const lang = languages.find((l) => l.code === currentLocale.value);
  return lang ? lang.flag : "🇺🇸";
};

const getCurrentLanguageName = () => {
  const lang = languages.find((l) => l.code === currentLocale.value);
  return lang ? lang.name : "English";
};

function openLangModal() {
  showLangModal.value = true;
}

function onLanguageSelected(code) {
  currentLocale.value = code;
  locale.value = code;

  // Update HTML attributes for RTL support
  if (code === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = code;
  }

  // Persist to localStorage
  if (typeof window !== "undefined") {
    localStorage.setItem("locale", code);
  }

  showLangModal.value = false;
}

// Mobile menu toggle
const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value;
};

const closeMobileMenu = () => {
  isMobileOpen.value = false;
};

// Logo animation
const startLogoAnimation = () => {
  logoAnimated.value = true;
};

const resetLogoAnimation = () => {
  logoAnimated.value = false;
};

// Calculate scroll progress
const calculateScrollProgress = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  const scrolled = window.scrollY;

  // Calculate percentage (0-100)
  const progress = (scrolled / documentHeight) * 100;
  scrollProgress.value = Math.min(Math.max(progress, 0), 100);
};

// Enhanced fade animation based on scroll direction
const handleScroll = () => {
  // Clear any existing timeout
  if (scrollTimeout.value) {
    clearTimeout(scrollTimeout.value);
  }

  const currentScrollY = window.scrollY;
  const scrollDelta = currentScrollY - lastScrollY.value;

  // Calculate scroll progress
  calculateScrollProgress();

  // Determine scroll direction
  isScrollingDown.value = scrollDelta > 0;

  // Update scroll state for background
  scrolled.value = currentScrollY > 20;

  // Calculate fade based on scroll speed and direction
  const scrollSpeed = Math.min(Math.abs(scrollDelta), 50) / 50; // Normalize 0-1
  const isAtTop = currentScrollY < scrollThreshold;

  // Fade out when scrolling down, fade in when scrolling up
  if (isScrollingDown.value && !isAtTop) {
    // Fade out animation when scrolling down
    const fadeAmount = maxFade * scrollSpeed * fadeIntensity;
    navOpacity.value = Math.max(1 - fadeAmount, 0.3); // Never completely fade out

    // Subtle vertical movement
    navTranslateY.value = -scrollSpeed * 3;
    logoTranslateY.value = -scrollSpeed * 2;
    navItemsTranslateY.value = -scrollSpeed * 4;
    actionsTranslateY.value = -scrollSpeed * 4;
    mobileToggleTranslateY.value = -scrollSpeed * 2;

    navTransitionDuration.value = 300 + scrollSpeed * 200; // Faster for fast scrolling
  } else {
    // Fade in animation when scrolling up
    const fadeAmount = maxFade * (1 - scrollSpeed) * fadeIntensity;
    navOpacity.value = Math.min(1 - fadeAmount, 1);

    // Return to normal position
    navTranslateY.value = 0;
    logoTranslateY.value = 0;
    navItemsTranslateY.value = 0;
    actionsTranslateY.value = 0;
    mobileToggleTranslateY.value = 0;

    navTransitionDuration.value = 500 + (1 - scrollSpeed) * 300; // Slower for smooth reveal
  }

  // At very top, ensure full opacity
  if (currentScrollY <= 10) {
    navOpacity.value = 1;
    navTranslateY.value = 0;
    logoTranslateY.value = 0;
    navItemsTranslateY.value = 0;
    actionsTranslateY.value = 0;
    mobileToggleTranslateY.value = 0;
  }

  // Update last scroll position
  lastScrollY.value = currentScrollY;

  // Smooth fade back after scrolling stops
  scrollTimeout.value = setTimeout(() => {
    if (!isScrollingDown.value) {
      // Smooth fade in when scrolling stops
      navTransitionDuration.value = 800;
      navOpacity.value = 1;
      navTranslateY.value = 0;
      logoTranslateY.value = 0;
      navItemsTranslateY.value = 0;
      actionsTranslateY.value = 0;
      mobileToggleTranslateY.value = 0;
    }
  }, 150);
};

onMounted(() => {
  // Set dark mode as default
  document.documentElement.classList.add("dark");

  // Load saved locale
  try {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale && languages.some((lang) => lang.code === savedLocale)) {
      currentLocale.value = savedLocale;
      locale.value = savedLocale;

      // Set HTML attributes
      if (savedLocale === "ar") {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
      }
    }
  } catch (e) {
    console.warn("Could not access localStorage:", e);
  }

  // Initialize scroll position
  lastScrollY.value = window.scrollY;

  // Calculate initial scroll progress
  calculateScrollProgress();

  // Add scroll event listener with throttling
  let ticking = false;
  const throttledHandleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", throttledHandleScroll, { passive: true });

  onUnmounted(() => {
    window.removeEventListener("scroll", throttledHandleScroll);
    if (scrollTimeout.value) {
      clearTimeout(scrollTimeout.value);
    }
  });
});

// Add keyboard accessibility for mobile menu
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === "Escape" && isMobileOpen.value) {
      closeMobileMenu();
    }
  };

  document.addEventListener("keydown", handleEscape);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
  });
});

// Watch for route changes to close mobile menu
watch(
  () => route.path,
  () => {
    closeMobileMenu();
  }
);
</script>

<style>
/* Enhanced fade animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.3;
    transform: translateY(-10px);
  }
}

@keyframes subtle-glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(0, 225, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 30px rgba(0, 225, 255, 0.2);
  }
}

/* Navbar always stays at top with fade effects */
nav {
  animation: fade-in 0.8s ease-out;
  will-change: opacity, transform;
  contain: layout style paint;
}

.navbar-fade-in {
  animation: fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.navbar-fade-out {
  animation: fade-out 0.3s ease-out forwards;
}

/* Gradient animations */
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

.animate-gradient {
  animation: gradient 3s ease infinite;
  background-size: 200% auto;
}

.animate-gradient-border {
  animation: gradient-border 2s ease infinite;
  background-size: 300% 300%;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
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

/* Enhanced smooth transitions for navbar */
nav,
nav * {
  transition-property: opacity, transform, background-color, border-color,
    box-shadow, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Glowing effect when navbar fades in */
nav.scrolled {
  animation: subtle-glow 3s ease-in-out infinite;
}

/* Focus styles for accessibility */
:focus-visible {
  outline: 2px solid #00e1ff;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Page content padding */
main {
  min-height: 100vh;
}

/* Performance optimization */
nav {
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Mobile menu animations */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
