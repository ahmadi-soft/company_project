<template>
  <nav
    ref="navRef"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform',
      scrolled
        ? 'bg-[#0f1729]/50 backdrop-blur-3xl border-b border-[#1e293b]/50 shadow-2xl shadow-[#00e1ff]/5 translate-y-0'
        : 'bg-[#0f1729] translate-y-0',
      isScrollingDown ? '-translate-y-full' : 'translate-y-0',
    ]"
    :style="{
      '--primary': '#00e1ff',
      '--secondary': '#1bd4c1',
      '--bg': '#0f1729',
      '--card': '#111827',
    }"
  >
    <!-- Scroll progress indicator -->
    <div
      v-if="scrolled"
      class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] transition-all duration-1000"
      :style="{ width: `${scrollProgress}%` }"
    ></div>

    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center gap-3 group"
          @mouseenter="startLogoAnimation"
          @mouseleave="resetLogoAnimation"
        >
          <!-- Animated Logo Container -->
          <div class="relative">
            <!-- Outer glow effect -->
            <div
              class="absolute -inset-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-xl opacity-20 blur-md group-hover:opacity-30 group-hover:blur-lg transition-all duration-500"
            ></div>

            <!-- Logo background with gradient border -->
            <div class="relative">
              <!-- Animated gradient border -->
              <div
                class="absolute -inset-0.5 bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] rounded-xl opacity-80 blur"
                :class="{ 'animate-gradient-border': logoAnimated }"
              ></div>

              <!-- Main logo -->
              <div
                class="relative w-12 h-12 rounded-xl bg-[#111827] flex items-center justify-center"
              >
                <!-- Animated code symbol -->
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
                      :class="{ 'animate-pulse': logoAnimated }"
                    />
                  </svg>

                  <!-- Pulsing dot -->
                  <div
                    class="absolute -top-1 -right-1 w-2 h-2 bg-[#1bd4c1] rounded-full"
                    :class="{ 'animate-ping': logoAnimated }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Company Name with Gradient -->
          <div class="relative">
            <h1
              class="text-2xl font-bold bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            >
              AFTECH
            </h1>
            <p class="text-xs text-[#94a3b8] font-medium mt-0.5">
              Software Development
            </p>

            <!-- Underline animation -->
            <div
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] group-hover:w-full transition-all duration-500"
            ></div>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :class="[
              'relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group/nav-item',
              route.path === item.path
                ? 'text-white bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10'
                : 'text-[#94a3b8] hover:text-white',
            ]"
            @mouseenter="setActiveHover(item.path)"
            @mouseleave="resetActiveHover"
          >
            <!-- Active indicator -->
            <div
              v-if="route.path === item.path"
              class="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00e1ff]/20 to-[#1bd4c1]/20"
            ></div>

            <!-- Hover indicator -->
            <div
              class="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 opacity-0 group-hover/nav-item:opacity-100 transition-opacity duration-300"
              v-show="!route.path === item.path"
            ></div>

            <span class="relative z-10 flex items-center gap-2">
              {{ item.name }}
              <svg
                v-if="route.path === item.path"
                class="w-4 h-4 text-[#00e1ff] animate-pulse"
                viewBox="0 0 20 20"
                fill="currentColor"
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
              class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full"
            ></div>
          </NuxtLink>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden lg:flex items-center gap-4">
          <!-- Contact Button -->
          <NuxtLink
            to="/contact"
            class="group/contact relative px-6 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-300"
          >
            <!-- Gradient background -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1]"
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
              class="relative z-10 text-[#0f1729] font-bold flex items-center gap-2"
            >
              Get Started
              <svg
                class="w-4 h-4 group-hover/contact:translate-x-1 transition-transform duration-300"
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
          class="lg:hidden relative p-2 rounded-lg bg-[#111827] border border-[#334155] hover:border-[#00e1ff]/30 transition-all duration-300 group/menu"
          aria-label="Toggle menu"
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
            ></span>
            <span
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full transition-all duration-300"
              :class="isMobileOpen ? 'opacity-0' : 'opacity-100'"
            ></span>
            <span
              class="absolute left-0 w-6 h-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full transition-all duration-300"
              :class="
                isMobileOpen
                  ? 'top-1/2 transform -translate-y-1/2 -rotate-45'
                  : 'bottom-0'
              "
            ></span>
          </div>

          <!-- Background glow -->
          <div
            class="absolute -inset-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-lg opacity-0 group-hover/menu:opacity-10 blur transition-opacity duration-300"
          ></div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMobileOpen"
        class="lg:hidden overflow-hidden transition-all duration-300"
        :class="isMobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'"
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
                <span>{{ item.name }}</span>
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
              <!-- Contact Button Mobile -->
              <NuxtLink
                to="/contact"
                @click="closeMobileMenu"
                class="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] text-[#0f1729] font-semibold text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,225,255,0.3)]"
              >
                Contact Us
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Add padding to main content to prevent hiding -->
  <div :class="['transition-all duration-300', scrolled ? 'pt-20' : 'pt-20']">
    <slot />
  </div>
</template>

<script setup>
const route = useRoute();

// Define navigation items
const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

// Reactive states
const scrolled = ref(false);
const isMobileOpen = ref(false);
const logoAnimated = ref(false);
const isScrollingDown = ref(false);
const scrollProgress = ref(0);
const lastScrollY = ref(0);
const scrollTimeout = ref(null);

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

// Scroll detection with hide/show animation and progress tracking
const handleScroll = () => {
  // Clear any existing timeout
  if (scrollTimeout.value) {
    clearTimeout(scrollTimeout.value);
  }

  const currentScrollY = window.scrollY;

  // Calculate scroll progress
  calculateScrollProgress();

  // Show/hide navbar on scroll
  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    // Scrolling down & past 100px
    isScrollingDown.value = true;
  } else if (currentScrollY < lastScrollY.value) {
    // Scrolling up
    isScrollingDown.value = false;
  }

  // Update scroll state for background
  scrolled.value = currentScrollY > 20;

  // Update last scroll position
  lastScrollY.value = currentScrollY;

  // Auto-show navbar when at top
  if (currentScrollY <= 100) {
    isScrollingDown.value = false;
  }

  // Set timeout to show navbar after scrolling stops
  scrollTimeout.value = setTimeout(() => {
    isScrollingDown.value = false;
  }, 150);
};

onMounted(() => {
  // Set dark mode as default
  document.documentElement.classList.add("dark");

  // Initialize scroll position
  lastScrollY.value = window.scrollY;

  // Calculate initial scroll progress
  calculateScrollProgress();

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll, { passive: true });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
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
</script>

<style>
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

@keyframes gradient-border {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes slide-down {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
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

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, transform, opacity,
    box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Focus styles for accessibility */
:focus-visible {
  outline: 2px solid #00e1ff;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Page content padding fix */
main {
  min-height: 100vh;
}
</style>
