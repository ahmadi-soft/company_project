<template>
  <Teleport to="body">
    <transition name="modal-fade">
      <div
        v-if="show"
        class="fixed inset-0 z-[9999]"
        aria-modal="true"
        role="dialog"
        @keydown.esc="close"
      >
        <!-- Animated Gradient Backdrop -->
        <transition name="backdrop-fade">
          <div
            v-if="show"
            class="fixed inset-0 bg-gradient-to-br from-[#0f1729]/95 via-[#0f1729]/90 to-[#0f1729]/95 backdrop-blur-xl"
            @click="close"
          >
            <!-- Animated particles -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                v-for="i in 15"
                :key="i"
                class="absolute w-1 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full opacity-20 animate-float"
                :style="{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }"
              ></div>
            </div>
          </div>
        </transition>

        <!-- Modal Container -->
        <div
          class="fixed inset-0 flex items-center justify-center p-4 pointer-events-none"
        >
          <transition name="modal-slide">
            <div
              v-if="show"
              class="relative pointer-events-auto w-full max-w-md"
            >
              <!-- Modern Glass Card -->
              <div
                class="relative bg-gradient-to-br from-[#0f1729]/90 to-[#111827]/90 backdrop-blur-xl border border-[#1e293b]/50 rounded-3xl shadow-2xl shadow-[#00e1ff]/10 overflow-hidden"
              >
                <!-- Animated Border -->
                <div class="absolute -inset-1 overflow-hidden rounded-3xl">
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] opacity-30 animate-gradient-slow"
                    :style="{ backgroundSize: '400% 400%' }"
                  ></div>
                  <div
                    class="absolute inset-[2px] bg-gradient-to-br from-[#0f1729] to-[#111827] rounded-3xl"
                  ></div>
                </div>

                <!-- Header -->
                <div
                  class="relative p-6 border-b border-[#1e293b]/50 bg-gradient-to-r from-transparent via-[#00e1ff]/5 to-transparent"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <div
                        class="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#00e1ff]/20 to-[#1bd4c1]/20 flex items-center justify-center shadow-lg shadow-[#00e1ff]/10"
                      >
                        <svg
                          class="w-6 h-6 text-[#00e1ff]"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V6H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z"
                            fill="currentColor"
                          />
                        </svg>
                        <!-- Pulsing dot -->
                        <div
                          class="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-ping"
                        ></div>
                      </div>
                      <div>
                        <h3
                          class="text-xl font-bold bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent"
                        >
                          {{ t("language_modal.title") }}
                        </h3>
                        <p class="text-sm text-[#94a3b8] mt-1 font-medium">
                          {{ t("language_modal.subtitle") }}
                        </p>
                      </div>
                    </div>
                    <button
                      @click="close"
                      class="group/close relative w-9 h-9 flex items-center justify-center text-[#94a3b8] hover:text-white transition-all duration-300 rounded-lg hover:bg-[#1e293b]"
                      :aria-label="t('language_modal.close')"
                    >
                      <svg
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <!-- Hover glow -->
                      <div
                        class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-lg opacity-0 group-hover/close:opacity-10 blur transition-opacity duration-300"
                      ></div>
                    </button>
                  </div>

                  <!-- Current Selection Badge -->
                  <div
                    class="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 border border-[#00e1ff]/20"
                  >
                    <span class="text-sm font-medium text-white">
                      {{ t("language_modal.current") }}:
                      <span class="text-[#00e1ff]">
                        {{ getLanguageName(current) }}
                      </span>
                    </span>
                  </div>
                </div>

                <!-- Language Options -->
                <div class="p-6 space-y-3">
                  <button
                    v-for="lang in languages"
                    :key="lang.code"
                    @click="choose(lang.code)"
                    :class="[
                      'group/language relative w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300',
                      current === lang.code
                        ? 'bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 border-2 border-[#00e1ff]/40 shadow-lg shadow-[#00e1ff]/10'
                        : 'hover:bg-[#1e293b]/50 border-2 border-transparent hover:border-[#1e293b]/30',
                    ]"
                  >
                    <!-- Flag Container -->
                    <div
                      class="relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden shadow-lg"
                      :class="{
                        'ring-2 ring-[#00e1ff] ring-offset-2 ring-offset-[#0f1729]':
                          current === lang.code,
                      }"
                    >
                      <!-- Gradient Background -->
                      <div
                        class="absolute inset-0 bg-gradient-to-br from-[#111827] to-[#1e293b]"
                      ></div>

                      <!-- Flag Content -->
                      <div
                        class="relative w-full h-full flex items-center justify-center"
                      >
                        <span class="text-2xl">{{ lang.flag }}</span>
                      </div>

                      <!-- Shine Effect -->
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/language:opacity-100 transition-opacity duration-500"
                        :style="{
                          transform: 'translateX(-100%)',
                        }"
                      ></div>
                    </div>

                    <!-- Language Details -->
                    <div class="flex-1 text-left min-w-0">
                      <div class="flex items-center justify-between mb-1">
                        <span
                          class="font-semibold text-white truncate"
                          :class="{
                            'bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] bg-clip-text text-transparent':
                              current === lang.code,
                          }"
                        >
                          {{ lang.name }}
                        </span>
                        <span
                          :class="[
                            'text-xs font-bold px-2 py-1 rounded-full transition-all duration-300',
                            current === lang.code
                              ? 'bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] text-[#0f1729]'
                              : 'bg-[#1e293b] text-[#94a3b8]',
                          ]"
                        >
                          {{ lang.code.toUpperCase() }}
                        </span>
                      </div>
                      <p class="text-sm text-[#94a3b8] truncate">
                        {{ lang.native }}
                      </p>

                      <!-- Additional Info -->
                      <div
                        v-if="lang.code === 'ar'"
                        class="mt-1 flex items-center gap-1 text-xs"
                      >
                        <span class="text-[#1bd4c1] font-medium">RTL</span>
                        <span class="text-[#64748b]"
                          >• Right-to-left layout</span
                        >
                      </div>
                    </div>

                    <!-- Selection Indicator -->
                    <div
                      :class="[
                        'w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300',
                        current === lang.code
                          ? 'bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] shadow-lg shadow-[#00e1ff]/30'
                          : 'border-2 border-[#334155] group-hover/language:border-[#00e1ff]/50',
                      ]"
                    >
                      <svg
                        v-if="current === lang.code"
                        class="w-3 h-3 text-[#0f1729]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>

                    <!-- Hover Gradient -->
                    <div
                      class="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00e1ff]/5 to-[#1bd4c1]/5 opacity-0 group-hover/language:opacity-100 transition-opacity duration-300 -z-10"
                    ></div>
                  </button>
                </div>

                <!-- Footer -->
                <div
                  class="relative p-6 border-t border-[#1e293b]/50 bg-gradient-to-t from-[#0f1729] to-transparent"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 text-sm text-[#94a3b8]">
                      <svg
                        class="w-4 h-4 text-[#00e1ff]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="font-medium">
                        {{
                          t("language_modal.available", {
                            count: languages.length,
                          })
                        }}
                      </span>
                    </div>

                    <div class="flex items-center gap-3">
                      <button
                        @click="close"
                        class="px-4 py-2.5 rounded-lg font-medium text-[#94a3b8] hover:text-white hover:bg-[#1e293b] transition-all duration-300"
                      >
                        {{ t("language_modal.close") }}
                      </button>
                      <button
                        @click="applyLanguage"
                        class="group/apply relative px-5 py-2.5 rounded-xl font-semibold text-[#0f1729] overflow-hidden transition-all duration-300"
                      >
                        <!-- Gradient Background -->
                        <div
                          class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] transition-opacity duration-300"
                        ></div>
                        <!-- Hover Overlay -->
                        <div
                          class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] opacity-0 group-hover/apply:opacity-100 transition-opacity duration-300"
                        ></div>
                        <!-- Shine Effect -->
                        <div class="absolute inset-0 overflow-hidden">
                          <div
                            class="absolute -inset-y-full -left-20 w-20 bg-white/20 skew-x-12 group-hover/apply:left-full transition-all duration-1000"
                          ></div>
                        </div>
                        <span
                          class="relative z-10 flex items-center gap-2 font-bold"
                        >
                          {{ t("language_modal.done") }}
                          <svg
                            class="w-4 h-4 group-hover/apply:translate-x-1 transition-transform duration-300"
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
                      </button>
                    </div>
                  </div>

                  <!-- Corner Accents -->
                  <div
                    class="absolute top-0 left-6 w-8 h-px bg-gradient-to-r from-transparent via-[#00e1ff] to-transparent"
                  ></div>
                  <div
                    class="absolute top-0 right-6 w-8 h-px bg-gradient-to-r from-transparent via-[#1bd4c1] to-transparent"
                  ></div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { watch, ref, onMounted, onUnmounted, computed } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({ show: { type: Boolean, default: true } });
