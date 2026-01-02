<template>
  <div class="min-h-screen bg-bg">
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
            class="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-10 blur-3xl animate-pulse-slow"
          ></div>
        </div>
        <div class="absolute bottom-1/3 -left-20 w-96 h-96">
          <div
            class="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full opacity-10 blur-3xl animate-pulse-slow"
            style="animation-delay: 2s"
          ></div>
        </div>

        <!-- Floating Elements -->
        <div class="absolute top-1/4 left-1/4 w-16 h-16">
          <div
            class="w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-xl border border-primary/30 animate-float"
          >
            <div class="absolute inset-2 flex items-center justify-center">
              <Icon name="lucide:code" class="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
        <div class="absolute bottom-1/4 right-1/4 w-12 h-12">
          <div
            class="w-full h-full bg-gradient-to-bl from-secondary/20 to-transparent rounded-lg border border-secondary/30 animate-float"
            style="animation-delay: 1s"
          >
            <div class="absolute inset-2 flex items-center justify-center">
              <Icon name="lucide:brackets" class="w-6 h-6 text-secondary" />
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-[#334155] hover:border-primary/30 transition-all duration-300 mb-6 group/badge"
        >
          <div class="relative">
            <div
              class="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-ping"
            ></div>
            <div
              class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30"
            ></div>
          </div>
          <span class="text-sm font-medium text-textPrimary tracking-wider">{{
            t("services.badge")
          }}</span>
          <div class="relative">
            <div
              class="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-ping"
              style="animation-delay: 0.5s"
            ></div>
            <div
              class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30"
            ></div>
          </div>
        </div>

        <!-- Main Heading -->
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span class="text-textPrimary">{{
            t("services.heading.fullstack")
          }}</span>
          <span class="block">
            <span
              class="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            >
              {{ t("services.heading.development") }}
            </span>
            <span class="text-textPrimary">{{
              t("services.heading.services")
            }}</span>
          </span>
        </h1>

        <!-- Description -->
        <p
          class="text-lg md:text-xl text-textLightGray max-w-3xl leading-relaxed mb-12"
        >
          {{ t("services.page.pre")
          }}<span class="text-primary font-medium">{{
            t("hero.description_keywords.concept")
          }}</span
          >{{ t("services.page.mid")
          }}<span class="text-secondary font-medium">{{
            t("hero.description_keywords.deployment")
          }}</span
          >{{ t("services.page.post") }}
        </p>

        <!-- Quick Stats -->
        <div
          class="flex flex-wrap gap-8 mt-12 pt-10 border-t border-primary/50"
        >
          <div
            v-for="stat in quickStats"
            :key="stat.labelKey || stat.label"
            class="text-center"
          >
            <div class="text-3xl font-bold text-textPrimary mb-1">
              {{ stat.value }}
            </div>
            <div class="text-sm text-textGray uppercase tracking-wider">
              {{ t(stat.labelKey) }}
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div class="flex flex-col items-center gap-2">
            <span class="text-xs text-textLightGray uppercase tracking-wider">{{
              t("services.cta.explore_all")
            }}</span>
            <div class="relative w-5 h-10 rounded-full border border-textGray">
              <div
                class="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full animate-scroll"
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
        index % 2 === 0 ? '' : 'bg-gradient-to-r from-bg/50 to-transparent'
      }`"
    >
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <!-- Alternating gradient background -->
        <div
          v-if="index % 2 === 0"
          class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"
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
                class="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-10 blur"
              ></div>

              <!-- Icon Container -->
              <div
                class="relative w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 flex items-center justify-center group-hover:border-primary/30 transition-all duration-300"
              >
                <!-- Modern Icon -->
                <Icon
                  :name="getModernIcon(service.icon)"
                  class="w-10 h-10"
                  :class="
                    service.color === 'primary'
                      ? 'text-primary'
                      : 'text-secondary'
                  "
                />

                <!-- Pulsing dot -->
                <div
                  class="absolute -top-1 -right-1 w-4 h-4 rounded-full"
                  :class="
                    service.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                  "
                >
                  <div
                    class="absolute inset-0 rounded-full animate-ping"
                    :class="
                      service.color === 'primary'
                        ? 'bg-primary'
                        : 'bg-secondary'
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
              <span class="text-textPrimary">{{ service.title }}</span>
            </h2>

            <!-- Description -->
            <p
              class="text-lg md:text-xl text-textLightGray leading-relaxed mb-8"
            >
              {{ service.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-3 mb-10">
              <span
                v-for="tech in service.technologies"
                :key="tech"
                class="group/tech relative px-4 py-2 rounded-lg bg-card border border-border text-textLightGray hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                {{ tech }}
                <div
                  class="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover/tech:opacity-20 blur transition-opacity duration-300 -z-10"
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
                class="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl"
              ></div>

              <!-- Hover overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover/cta:opacity-100 rounded-xl transition-opacity duration-300"
              ></div>

              <!-- Content -->
              <span
                class="relative z-10 text-[#0f1729] flex items-center gap-2"
              >
                {{ t("navbar.get_started") }}
                <Icon
                  name="lucide:arrow-right"
                  class="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300"
                />
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
                class="relative h-full rounded-xl shadow-lg bg-card border border-border p-6 group-hover/feature:border-primary/30 transition-all duration-300 transform group-hover/feature:-translate-y-1"
              >
                <!-- Shimmer effect -->
                <div class="absolute inset-0 overflow-hidden rounded-xl">
                  <div
                    class="absolute -inset-y-full -left-16 w-16 bg-textPrimary/5 skew-x-12 group-hover/feature:left-full transition-all duration-1000"
                  ></div>
                </div>

                <!-- Icon -->
                <div class="relative mb-4">
                  <div
                    class="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/50 flex items-center justify-center"
                  >
                    <Icon
                      :name="getFeatureIcon(feature.icon)"
                      class="w-6 h-6"
                      :class="
                        feature.color === 'primary'
                          ? 'text-primary'
                          : 'text-secondary'
                      "
                    />
                  </div>
                </div>

                <!-- Content -->
                <h3
                  class="font-semibold text-white mb-2 group-hover/feature:text-transparent group-hover/feature:bg-gradient-to-r group-hover/feature:from-primary group-hover/feature:via-secondary group-hover/feature:to-primary group-hover/feature:bg-clip-text transition-all duration-300"
                >
                  {{ t(feature.titleKey) }}
                </h3>
                <p class="text-sm text-textGray leading-relaxed">
                  {{ t(feature.descKey) }}
                </p>

                <!-- Bottom gradient bar -->
                <div
                  class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover/feature:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section
      class="relative py-24 md:py-32 bg-gradient-to-b from-transparent to-bg/50"
    >
      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="text-textPrimary">{{
              t("services.process.title_prefix")
            }}</span>
            <span class="block">
              <span
                class="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              >
                {{ t("services.process.title_highlight") }}
              </span>
            </span>
          </h2>
          <p class="text-lg text-textLightGray max-w-3xl mx-auto">
            {{ t("services.process.description") }}
          </p>
        </div>

        <!-- Process Steps -->
        <div class="relative">
          <!-- Connecting line -->
          <div
            class="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 hidden lg:block"
          ></div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(step, index) in processSteps"
              :key="step.titleKey || step.icon"
              class="relative group/step"
            >
              <!-- Step number -->
              <div
                class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-[#0f1729] font-bold text-xl z-10"
              >
                {{ index + 1 }}
              </div>

              <!-- Step card -->
              <div
                class="relative shadow-lg hover:shadow-primary/20 rounded-2xl bg-card border border-primary/50 p-8 pt-12 transition-all duration-300"
              >
                <!-- Icon -->
                <div class="mb-6">
                  <Icon
                    :name="getProcessIcon(step.icon)"
                    class="w-10 h-10 text-primary"
                  />
                </div>

                <!-- Content -->
                <h3 class="text-xl font-bold text-textPrimary mb-3">
                  {{ t(step.titleKey) }}
                </h3>
                <p class="text-textGray">{{ t(step.descriptionKey) }}</p>

                <!-- Hover effect -->
                <div
                  class="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover/step:opacity-100 transition-opacity duration-300"
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
        class="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10"
      ></div>

      <!-- Orbs -->
      <div class="absolute top-0 left-0 w-96 h-96">
        <div
          class="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-10 blur-3xl"
        ></div>
      </div>
      <div class="absolute bottom-0 right-0 w-96 h-96">
        <div
          class="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full opacity-10 blur-3xl"
        ></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="text-textPrimary">
              {{ $t("cta.titleStart") }}
            </span>
            <span class="block">
              <span
                class="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              >
                {{ $t("cta.titleEnd") }}
              </span>
            </span>
          </h2>

          <p
            class="text-lg md:text-xl text-textLightGray max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {{ $t("cta.description2") }}
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
                class="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl"
              ></div>

              <!-- Hover gradient -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover/primary:opacity-100 rounded-xl transition-opacity duration-300"
              ></div>

              <!-- Content -->
              <div
                class="relative z-10 flex items-center justify-center gap-3 text-[#0f1729]"
              >
                <span>{{ $t("cta.primaryButton") }}</span>
                <Icon
                  name="lucide:arrow-right"
                  class="w-5 h-5 group-hover/primary:translate-x-2 transition-transform duration-300"
                />
              </div>

              <!-- Outer glow -->
              <div
                class="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover/primary:opacity-30 transition-opacity duration-300 -z-10"
              ></div>
            </NuxtLink>

            <!-- Secondary CTA -->
            <NuxtLink
              to="/projects"
              class="group/secondary relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              <!-- Glass background -->
              <div
                class="absolute inset-0 bg-[#111827]/80 backdrop-blur-sm border border-[#334155] rounded-xl group-hover/secondary:border-secondary/30 transition-colors duration-300"
              ></div>

              <!-- Content -->
              <div
                class="relative z-10 flex items-center justify-center gap-3 text-white"
              >
                {{ $t("cta.secondaryButton") }}
                <Icon
                  name="lucide:external-link"
                  class="w-5 h-5 group-hover/secondary:translate-x-1 transition-transform duration-300"
                />
              </div>

              <!-- Gradient border on hover -->
              <div
                class="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover/secondary:opacity-30 blur transition-opacity duration-300 -z-10"
              ></div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// i18n
import { useI18n } from "vue-i18n";
const { t } = useI18n();
// Quick stats (use labelKey for translations)
const quickStats = [
  { value: "150+", labelKey: "testimonials.stats.projects_delivered" },
  { value: "98%", labelKey: "testimonials.stats.client_satisfaction" },
  { value: "40%", labelKey: "testimonials.stats.avg_growth" },
  { value: "24/7", labelKey: "testimonials.stats.support_available" },
];

// Services data with modern icon names
const services = [
  {
    id: "backend",
    icon: "lucide:server",
    titleKey: "services.list.backend.title",
    descriptionKey: "services.list.backend.description",
    color: "primary",
    features: [
      {
        icon: "api",
        titleKey: "services.features.backend.api.title",
        descKey: "services.features.backend.api.desc",
        color: "primary",
      },
      {
        icon: "database",
        titleKey: "services.features.backend.database.title",
        descKey: "services.features.backend.database.desc",
        color: "secondary",
      },
      {
        icon: "cloud",
        titleKey: "services.features.backend.cloud.title",
        descKey: "services.features.backend.cloud.desc",
        color: "primary",
      },
      {
        icon: "devops",
        titleKey: "services.features.backend.devops.title",
        descKey: "services.features.backend.devops.desc",
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
    icon: "lucide:monitor",
    titleKey: "services.list.frontend.title",
    descriptionKey: "services.list.frontend.description",
    color: "secondary",
    features: [
      {
        icon: "framework",
        titleKey: "services.features.frontend.framework.title",
        descKey: "services.features.frontend.framework.desc",
        color: "primary",
      },
      {
        icon: "responsive",
        titleKey: "services.features.frontend.responsive.title",
        descKey: "services.features.frontend.responsive.desc",
        color: "secondary",
      },
      {
        icon: "pwa",
        titleKey: "services.features.frontend.pwa.title",
        descKey: "services.features.frontend.pwa.desc",
        color: "primary",
      },
      {
        icon: "performance",
        titleKey: "services.features.frontend.performance.title",
        descKey: "services.features.frontend.performance.desc",
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
    icon: "lucide:smartphone",
    titleKey: "services.list.mobile.title",
    descriptionKey: "services.list.mobile.description",
    color: "primary",
    features: [
      {
        icon: "ios",
        titleKey: "services.features.mobile.ios.title",
        descKey: "services.features.mobile.ios.desc",
        color: "primary",
      },
      {
        icon: "android",
        titleKey: "services.features.mobile.android.title",
        descKey: "services.features.mobile.android.desc",
        color: "secondary",
      },
      {
        icon: "cross-platform",
        titleKey: "services.features.mobile.cross_platform.title",
        descKey: "services.features.mobile.cross_platform.desc",
        color: "primary",
      },
      {
        icon: "app-store",
        titleKey: "services.features.mobile.app_store.title",
        descKey: "services.features.mobile.app_store.desc",
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
    icon: "lucide:palette",
    titleKey: "services.list.uiux.title",
    descriptionKey: "services.list.uiux.description",
    color: "secondary",
    features: [
      {
        icon: "research",
        titleKey: "services.features.design.research.title",
        descKey: "services.features.design.research.desc",
        color: "primary",
      },
      {
        icon: "wireframe",
        titleKey: "services.features.design.wireframe.title",
        descKey: "services.features.design.wireframe.desc",
        color: "secondary",
      },
      {
        icon: "design-system",
        titleKey: "services.features.design.design_system.title",
        descKey: "services.features.design.design_system.desc",
        color: "primary",
      },
      {
        icon: "testing",
        titleKey: "services.features.design.testing.title",
        descKey: "services.features.design.testing.desc",
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

// Process steps with modern icons
const processSteps = [
  {
    icon: "discovery",
    titleKey: "services.process.steps.discovery.title",
    descriptionKey: "services.process.steps.discovery.description",
  },
  {
    icon: "design",
    titleKey: "services.process.steps.design.title",
    descriptionKey: "services.process.steps.design.description",
  },
  {
    icon: "development",
    titleKey: "services.process.steps.development.title",
    descriptionKey: "services.process.steps.development.description",
  },
  {
    icon: "deployment",
    titleKey: "services.process.steps.deployment.title",
    descriptionKey: "services.process.steps.deployment.description",
  },
];

// Modern icon mapping functions
const getModernIcon = (iconName) => {
  const iconMap = {
    "lucide:server": "lucide:server",
    "lucide:monitor": "lucide:monitor",
    "lucide:smartphone": "lucide:smartphone",
    "lucide:palette": "lucide:palette",
  };
  return iconMap[iconName] || "lucide:server";
};

const getFeatureIcon = (iconName) => {
  const iconMap = {
    api: "lucide:network",
    database: "lucide:database",
    cloud: "lucide:cloud",
    devops: "lucide:git-branch",
    framework: "lucide:code-2",
    responsive: "lucide:smartphone",
    pwa: "lucide:zap",
    performance: "lucide:gauge",
    ios: "lucide:apple",
    android: "lucide:smartphone",
    "cross-platform": "lucide:smartphones",
    "app-store": "lucide:shopping-bag",
    research: "lucide:users",
    wireframe: "lucide:layout-grid",
    "design-system": "lucide:layers-3",
    testing: "lucide:mouse-pointer-click",
  };
  return iconMap[iconName] || "lucide:help-circle";
};

const getProcessIcon = (iconName) => {
  const iconMap = {
    discovery: "lucide:search",
    design: "lucide:palette",
    development: "lucide:code-2",
    deployment: "lucide:rocket",
  };
  return iconMap[iconName] || "lucide:rocket";
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

/* Icon styling */
.icon {
  transition: all 0.3s ease;
}
</style>
