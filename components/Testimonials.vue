<template>
  <section class="relative py-24 md:py-32 overflow-hidden">
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
            backgroundSize: '80px 80px',
          }"
        ></div>
      </div>

      <!-- Animated Orbs -->
      <div
        class="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px]"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full opacity-5 blur-3xl animate-pulse-slow"
        ></div>
      </div>
      <div class="absolute bottom-1/4 right-1/4 w-[600px] h-[600px]">
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] rounded-full opacity-5 blur-3xl animate-pulse-slow"
          style="animation-delay: 2s"
        ></div>
      </div>

      <!-- Floating Quote Marks -->
      <div class="absolute top-20 left-10 opacity-10">
        <div class="text-9xl font-serif text-[#00e1ff]">"</div>
      </div>
      <div class="absolute bottom-20 right-10 opacity-10">
        <div class="text-9xl font-serif text-[#1bd4c1]">"</div>
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header Section -->
      <div class="text-center max-w-4xl mx-auto mb-20">
        <!-- Animated Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 border border-[#334155] hover:border-[#00e1ff]/30 transition-all duration-300 mb-6 group/badge"
        >
          <!-- Pulsing dots -->
          <div class="relative">
            <div
              class="w-2 h-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-ping"
            ></div>
            <div
              class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full blur opacity-30"
            ></div>
          </div>
          <span class="text-sm font-medium text-white tracking-wider"
            >Client Success Stories</span
          >
          <div class="relative">
            <div
              class="w-2 h-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-ping"
              style="animation-delay: 0.5s"
            ></div>
            <div
              class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full blur opacity-30"
            ></div>
          </div>
        </div>

        <!-- Main Heading -->
        <h2 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span class="text-white">Trusted by</span>
          <span class="block">
            <span
              class="bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            >
              Industry Leaders
            </span>
          </span>
        </h2>

        <!-- Description -->
        <p
          class="text-lg md:text-xl text-[#cbd5e1] max-w-3xl mx-auto leading-relaxed"
        >
          Don't just take our word for it. Here's what our amazing clients have
          to say about partnering with
          <span class="text-[#00e1ff] font-medium">AFTECH</span> for their
          digital transformation.
        </p>

        <!-- Stats Row -->
        <div
          class="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-[#334155]/30"
        >
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div
              class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] bg-clip-text text-transparent mb-1"
            >
              {{ stat.value }}
            </div>
            <div class="text-sm text-[#94a3b8] uppercase tracking-wider">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonials Carousel -->
      <div class="relative max-w-6xl mx-auto">
        <!-- Navigation Arrows -->
        <button
          @click="prevTestimonial"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-20 w-12 h-12 rounded-full bg-[#111827] border border-[#334155] hover:border-[#00e1ff] hover:bg-[#00e1ff]/10 flex items-center justify-center transition-all duration-300 group/prev"
        >
          <svg
            class="w-5 h-5 text-[#94a3b8] group-hover/prev:text-[#00e1ff] transition-colors duration-300"
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
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-20 w-12 h-12 rounded-full bg-[#111827] border border-[#334155] hover:border-[#1bd4c1] hover:bg-[#1bd4c1]/10 flex items-center justify-center transition-all duration-300 group/next"
        >
          <svg
            class="w-5 h-5 text-[#94a3b8] group-hover/next:text-[#1bd4c1] transition-colors duration-300"
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

        <!-- Testimonials Container -->
        <div class="relative overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="testimonial.id"
              class="w-full flex-shrink-0 px-4"
            >
              <div class="max-w-4xl mx-auto">
                <!-- Testimonial Card -->
                <div class="relative group/testimonial">
                  <!-- Outer glow -->
                  <div
                    class="absolute -inset-0.5 bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] rounded-3xl opacity-0 group-hover/testimonial:opacity-30 blur transition-opacity duration-500 animate-gradient-border -z-10"
                  ></div>

                  <!-- Main Card -->
                  <div
                    class="relative rounded-3xl bg-[#111827] border border-[#334155] group-hover/testimonial:border-[#00e1ff]/30 overflow-hidden transition-all duration-500"
                  >
                    <!-- Background pattern -->
                    <div class="absolute inset-0 opacity-5">
                      <div
                        class="absolute inset-0"
                        :style="{
                          backgroundImage:
                            'radial-gradient(circle at 30% 20%, #00e1ff 1px, transparent 1px)',
                          backgroundSize: '40px 40px',
                        }"
                      ></div>
                    </div>

                    <!-- Content -->
                    <div class="relative p-8 md:p-12">
                      <!-- Quote Icon -->
                      <div class="relative mb-8">
                        <div
                          class="text-6xl font-serif text-[#00e1ff] opacity-20"
                        >
                          "
                        </div>
                        <div
                          class="absolute top-0 left-0 text-6xl font-serif text-[#1bd4c1] opacity-10"
                        >
                          "
                        </div>
                      </div>

                      <!-- Rating Stars -->
                      <div class="flex gap-1 mb-8">
                        <svg
                          v-for="i in testimonial.rating"
                          :key="i"
                          class="w-6 h-6"
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
                        class="text-xl md:text-2xl text-[#cbd5e1] leading-relaxed mb-8"
                      >
                        "{{ testimonial.quote }}"
                      </p>

                      <!-- Author Info -->
                      <div class="flex items-center gap-4">
                        <!-- Avatar -->
                        <div class="relative">
                          <!-- Gradient border -->
                          <div
                            class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full blur opacity-30"
                          ></div>
                          <!-- Avatar image -->
                          <img
                            :src="testimonial.avatar"
                            :alt="testimonial.author"
                            class="relative w-16 h-16 rounded-full object-cover border-2 border-[#111827]"
                          />
                        </div>

                        <!-- Author details -->
                        <div class="flex-1">
                          <div class="flex items-center justify-between">
                            <div>
                              <p class="text-xl font-bold text-white">
                                {{ testimonial.author }}
                              </p>
                              <p class="text-[#94a3b8]">
                                {{ testimonial.role }}
                              </p>
                            </div>
                            <!-- Company logo/icon -->
                            <div class="relative">
                              <div
                                class="w-10 h-10 rounded-lg bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 flex items-center justify-center"
                              >
                                <div class="text-sm font-bold text-[#00e1ff]">
                                  {{ testimonial.companyInitial }}
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- Project info -->
                          <div class="mt-4 pt-4 border-t border-[#334155]">
                            <div class="flex flex-wrap gap-2">
                              <span
                                v-for="tag in testimonial.tags"
                                :key="tag"
                                class="px-3 py-1 text-sm rounded-full bg-[#1e293b] border border-[#334155] text-[#cbd5e1]"
                              >
                                {{ tag }}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Result metrics -->
                      <div class="mt-8 pt-8 border-t border-[#334155]">
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div
                            v-for="metric in testimonial.metrics"
                            :key="metric.label"
                            class="text-center"
                          >
                            <div class="text-2xl font-bold text-white mb-1">
                              {{ metric.value }}
                            </div>
                            <div
                              class="text-xs text-[#94a3b8] uppercase tracking-wider"
                            >
                              {{ metric.label }}
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
            </div>
          </div>
        </div>

        <!-- Dots Indicator -->
        <div class="flex justify-center gap-2 mt-12">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            @click="goToTestimonial(index)"
            class="relative"
            :aria-label="`Go to testimonial ${index + 1}`"
          >
            <!-- Dot -->
            <div
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="
                activeIndex === index
                  ? 'bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] scale-125'
                  : 'bg-[#334155] hover:bg-[#475569]'
              "
            >
              <!-- Active dot glow -->
              <div
                v-if="activeIndex === index"
                class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full blur opacity-30"
              ></div>
            </div>
          </button>
        </div>
      </div>

      <!-- Company Logos Section -->
      <div class="mt-24 pt-16 border-t border-[#334155]/30">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-bold text-white mb-4">
            Trusted by Innovative Companies
          </h3>
          <p class="text-[#94a3b8] max-w-2xl mx-auto">
            We partner with forward-thinking organizations across industries to
            deliver exceptional results
          </p>
        </div>

        <!-- Logos Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div
            v-for="company in companies"
            :key="company.name"
            class="group/company relative"
          >
            <!-- Company logo container -->
            <div class="relative h-20 flex items-center justify-center">
              <!-- Background effect -->
              <div
                class="absolute inset-0 bg-[#111827] rounded-xl border border-[#334155] group-hover/company:border-[#00e1ff]/30 transition-all duration-300 opacity-0 group-hover/company:opacity-100"
              ></div>

              <!-- Logo placeholder -->
              <div
                class="relative z-10 text-2xl font-bold text-[#334155] group-hover/company:text-[#00e1ff] transition-colors duration-300"
              >
                {{ company.initial }}
              </div>

              <!-- Tooltip on hover -->
              <div
                class="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-[#111827] border border-[#334155] px-3 py-1.5 rounded-lg opacity-0 group-hover/company:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
              >
                <span class="text-sm text-white">{{ company.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-24">
        <div class="max-w-2xl mx-auto">
          <h3 class="text-3xl font-bold text-white mb-4">
            Ready to join our success stories?
          </h3>
          <p class="text-lg text-[#cbd5e1] mb-8">
            Let's discuss how we can help transform your vision into reality
          </p>
          <NuxtLink
            to="/contact"
            class="group/cta inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 relative overflow-hidden"
          >
            <!-- Gradient background -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-xl"
            ></div>

            <!-- Hover gradient overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] opacity-0 group-hover/cta:opacity-100 rounded-xl transition-opacity duration-300"
            ></div>

            <!-- Content -->
            <span
              class="relative z-10 text-[#0f1729] font-bold flex items-center gap-3"
            >
              Schedule a Consultation
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

            <!-- Glow effect -->
            <div
              class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-xl blur opacity-0 group-hover/cta:opacity-30 transition-opacity duration-300 -z-10"
            ></div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Stats data
const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "150+", label: "Projects Delivered" },
  { value: "40%", label: "Avg. Growth Impact" },
  { value: "24/7", label: "Support Available" },
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

// Carousel state
const activeIndex = ref(0);
const autoRotate = ref(true);
const rotationInterval = ref(null);

// Navigation functions
const nextTestimonial = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length;
};

const prevTestimonial = () => {
  activeIndex.value =
    (activeIndex.value - 1 + testimonials.length) % testimonials.length;
};

const goToTestimonial = (index) => {
  activeIndex.value = index;
};

// Auto rotation
onMounted(() => {
  rotationInterval.value = setInterval(() => {
    if (autoRotate.value) {
      nextTestimonial();
    }
  }, 5000); // Rotate every 5 seconds
});

onUnmounted(() => {
  if (rotationInterval.value) {
    clearInterval(rotationInterval.value);
  }
});

// Pause auto-rotation on hover
const pauseRotation = () => {
  autoRotate.value = false;
};

const resumeRotation = () => {
  autoRotate.value = true;
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