const emits = defineEmits(["update:show", "select", "close"]);

const { locale, t } = useI18n();

const languages = ref([
  {
    code: "en",
    name: "English",
    native: "English",
    flag: "🇺🇸",
    color: "from-blue-500 to-cyan-500",
  },
  {
    code: "zh",
    name: "Chinese",
    native: "简体中文",
    flag: "🇨🇳",
    color: "from-red-500 to-orange-500",
  },
  {
    code: "ar",
    name: "Arabic",
    native: "العربية",
    flag: "🇸🇦",
    color: "from-green-500 to-emerald-500",
  },
]);

// FIXED: Initialize from localStorage or i18n locale
const current = ref(locale.value);

// Load saved locale on component mount
onMounted(() => {
  try {
    const savedLocale = localStorage.getItem("locale");
    if (
      savedLocale &&
      languages.value.some((lang) => lang.code === savedLocale)
    ) {
      current.value = savedLocale;
      locale.value = savedLocale;
    }
  } catch (e) {
    console.warn("Could not access localStorage:", e);
  }
});

// Get language name by code
const getLanguageName = (code) => {
  const lang = languages.value.find((l) => l.code === code);
  return lang ? lang.name : "English";
};

function close() {
  emits("update:show", false);
  emits("close");
}

// FIXED: Proper language change function
function choose(code) {
  current.value = code;
}

