<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-bg-color to-gray-900"
  >
    <!-- Animated background elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1bd4c1]/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      ></div>
    </div>

    <!-- Grid pattern overlay -->
    <div
      class="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none"
    ></div>

    <div class="relative min-h-screen flex items-center justify-center p-4">
      <div class="relative z-10 w-full max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left side - Error code with animations -->
          <div class="text-center lg:text-left">
            <div class="relative inline-block">
              <!-- Animated gradient ring -->
              <div
                class="absolute -inset-4 bg-gradient-to-r from-primary to-[#1bd4c1] rounded-full blur-xl opacity-50 animate-pulse"
              ></div>

              <!-- Glowing effect -->
              <div
                class="absolute -inset-2 bg-gradient-to-r from-primary/20 to-[#1bd4c1]/20 rounded-full blur-lg animate-ping"
              ></div>

              <!-- Main 404 display -->
              <div class="relative">
                <div
                  class="text-9xl font-bold tracking-tighter bg-gradient-to-r from-primary via-[#1bd4c1] to-primary bg-clip-text text-transparent animate-gradient"
                >
                  404
                </div>
              </div>
            </div>

            <div class="mt-8 space-y-4">
              <div
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-color/50 backdrop-blur-sm border border-gray-700/50"
              >
                <div
                  class="w-2 h-2 bg-primary rounded-full animate-pulse"
                ></div>
                <span class="text-sm text-gray-400 font-mono"
                  >HTTP_STATUS: NOT_FOUND</span
                >
              </div>

              <h1 class="text-5xl font-bold text-white mt-6">
                Resource
                <span
                  class="bg-gradient-to-r from-primary to-[#1bd4c1] bg-clip-text text-transparent"
                >
                  Not Found
                </span>
              </h1>
            </div>
          </div>

          <!-- Right side - Content and actions -->
          <div
            class="bg-card-color/80 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 shadow-2xl"
          >
            <div class="space-y-8">
              <!-- Error details card -->
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="p-2 bg-primary/10 rounded-lg">
                    <svg
                      class="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.162 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <h2 class="text-2xl font-bold text-white">
                    Route Error Detected
                  </h2>
                </div>

                <div
                  class="font-mono text-sm bg-gray-900/50 rounded-lg p-4 border border-gray-800"
                >
                  <div class="text-gray-400">> Attempted to access:</div>
                  <div class="text-primary mt-1 break-all">
                    {{ route.path }}
                  </div>
                  <div class="text-gray-400 mt-3">
                    > Status: <span class="text-red-400">404</span>
                  </div>
                  <div class="text-gray-400">
                    > Timestamp: {{ new Date().toLocaleTimeString() }}
                  </div>
                </div>
              </div>

              <!-- Action buttons -->
              <div class="space-y-4">
                <h3 class="text-lg font-semibold text-gray-300">
                  Quick Actions
                </h3>

                <div class="grid sm:grid-cols-2 gap-4">
                  <button
                    @click="goBack"
                    class="group relative p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-[#1bd4c1]/5 rounded-xl transition-all duration-300"
                    ></div>
                    <div class="relative flex items-center gap-3">
                      <div
                        class="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                      >
                        <svg
                          class="w-5 h-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                          />
                        </svg>
                      </div>
                      <div class="text-left">
                        <div class="font-semibold text-white">Go Back</div>
                        <div class="text-sm text-gray-400">
                          Return to previous page
                        </div>
                      </div>
                    </div>
                  </button>

                  <NuxtLink
                    to="/"
                    class="group relative p-4 rounded-xl bg-gradient-to-br from-primary/20 to-[#1bd4c1]/20 hover:from-primary/30 hover:to-[#1bd4c1]/30 border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div class="relative flex items-center gap-3">
                      <div
                        class="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors"
                      >
                        <svg
                          class="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <div class="text-left">
                        <div class="font-semibold text-white">Dashboard</div>
                        <div class="text-sm text-gray-300">Go to homepage</div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>

                <!-- Additional options -->
                <div class="pt-6 border-t border-gray-800">
                  <h4 class="text-gray-400 text-sm font-semibold mb-3">
                    Other Options
                  </h4>
                  <div class="flex flex-wrap gap-3">
                    <button
                      @click="copyError"
                      class="px-4 py-2 text-sm rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                    >
                      Copy Error Details
                    </button>
                    <button
                      @click="reloadPage"
                      class="px-4 py-2 text-sm rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                    >
                      Reload Page
                    </button>
                    <NuxtLink
                      to="/support"
                      class="px-4 py-2 text-sm rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                    >
                      Report Issue
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Console-like footer -->
        <div class="mt-16 text-center">
          <div
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800"
          >
            <div class="w-2 h-2 bg-[#1bd4c1] rounded-full animate-pulse"></div>
            <span class="text-sm text-gray-400 font-mono">
              > Terminal: <span class="text-primary">npm run dev</span> |
              Server: <span class="text-[#1bd4c1]">running</span> | Port:
              <span class="text-gray-300">3000</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "#imports";

const route = useRoute();
const router = useRouter();

// Log 404 error
console.error(
  "404 Error: User attempted to access non-existent route:",
  route.path
);

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push("/");
  }
};

const copyError = () => {
  const errorDetails = `404 Error - Route: ${
    route.path
  }\nTimestamp: ${new Date().toISOString()}`;
  navigator.clipboard.writeText(errorDetails);
  // You could add a toast notification here
  alert("Error details copied to clipboard!");
};

const reloadPage = () => {
  window.location.reload();
};
</script>

<style>
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
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

.bg-grid-pattern {
  background-image: linear-gradient(
      to right,
      rgba(0, 225, 255, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 225, 255, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

.bg-color {
  background-color: #0f1729;
}

.card-color {
  background-color: #111827;
}

.primary {
  color: #00e1ff;
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
  background: linear-gradient(to bottom, #00e1ff, #00e1ff);
}
</style>

<style scoped>
/* Add these to your tailwind.config.js for full customization */
/*
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#00e1ff',
        'secondary': '#1bd4c1',
        'bg-color': '#0f1729',
        'card-color': '#111827',
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
      }
    }
  }
}
*/
</style>
