<template>
  <div class="min-h-screen bg-[#0f1729]">
    <!-- Hero Section -->
    <section class="relative py-24 md:py-32 overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
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
        <div class="absolute top-1/3 -right-20 w-96 h-96">
          <div
            class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full opacity-10 blur-3xl animate-pulse-slow"
          ></div>
        </div>
        <div class="absolute bottom-1/3 -left-20 w-96 h-96">
          <div
            class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] rounded-full opacity-10 blur-3xl animate-pulse-slow"
            style="animation-delay: 2s"
          ></div>
        </div>

        <!-- Floating Elements -->
        <div class="absolute top-1/4 left-1/4 w-16 h-16">
          <div
            class="w-full h-full bg-gradient-to-br from-[#00e1ff]/20 to-transparent rounded-xl border border-[#00e1ff]/30 animate-float"
          >
            <div class="absolute inset-2 flex items-center justify-center">
              <div class="text-[#00e1ff] font-mono text-sm">{ }</div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-1/4 right-1/4 w-12 h-12">
          <div
            class="w-full h-full bg-gradient-to-bl from-[#1bd4c1]/20 to-transparent rounded-lg border border-[#1bd4c1]/30 animate-float"
            style="animation-delay: 1s"
          >
            <div class="absolute inset-2 flex items-center justify-center">
              <div class="text-[#1bd4c1] font-mono text-xs">< /></div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00e1ff]/10 to-[#1bd4c1]/10 border border-[#334155] hover:border-[#00e1ff]/30 transition-all duration-300 mb-6 group/badge"
        >
          <div class="relative">
            <div
              class="w-2 h-2 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full animate-ping"
            ></div>
            <div
              class="absolute -inset-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full blur opacity-30"
            ></div>
          </div>
          <span class="text-sm font-medium text-white tracking-wider"
            >What We Do</span
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
        <h1
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
        </h1>

        <!-- Description -->
        <p
          class="text-lg md:text-xl text-[#cbd5e1] max-w-3xl leading-relaxed mb-12"
        >
          From <span class="text-[#00e1ff] font-medium">concept</span> to
          <span class="text-[#1bd4c1] font-medium">deployment</span>, we deliver
          comprehensive software solutions tailored to your specific business
          needs and objectives.
        </p>

        <!-- Quick Stats -->
        <div
          class="flex flex-wrap gap-8 mt-12 pt-8 border-t border-[#334155]/30"
        >
          <div v-for="stat in quickStats" :key="stat.label" class="text-center">
            <div class="text-3xl font-bold text-white mb-1">
              {{ stat.value }}
            </div>
            <div class="text-sm text-[#94a3b8] uppercase tracking-wider">
              {{ stat.label }}
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div class="flex flex-col items-center gap-2">
            <span class="text-xs text-[#64748b] uppercase tracking-wider"
              >Explore Services</span
            >
            <div class="relative w-5 h-10 rounded-full border border-[#334155]">
              <div
                class="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gradient-to-b from-[#00e1ff] to-[#1bd4c1] rounded-full animate-scroll"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Sections -->
    <section
      v-for="(service, index) in services"
      :key="service.id"
      :id="service.id"
      :class="`relative py-24 md:py-32 overflow-hidden ${
        index % 2 === 0
          ? ''
          : 'bg-gradient-to-r from-[#111827]/50 to-transparent'
      }`"
    >
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <!-- Alternating gradient background -->
        <div
          v-if="index % 2 === 0"
          class="absolute inset-0 bg-gradient-to-r from-[#00e1ff]/5 via-transparent to-[#1bd4c1]/5"
        ></div>

        <!-- Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div
            class="absolute inset-0"
            :style="{
              backgroundImage: `
                linear-gradient(${
                  index % 2 === 0 ? '45deg' : '-45deg'
                }, #00e1ff22 1px, transparent 1px),
                linear-gradient(${
                  index % 2 === 0 ? '-45deg' : '45deg'
                }, #1bd4c122 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }"
          ></div>
        </div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Content Column -->
          <div :class="index % 2 === 0 ? '' : 'lg:order-2'">
            <!-- Icon & Title -->
            <div class="relative inline-block mb-8">
              <!-- Animated background -->
              <div
                class="absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] opacity-10 blur"
              ></div>

              <!-- Icon Container -->
              <div
                class="relative w-20 h-20 rounded-xl bg-gradient-to-br from-[#00e1ff]/10 to-[#1bd4c1]/10 border border-[#334155] flex items-center justify-center group-hover:border-[#00e1ff]/30 transition-all duration-300"
              >
                <!-- Icon -->
                <svg
                  class="w-10 h-10"
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
                  class="absolute -top-1 -right-1 w-4 h-4 rounded-full"
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
                    style="
                      animation-delay: calc(var(--service-index, 0) * 200ms);
                    "
                  ></div>
                </div>
              </div>
            </div>

            <!-- Title -->
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              <span class="text-white">{{ service.title }}</span>
            </h2>

            <!-- Description -->
            <p class="text-lg md:text-xl text-[#cbd5e1] leading-relaxed mb-8">
              {{ service.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-3 mb-10">
              <span
                v-for="tech in service.technologies"
                :key="tech"
                class="group/tech relative px-4 py-2 rounded-lg bg-[#1e293b] border border-[#334155] text-[#cbd5e1] hover:text-white hover:border-[#00e1ff]/30 transition-all duration-300"
              >
                {{ tech }}
                <div
                  class="absolute -inset-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-lg opacity-0 group-hover/tech:opacity-20 blur transition-opacity duration-300 -z-10"
                ></div>
              </span>
            </div>

            <!-- CTA Button -->
            <NuxtLink
              to="/contact"
              class="group/cta inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden"
            >
              <!-- Background -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-xl"
              ></div>

              <!-- Hover overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] opacity-0 group-hover/cta:opacity-100 rounded-xl transition-opacity duration-300"
              ></div>

              <!-- Content -->
              <span
                class="relative z-10 text-[#0f1729] flex items-center gap-2"
              >
                Get Started
                <svg
                  class="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300"
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
            </NuxtLink>
          </div>

          <!-- Features Grid -->
          <div
            :class="`grid grid-cols-2 gap-4 ${
              index % 2 === 0 ? '' : 'lg:order-1'
            }`"
          >
            <div
              v-for="(feature, i) in service.features"
              :key="i"
              class="group/feature relative"
            >
              <!-- Card -->
              <div
                class="relative h-full rounded-xl bg-[#111827] border border-[#334155] p-6 group-hover/feature:border-[#00e1ff]/30 transition-all duration-300 transform group-hover/feature:-translate-y-1"
              >
                <!-- Shimmer effect -->
                <div class="absolute inset-0 overflow-hidden rounded-xl">
                  <div
                    class="absolute -inset-y-full -left-16 w-16 bg-white/5 skew-x-12 group-hover/feature:left-full transition-all duration-1000"
                  ></div>
                </div>

                <!-- Icon -->
                <div class="relative mb-4">
                  <div
                    class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00e1ff]/10 to-[#1bd4c1]/10 border border-[#334155] flex items-center justify-center"
                  >
                    <svg
                      class="w-6 h-6"
                      :class="
                        feature.color === 'primary'
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
                      <component :is="getIconComponent(feature.icon)" />
                    </svg>
                  </div>
                </div>

                <!-- Content -->
                <h3
                  class="font-semibold text-white mb-2 group-hover/feature:text-transparent group-hover/feature:bg-gradient-to-r group-hover/feature:from-[#00e1ff] group-hover/feature:via-[#1bd4c1] group-hover/feature:to-[#00e1ff] group-hover/feature:bg-clip-text transition-all duration-300"
                >
                  {{ feature.title }}
                </h3>
                <p class="text-sm text-[#94a3b8] leading-relaxed">
                  {{ feature.desc }}
                </p>

                <!-- Bottom gradient bar -->
                <div
                  class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] transform scale-x-0 group-hover/feature:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section
      class="relative py-24 md:py-32 bg-gradient-to-b from-transparent to-[#111827]/50"
    >
      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="text-white">Our</span>
            <span class="block">
              <span
                class="bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              >
                Development Process
              </span>
            </span>
          </h2>
          <p class="text-lg text-[#cbd5e1] max-w-3xl mx-auto">
            A structured approach that ensures quality, transparency, and
            successful delivery from start to finish.
          </p>
        </div>

        <!-- Process Steps -->
        <div class="relative">
          <!-- Connecting line -->
          <div
            class="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] transform -translate-y-1/2 hidden lg:block"
          ></div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(step, index) in processSteps"
              :key="step.title"
              class="relative group/step"
            >
              <!-- Step number -->
              <div
                class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] flex items-center justify-center text-[#0f1729] font-bold text-xl z-10"
              >
                {{ index + 1 }}
              </div>

              <!-- Step card -->
              <div
                class="relative rounded-2xl bg-[#111827] border border-[#334155] p-8 pt-12 group-hover/step:border-[#00e1ff]/30 transition-all duration-300"
              >
                <!-- Icon -->
                <div class="mb-6">
                  <svg
                    class="w-10 h-10 text-[#00e1ff]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <component :is="getIconComponent(step.icon)" />
                  </svg>
                </div>

                <!-- Content -->
                <h3 class="text-xl font-bold text-white mb-3">
                  {{ step.title }}
                </h3>
                <p class="text-[#94a3b8]">{{ step.description }}</p>

                <!-- Hover effect -->
                <div
                  class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00e1ff]/5 to-[#1bd4c1]/5 opacity-0 group-hover/step:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-24 md:py-32 overflow-hidden">
      <!-- Background -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#00e1ff]/10 via-[#1bd4c1]/5 to-[#00e1ff]/10"
      ></div>

      <!-- Orbs -->
      <div class="absolute top-0 left-0 w-96 h-96">
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-full opacity-10 blur-3xl"
        ></div>
      </div>
      <div class="absolute bottom-0 right-0 w-96 h-96">
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#1bd4c1] to-[#00e1ff] rounded-full opacity-10 blur-3xl"
        ></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="text-white">Ready to Start</span>
            <span class="block">
              <span
                class="bg-gradient-to-r from-[#00e1ff] via-[#1bd4c1] to-[#00e1ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              >
                Your Project?
              </span>
            </span>
          </h2>

          <p
            class="text-lg md:text-xl text-[#cbd5e1] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Let's discuss how we can help bring your vision to life with
            cutting-edge technology and expert development.
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <!-- Primary CTA -->
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

              <!-- Content -->
              <div
                class="relative z-10 flex items-center justify-center gap-3 text-[#0f1729]"
              >
                <span>Contact Us Today</span>
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

            <!-- Secondary CTA -->
            <NuxtLink
              to="/projects"
              class="group/secondary relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              <!-- Glass background -->
              <div
                class="absolute inset-0 bg-[#111827]/80 backdrop-blur-sm border border-[#334155] rounded-xl group-hover/secondary:border-[#1bd4c1]/30 transition-colors duration-300"
              ></div>

              <!-- Content -->
              <div
                class="relative z-10 flex items-center justify-center gap-3 text-white"
              >
                View Our Work
                <svg
                  class="w-5 h-5 group-hover/secondary:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <!-- Gradient border on hover -->
              <div
                class="absolute -inset-0.5 bg-gradient-to-r from-[#00e1ff] to-[#1bd4c1] rounded-xl opacity-0 group-hover/secondary:opacity-30 blur transition-opacity duration-300 -z-10"
              ></div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Quick stats
const quickStats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40%", label: "Avg. Growth Impact" },
  { value: "24/7", label: "Support Available" },
];

// Services data
const services = [
  {
    id: "backend",
    icon: "Server",
    title: "Backend Development",
    description:
      "Build robust, scalable server-side solutions that power your applications with enterprise-grade security, performance, and reliability for millions of users.",
    color: "primary",
    features: [
      {
        icon: "Database",
        title: "API Development",
        desc: "RESTful & GraphQL APIs built for scale and security",
        color: "primary",
      },
      {
        icon: "Database",
        title: "Database Design",
        desc: "Optimized schemas, efficient queries, and data architecture",
        color: "secondary",
      },
      {
        icon: "Cloud",
        title: "Cloud Services",
        desc: "AWS, GCP, Azure infrastructure and serverless solutions",
        color: "primary",
      },
      {
        icon: "GitBranch",
        title: "DevOps & CI/CD",
        desc: "Automated pipelines, containerization, and deployments",
        color: "secondary",
      },
    ],
    technologies: [
      "Node.js",
      "Python",
      "Go",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: "frontend",
    icon: "Monitor",
    title: "Frontend Development",
    description:
      "Create beautiful, responsive user interfaces that deliver exceptional user experiences across all devices with cutting-edge frameworks and best practices.",
    color: "secondary",
    features: [
      {
        icon: "Layers",
        title: "React/Vue/Angular",
        desc: "Modern SPA frameworks with TypeScript integration",
        color: "primary",
      },
      {
        icon: "LayoutIcon",
        title: "Responsive Design",
        desc: "Mobile-first approaches and cross-browser compatibility",
        color: "secondary",
      },
      {
        icon: "Zap",
        title: "PWA Development",
        desc: "Native-like web experiences with offline capabilities",
        color: "primary",
      },
      {
        icon: "Gauge",
        title: "Performance",
        desc: "Optimized for speed, SEO, and Core Web Vitals",
        color: "secondary",
      },
    ],
    technologies: [
      "Vue.js",
      "React",
      "Angular",
      "TypeScript",
      "Nuxt.js",
      "Tailwind CSS",
      "Vite",
      "Webpack",
    ],
  },
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile Development",
    description:
      "Develop high-performance mobile applications that your users will love, on any platform, with seamless integration and exceptional user experiences.",
    color: "primary",
    features: [
      {
        icon: "Apple",
        title: "iOS Development",
        desc: "Native iOS apps with Swift and modern Apple frameworks",
        color: "primary",
      },
      {
        icon: "Smartphone",
        title: "Android Development",
        desc: "Native Android apps with Kotlin and Jetpack",
        color: "secondary",
      },
      {
        icon: "Tablet",
        title: "Cross-Platform",
        desc: "React Native & Flutter solutions for wider reach",
        color: "primary",
      },
      {
        icon: "Shuffle",
        title: "App Store Optimization",
        desc: "Store listing optimization and ASO strategies",
        color: "secondary",
      },
    ],
    technologies: [
      "Swift",
      "Kotlin",
      "React Native",
      "Flutter",
      "Expo",
      "Firebase",
      "App Store",
      "Play Store",
    ],
  },
  {
    id: "design",
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "Design intuitive, user-centered experiences that convert visitors into loyal customers through research-driven design and seamless interactions.",
    color: "secondary",
    features: [
      {
        icon: "Users",
        title: "User Research",
        desc: "In-depth user research and persona development",
        color: "primary",
      },
      {
        icon: "LayoutIcon",
        title: "Wireframing",
        desc: "Structure, information architecture, and user flows",
        color: "secondary",
      },
      {
        icon: "Palette",
        title: "Design Systems",
        desc: "Scalable design systems and component libraries",
        color: "primary",
      },
      {
        icon: "MousePointer",
        title: "Usability Testing",
        desc: "Data-driven improvements and A/B testing",
        color: "secondary",
      },
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Principle",
      "Framer",
      "Zeplin",
      "Abstract",
    ],
  },
];

// Process steps
const processSteps = [
  {
    icon: "Users",
    title: "Discovery & Planning",
    description:
      "In-depth analysis of requirements, user research, and project scoping to define clear objectives.",
  },
  {
    icon: "Palette",
    title: "Design & Prototyping",
    description:
      "Wireframing, UI/UX design, and interactive prototypes for stakeholder feedback.",
  },
  {
    icon: "Code",
    title: "Development & Testing",
    description:
      "Agile development cycles with continuous testing and quality assurance.",
  },
  {
    icon: "Rocket",
    title: "Deployment & Support",
    description:
      "Production deployment, monitoring, and ongoing maintenance and support.",
  },
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
    Database: () => `
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    `,
    Cloud: () => `
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    `,
    GitBranch: () => `
      <line x1="6" y1="3" x2="6" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    `,
    Monitor: () => `
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    `,
    Layers: () => `
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    `,
    Zap: () => `
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    `,
    Gauge: () => `
      <path d="m12 15 3.5-3.5" />
      <path d="M20.4 14.6C21 15.2 21 16.1 20.4 16.7L19.1 18c-.6.6-1.5.6-2.1 0l-3.5-3.5-3.5 3.5c-.6.6-1.5.6-2.1 0l-1.3-1.3c-.6-.6-.6-1.5 0-2.1l3.5-3.5L4.6 8.4c-.6-.6-.6-1.5 0-2.1l1.3-1.3c.6-.6 1.5-.6 2.1 0l3.5 3.5 3.5-3.5c.6-.6 1.5-.6 2.1 0l1.3 1.3c.6.6.6 1.5 0 2.1l-3.5 3.5 3.5 3.5z" />
    `,
    Smartphone: () => `
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h0" />
      <path d="M9 6h6" />
    `,
    Apple: () => `
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    `,
    Tablet: () => `
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M12 6h.01" />
    `,
    Shuffle: () => `
      <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
      <path d="m18 2 4 4-4 4" />
      <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
      <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
      <path d="m18 14 4 4-4 4" />
    `,
    Palette: () => `
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    `,
    Users: () => `
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    `,
    LayoutIcon: () => `
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    `,
    MousePointer: () => `
      <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      <path d="m13 13 6 6" />
    `,
    Code: () => `
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    `,
    Rocket: () => `
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
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

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.05;
  }
  50% {
    opacity: 0.1;
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

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-scroll {
  animation: scroll 2s ease-in-out infinite;
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