function applyLanguage() {
  const selectedLang = languages.value.find(
    (lang) => lang.code === current.value
  );

  if (selectedLang) {
    // Update i18n locale
    locale.value = selectedLang.code;

    // Persist to localStorage
    try {
      localStorage.setItem("locale", selectedLang.code);
    } catch (e) {
      console.warn("Could not save to localStorage:", e);
    }

    // Emit event
    emits("select", selectedLang.code);

    // Update HTML dir attribute for RTL languages
    if (selectedLang.code === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = selectedLang.code;
    }
  }

  close();
}

// Handle body scroll
watch(
  () => props.show,
  (val) => {
    if (typeof document !== "undefined") {
      if (val) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight =
          window.innerWidth - document.documentElement.clientWidth + "px";
      } else {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    }
  }
);

// Close on ESC
const handleEscape = (e) => {
  if (e.key === "Escape" && props.show) {
    close();
  }
};

// Prevent scroll when modal is open
const preventScroll = (e) => {
  if (props.show) {
    e.preventDefault();
  }
};

// Handle keyboard and scroll events
watch(
  () => props.show,
  (val) => {
    if (typeof window !== "undefined") {
      if (val) {
        window.addEventListener("keydown", handleEscape);
        window.addEventListener("wheel", preventScroll, { passive: false });
        window.addEventListener("touchmove", preventScroll, { passive: false });
      } else {
        window.removeEventListener("keydown", handleEscape);
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
      }
    }
  }
);

// Cleanup on unmount
onUnmounted(() => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }
  if (typeof window !== "undefined") {
    window.removeEventListener("keydown", handleEscape);
    window.removeEventListener("wheel", preventScroll);
    window.removeEventListener("touchmove", preventScroll);
  }
});
</script>

<style scoped>
/* Backdrop fade animation */
.backdrop-fade-enter-active,
.backdrop-fade-leave-active {
  transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
}
.backdrop-fade-enter-from,
.backdrop-fade-leave-to {
  opacity: 0;
}

/* Modal slide animation */
.modal-slide-enter-active,
.modal-slide-leave-active {
  transition: all 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.modal-slide-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
.modal-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

/* Modal fade animation */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 300ms ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Custom animations */
@keyframes gradient-slow {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) translateX(0);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-15px) translateX(10px);
    opacity: 0.4;
  }
}

.animate-gradient-slow {
  animation: gradient-slow 8s ease infinite;
  background-size: 400% 400%;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Smooth transitions for interactive elements */
button {
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: rgba(30, 41, 59, 0.3);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #00e1ff, #1bd4c1);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #1bd4c1, #00e1ff);
}

/* Glass effect enhancement */
.glass-effect {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Text truncation for long language names */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
