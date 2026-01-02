<template>
  <section class="relative py-16 md:py-24 lg:py-32 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-bg">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute inset-0"
          :style="{
            backgroundImage: `
              linear-gradient(to right, #00e1ff22 1px, transparent 1px),
              linear-gradient(to bottom, #1bd4c122 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }"
        ></div>
      </div>

      <!-- Animated Orbs -->
      <div
        class="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full opacity-5 blur-3xl animate-pulse-slow"
        ></div>
      </div>
      <div
        class="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px]"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] rounded-full opacity-5 blur-3xl animate-pulse-slow"
          style="animation-delay: 2s"
        ></div>
      </div>

      <!-- Floating Quote Marks -->
      <div class="absolute top-10 left-4 md:top-20 md:left-10 opacity-10">
        <div class="text-5xl md:text-7xl lg:text-9xl font-serif text-primary">
          "
        </div>
      </div>
      <div
        class="absolute bottom-10 right-4 md:bottom-20 md:right-10 opacity-10"
      >
        <div class="text-5xl md:text-7xl lg:text-9xl font-serif text-secondary">
          "
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header Section -->
      <div class="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
        <!-- Animated Badge -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 border border-primary/20 hover:border-[#00e1ff]/30 transition-all duration-300 mb-4 md:mb-6 group/badge"
        >
          <!-- Pulsing dots -->
          <div class="relative">
            <div
              class="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-ping"
            ></div>
            <div
              class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full blur opacity-30"
            ></div>
          </div>
          <span
            class="text-xs md:text-sm font-medium text-textPrimary tracking-wider"
            >{{ t("testimonials.badge") }}</span
          >
          <div class="relative">
            <div
              class="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-ping"
              style="animation-delay: 0.5s"
            ></div>
            <div
              class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full blur opacity-30"
            ></div>
          </div>
        </div>

        <!-- Main Heading -->
        <h2
          class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6"
        >
          <span class="text-textPrimary">{{
            t("testimonials.title.part1")
          }}</span>
          <span class="block mt-2 md:mt-4">
            <span
              class="bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            >
              {{ t("testimonials.title.highlight") }}
            </span>
          </span>
        </h2>

        <!-- Description -->
        <p
          class="text-sm sm:text-base md:text-lg lg:text-xl text-[#cbd5e1] max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
        >
          {{ t("testimonials.description.prefix") }}
          <span class="text-[#00e1ff] font-medium">{{
            t("testimonials.description.brand")
          }}</span>
          {{ t("testimonials.description.suffix") }}
        </p>

        <!-- Stats Row -->
        <div
          class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#334155]/30"
        >
          <div
            v-for="stat in stats"
            :key="stat.labelKey"
            class="text-center px-2 sm:px-0"
          >
            <div
              class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] bg-clip-text text-transparent mb-1"
            >
              {{ stat.value }}
            </div>
            <div
              class="text-xs sm:text-sm text-[#94a3b8] uppercase tracking-wider"
            >
              {{ t(stat.labelKey) }}
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonials Swiper -->
      <div class="relative max-w-4xl lg:max-w-6xl mx-auto">
        <Swiper
          ref="swiperRef"
          :modules="[Navigation, Pagination, Autoplay, EffectFade]"
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :speed="500"
          :effect="'fade'"
          :fade-effect="{ crossFade: true }"
          :navigation="{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }"
          :pagination="{
            el: '.custom-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class='${className}'></span>`;
            },
          }"
          :breakpoints="{
            320: {
              spaceBetween: 16,
            },
            640: {
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 30,
            },
          }"
          class="testimonial-swiper"
          @swiper="onSwiper"
        >
          <SwiperSlide
            v-for="testimonial in testimonials"
            :key="testimonial.id"
          >
            <div class="max-w-4xl mx-auto px-2 sm:px-4">
              <!-- Testimonial Card -->
              <div class="relative group/testimonial">
                <!-- Outer glow -->
                <div
                  class="absolute -inset-0.5 bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] rounded-xl md:rounded-2xl lg:rounded-3xl opacity-0 group-hover/testimonial:opacity-30 blur transition-opacity duration-500 animate-gradient-border -z-10"
                ></div>

                <!-- Main Card -->
                <div
                  class="relative rounded-xl md:rounded-2xl lg:rounded-3xl bg-bg shadow-lgx border border-border group-hover/testimonial:border-[#00e1ff]/30 overflow-hidden transition-all duration-500"
                >
                  <!-- Background pattern -->
                  <div class="absolute inset-0 opacity-5">
                    <div
                      class="absolute inset-0"
                      :style="{
                        backgroundImage:
                          'radial-gradient(circle at 30% 20%, #00e1ff 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                      }"
                    ></div>
                  </div>

                  <!-- Content -->
                  <div class="relative p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                    <!-- Quote Icon -->
                    <div class="relative mb-4 md:mb-6 lg:mb-8">
                      <div
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#00e1ff] opacity-20"
                      >
                        "
                      </div>
                      <div
                        class="absolute top-0 left-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#1bd4c1] opacity-10"
                      >
                        "
                      </div>
                    </div>

                    <!-- Rating Stars -->
                    <div class="flex gap-0.5 sm:gap-1 mb-4 md:mb-6 lg:mb-8">
                      <svg
                        v-for="i in 5"
                        :key="i"
                        class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                        :class="
                          i <= testimonial.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-600'
                        "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </div>

                    <!-- Quote Text -->
                    <p
                      class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#cbd5e1] leading-relaxed mb-6 md:mb-8"
                    >
                      "{{ testimonial.quote }}"
                    </p>

                    <!-- Author Info -->
                    <div
                      class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
                    >
                      <!-- Avatar -->
                      <div class="relative self-start">
                        <!-- Gradient border -->
                        <div
                          class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full blur opacity-30"
                        ></div>
                        <!-- Avatar image -->
                        <img
                          :src="testimonial.avatar"
                          :alt="testimonial.author"
                          class="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-primary/40"
                        />
                      </div>

                      <!-- Author details -->
                      <div class="flex-1">
                        <div
                          class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0"
                        >
                          <div>
                            <p
                              class="text-base sm:text-lg md:text-xl font-bold text-textPrimary"
                            >
                              {{ testimonial.author }}
                            </p>
                            <p
                              class="text-xs sm:text-sm md:text-[#94a3b8] text-[#94a3b8]"
                            >
                              {{ testimonial.role }}
                            </p>
                          </div>
                          <!-- Company logo/icon -->
                          <div class="relative self-start sm:self-auto">
                            <div
                              class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 flex items-center justify-center"
                            >
                              <div
                                class="text-xs sm:text-sm font-bold text-[#00e1ff]"
                              >
                                {{ testimonial.companyInitial }}
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Project info -->
                        <div
                          class="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border"
                        >
                          <div class="flex flex-wrap gap-1.5 sm:gap-2">
                            <span
                              v-for="tag in testimonial.tags"
                              :key="tag"
                              class="px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm rounded-full bg-[#1e293b] border border-[#334155] text-[#cbd5e1]"
                            >
                              {{ tag }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Result metrics -->
                    <div
                      class="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border"
                    >
                      <div
                        class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
                      >
                        <div
                          v-for="metric in testimonial.metrics"
                          :key="metric.label"
                          class="text-center"
                        >
                          <div
                            class="text-lg sm:text-xl md:text-2xl font-bold text-textPrimary mb-1"
                          >
                            {{ metric.value }}
                          </div>
                          <div
                            class="text-[10px] xs:text-xs text-[#94a3b8] uppercase tracking-wider"
                          >
                            {{
                              t(`testimonials.metrics_labels.${metric.label}`)
                            }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Bottom gradient bar -->
                  <div
                    class="h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1]"
                  ></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Custom Navigation Buttons -->
        <div class="swiper-navigation">
          <button
            @click="prevSlide"
            class="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 max-sm:left-5 sm:-translate-x-6 md:-translate-x-8 lg:-translate-x-12 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#111827] border border-[#334155] hover:border-[#00e1ff] hover:bg-[#00e1ff]/10 flex items-center justify-center transition-all duration-300 group/prev"
            aria-label="Previous testimonial"
          >
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover/prev:text-[#00e1ff] transition-colors duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <button
            @click="nextSlide"
            class="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 max-sm:right-5 sm:translate-x-6 md:translate-x-8 lg:translate-x-12 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#111827] border border-[#334155] hover:border-[#1bd4c1] hover:bg-[#1bd4c1]/10 flex items-center justify-center transition-all duration-300 group/next"
            aria-label="Next testimonial"
          >
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover/next:text-[#1bd4c1] transition-colors duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <!-- Custom Pagination Dots -->
        <div
          class="custom-pagination flex justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-10 md:mt-12"
        ></div>
      </div>

      <!-- Company Logos Section -->
      <div
        class="mt-16 md:mt-20 lg:mt-24 pt-12 md:pt-16 border-t border-primary/30"
      >
        <div class="text-center mb-8 md:mb-10 lg:mb-12">
          <h3
            class="text-xl sm:text-2xl md:text-3xl font-bold text-textPrimary mb-3 md:mb-4"
          >
            {{ t("testimonials.company.title") }}
          </h3>
          <p
            class="text-sm sm:text-base text-[#94a3b8] max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0"
          >
            {{ t("testimonials.company.description") }}
          </p>
        </div>

        <!-- Logos Grid -->
        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8"
        >
          <div
            v-for="company in companies"
            :key="company.name"
            class="group/company relative"
          >
            <!-- Company logo container -->
            <div
              class="relative h-16 sm:h-18 md:h-20 flex items-center justify-center"
            >
              <!-- Background effect -->
              <div
                class="absolute inset-0 bg-bg rounded-lg sm:rounded-xl border group-hover/company:border-primary/30 transition-all duration-300 opacity-0 group-hover/company:opacity-100"
              ></div>

              <!-- Logo placeholder -->
              <div
                class="relative z-10 text-lg sm:text-xl md:text-2xl font-bold text-[#334155] group-hover/company:text-[#00e1ff] transition-colors duration-300"
              >
                {{ company.initial }}
              </div>

              <!-- Tooltip on hover -->
              <div
                class="absolute -bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2 bg-[#111827] border border-[#334155] px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg opacity-0 group-hover/company:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap text-xs sm:text-sm"
              >
                <span class="text-white">{{ company.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16 md:mt-20 lg:mt-24">
        <div class="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto px-2 sm:px-0">
          <h3
            class="text-xl sm:text-2xl md:text-3xl font-bold text-textPrimary mb-3 md:mb-4"
          >
            {{ t("testimonials.cta.title") }}
          </h3>
          <p
            class="text-sm sm:text-base md:text-lg text-[#cbd5e1] mb-6 md:mb-8"
          >
            {{ t("testimonials.cta.description") }}
          </p>
          <NuxtLink
            to="/contact"
            class="group/cta inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 relative overflow-hidden"
          >
            <!-- Gradient background -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-lg sm:rounded-xl"
            ></div>

            <!-- Hover gradient overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] opacity-0 group-hover/cta:opacity-100 rounded-lg sm:rounded-xl transition-opacity duration-300"
            ></div>

            <!-- Content -->
            <span
              class="relative z-10 text-[#0f1729] font-bold flex items-center gap-2 sm:gap-3"
            >
              {{ t("testimonials.cta.button") }}
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5 group-hover/cta:translate-x-1 sm:group-hover/cta:translate-x-2 transition-transform duration-300"
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
              class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-lg sm:rounded-xl blur opacity-0 group-hover/cta:opacity-30 transition-opacity duration-300 -z-10"
            ></div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const { t } = useI18n();

// Swiper instance
const swiperRef = ref(null);
const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const nextSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

const prevSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

// Handle keyboard navigation
const handleKeyDown = (event) => {
  if (swiperInstance.value) {
    if (event.key === "ArrowLeft") {
      prevSlide();
    } else if (event.key === "ArrowRight") {
      nextSlide();
    }
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyDown);
});

// Stats data
const stats = [
  { value: "98%", labelKey: "testimonials.stats.client_satisfaction" },
  { value: "150+", labelKey: "testimonials.stats.projects_delivered" },
  { value: "40%", labelKey: "testimonials.stats.avg_growth" },
  { value: "24/7", labelKey: "testimonials.stats.support_available" },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote:
      "AFTECH transformed our vision into a world-class platform. Their technical expertise and attention to detail exceeded our expectations, delivering a solution that scaled beautifully as our user base grew 300% in 6 months.",
    author: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "FinTrack Global",
    companyInitial: "FG",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    tags: ["FinTech", "Scalability", "Cloud Migration"],
    metrics: [
      { value: "300%", label: "User Growth" },
      { value: "2.5s", label: "Load Time" },
      { value: "99.9%", label: "Uptime" },
      { value: "40%", label: "Cost Reduction" },
    ],
  },
  {
    id: 2,
    quote:
      "The team delivered our healthcare mobile app ahead of schedule with outstanding quality. They truly understood our domain's compliance requirements while creating an intuitive patient experience that reduced appointment no-shows by 65%.",
    author: "Dr. Michael Roberts",
    role: "Chief Executive Officer",
    company: "MedTech Solutions",
    companyInitial: "MS",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    tags: ["Healthcare", "Mobile App", "Compliance"],
    metrics: [
      { value: "65%", label: "No-Show Reduction" },
      { value: "4.8", label: "App Rating" },
      { value: "50k+", label: "Monthly Users" },
      { value: "HIPAA", label: "Compliant" },
    ],
  },
  {
    id: 3,
    quote:
      "Exceptional work on our e-commerce platform. The performance optimizations alone increased our conversions by 40% while reducing infrastructure costs by 30%. Their ongoing support has been invaluable as we expand globally.",
    author: "Emma Thompson",
    role: "Founder & CEO",
    company: "Green Living Co",
    companyInitial: "GL",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    tags: ["E-commerce", "Performance", "Global Expansion"],
    metrics: [
      { value: "40%", label: "Conversion Increase" },
      { value: "30%", label: "Cost Reduction" },
      { value: "5x", label: "Sales Growth" },
      { value: "15", label: "Countries Launched" },
    ],
  },
];

// Company logos data
const companies = [
  { name: "FinTech Innovations", initial: "FI" },
  { name: "HealthTech Systems", initial: "HS" },
  { name: "Green Energy Solutions", initial: "GE" },
  { name: "Smart Retail Tech", initial: "SR" },
  { name: "EduTech Platforms", initial: "EP" },
  { name: "Logistics Pro", initial: "LP" },
];
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

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* Swiper Custom Styles */
.testimonial-swiper {
  padding: 16px 4px 32px !important;
}

@media (min-width: 640px) {
  .testimonial-swiper {
    padding: 20px 10px 40px !important;
  }
}

/* Custom pagination dots */
.custom-pagination span {
  width: 8px;
  height: 8px;
  background: #334155;
  opacity: 1;
  transition: all 0.3s ease;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 2px;
}

@media (min-width: 640px) {
  .custom-pagination span {
    width: 10px;
    height: 10px;
    margin: 0 3px;
  }
}

@media (min-width: 768px) {
  .custom-pagination span {
    width: 12px;
    height: 12px;
    margin: 0 4px;
  }
}

.custom-pagination span.swiper-pagination-bullet-active {
  background: linear-gradient(135deg, #00e1ff, #1bd4c1);
  transform: scale(1.3);
  box-shadow: 0 0 8px rgba(0, 225, 255, 0.5);
}

/* Navigation button positioning */
.swiper-navigation {
  position: relative;
}

/* Hide default Swiper navigation arrows */
.swiper-button-next:after,
.swiper-button-prev:after {
  display: none;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

@media (min-width: 768px) {
  ::-webkit-scrollbar {
    width: 10px;
  }
}

::-webkit-scrollbar-track {
  background: #0f1729;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #00e1ff, #1bd4c1);
  border-radius: 4px;
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

/* Swiper slide transition fix */
.swiper-slide {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.swiper-slide-active,
.swiper-slide-next,
.swiper-slide-prev {
  opacity: 1;
}

/* Responsive image handling */
img {
  max-width: 100%;
  height: auto;
}
</style>
