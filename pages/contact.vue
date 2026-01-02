<template>
  <div class="min-h-screen bg-bg overflow-hidden">
    <!-- Hero Section -->
    <section class="relative py-24 md:py-32 overflow-hidden">
      <!-- Background Elements -->
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
        <div class="absolute top-1/3 -left-40 w-[600px] h-[600px]">
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-5 blur-3xl animate-pulse-slow"
          ></div>
        </div>

        <!-- Floating Elements -->
        <div class="absolute top-1/3 right-20">
          <div
            class="w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-lg border border-primary/50 animate-float rotate-12"
          ></div>
        </div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div ref="heroRef" class="max-w-4xl mx-auto text-center">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-8"
          >
            <div class="flex items-center gap-2">
              <div class="relative">
                <svg
                  class="w-5 h-5 text-textPrimary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 animate-ping"
                ></div>
              </div>
              <span
                class="text-textPrimary font-semibold text-sm tracking-wider uppercase"
                >{{ t("contact.badge") }}</span
              >
            </div>
          </div>

          <!-- Title -->
          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span class="text-textPrimary">{{ t("contact.title.part1") }}</span>
            <span
              class="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            >
              {{ t("contact.title.part2") }}
            </span>
            <span class="text-textPrimary">{{ t("contact.title.part3") }}</span>
          </h1>

          <!-- Description -->
          <p
            class="text-xl md:text-2xl text-textLightGray max-w-3xl mx-auto leading-relaxed font-light"
          >
            {{ t("contact.description.prefix") }}
            <span class="text-primary font-medium">{{
              t("contact.response_time")
            }}</span
            >{{ t("contact.description.suffix") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="relative py-12 pb-32">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Contact Form -->
          <div ref="formRef" class="lg:col-span-2 opacity-0 translate-x-8">
            <div
              class="relative h-full rounded-3xl overflow-hidden transition-all duration-500"
            >
              <!-- Gradient Border -->
              <div
                class="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"
              ></div>

              <!-- Main Card -->
              <div
                class="relative h-full bg-card rounded-3xl border border-border group-hover:border-primary/30 p-8 transition-all duration-300"
              >
                <!-- Form Header -->
                <div class="mb-8">
                  <h2 class="text-3xl font-bold text-textPrimary mb-3">
                    {{ t("contact.form.title") }}
                  </h2>
                  <p class="text-textLightGray">
                    {{ t("contact.form.subtitle") }}
                  </p>
                </div>

                <!-- Form -->
                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <!-- Name & Email -->
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-3">
                      <label
                        for="name"
                        class="block text-sm font-medium text-textPrimary"
                      >
                        {{ t("contact.form.name") }}
                        <span class="text-[#ef4444]">*</span>
                      </label>
                      <div class="relative">
                        <div
                          class="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"
                        ></div>
                        <input
                          id="name"
                          v-model="formData.name"
                          type="text"
                          required
                          class="w-full px-4 py-3 bg-inputField border border-border rounded-lg text-textPrimary placeholder-textGray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                          :placeholder="t('contact.placeholders.name')"
                        />
                      </div>
                    </div>

                    <div class="space-y-3">
                      <label
                        for="email"
                        class="block text-sm font-medium text-textPrimary"
                      >
                        {{ t("contact.form.email") }}
                        <span class="text-[#ef4444]">*</span>
                      </label>
                      <div class="relative">
                        <div
                          class="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"
                        ></div>
                        <input
                          id="email"
                          v-model="formData.email"
                          type="email"
                          required
                          class="w-full px-4 py-3 bg-inputField border border-border rounded-lg text-textPrimary placeholder-textGray focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                          placeholder="john@example.com"
                          :placeholder="t('contact.placeholders.email')"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Company & Subject -->
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-3">
                      <label
                        for="company"
                        class="block text-sm font-medium text-textPrimary"
                      >
                        {{ t("contact.form.company") }}
                      </label>
                      <div class="relative">
                        <input
                          id="company"
                          v-model="formData.company"
                          type="text"
                          class="w-full px-4 py-3 bg-inputField border border-border rounded-lg text-textPrimary placeholder-textGray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="Your Company"
                          :placeholder="t('contact.placeholders.company')"
                        />
                      </div>
                    </div>

                    <div class="space-y-3">
                      <label
                        for="subject"
                        class="block text-sm font-medium text-textPrimary"
                      >
                        {{ t("contact.form.subject") }}
                        <span class="text-[#ef4444]">*</span>
                      </label>
                      <div class="relative">
                        <select
                          id="subject"
                          v-model="formData.subject"
                          required
                          class="w-full px-4 py-3 bg-inputField border border-border rounded-lg text-textPrimary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 appearance-none"
                        >
                          <option value="" disabled selected>
                            {{ t("contact.form.select_subject") }}
                          </option>
                          <option value="project">
                            {{ t("contact.subjects.project") }}
                          </option>
                          <option value="partnership">
                            {{ t("contact.subjects.partnership") }}
                          </option>
                          <option value="career">
                            {{ t("contact.subjects.career") }}
                          </option>
                          <option value="support">
                            {{ t("contact.subjects.support") }}
                          </option>
                          <option value="other">
                            {{ t("contact.subjects.other") }}
                          </option>
                        </select>
                        <svg
                          class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-textGray pointer-events-none"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <!-- Message -->
                  <div class="space-y-3">
                    <label
                      for="message"
                      class="block text-sm font-medium text-textPrimary"
                    >
                      {{ t("contact.form.message") }}
                      <span class="text-[#ef4444]">*</span>
                    </label>
                    <div class="relative">
                      <div
                        class="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"
                      ></div>
                      <textarea
                        id="message"
                        v-model="formData.message"
                        required
                        rows="6"
                        class="w-full px-4 py-3 bg-inputField border border-border rounded-lg text-textPrimary placeholder-textGray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                        :placeholder="t('contact.placeholders.message')"
                      ></textarea>
                    </div>
                  </div>

                  <!-- Submit Button -->
                  <div class="pt-4">
                    <button
                      type="submit"
                      :disabled="isSubmitting"
                      :class="[
                        'group/btn relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1',
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : '',
                      ]"
                    >
                      <!-- Background gradient -->
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl"
                      ></div>

                      <!-- Hover gradient -->
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover/btn:opacity-100 rounded-xl transition-opacity duration-300"
                      ></div>

                      <!-- Shine effect -->
                      <div class="absolute inset-0 overflow-hidden rounded-xl">
                        <div
                          class="absolute -inset-y-full -left-24 w-24 bg-white/30 skew-x-12 group-hover/btn:left-full transition-all duration-1000"
                        ></div>
                      </div>

                      <!-- Content -->
                      <div
                        class="relative z-10 flex items-center justify-center gap-3 text-[#0f1729]"
                      >
                        <template v-if="isSubmitting">
                          <div
                            class="w-5 h-5 border-2 border-[#0f1729] border-t-transparent rounded-full animate-spin"
                          ></div>
                          <span>{{ t("contact.submit.sending") }}</span>
                        </template>
                        <template v-else>
                          <span>{{ t("contact.submit.send") }}</span>
                          <svg
                            class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </template>
                      </div>

                      <!-- Outer glow -->
                      <div
                        class="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300 -z-10"
                      ></div>
                    </button>

                    <!-- Success Message -->
                    <div
                      v-if="submitSuccess"
                      class="mt-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30"
                    >
                      <div class="flex items-center gap-3">
                        <svg
                          class="w-5 h-5 text-primary"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <div>
                          <p class="text-white font-medium">
                            {{ t("contact.success.title") }}
                          </p>
                          <p class="text-sm text-textLightGray">
                            {{
                              t("contact.success.subtitle", {
                                hours: t("contact.response_time"),
                              })
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- Contact Info & Sidebar -->
          <div ref="sidebarRef" class="space-y-6 opacity-0 -translate-x-8">
            <!-- Contact Info Cards -->
            <div
              v-for="info in contactInfo"
              :key="info.title"
              class="group relative"
            >
              <!-- Info Card -->
              <div
                class="relative rounded-3xl overflow-hidden transition-all duration-500"
              >
                <!-- Gradient Border -->
                <div
                  class="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"
                ></div>

                <!-- Main Card -->
                <div
                  class="relative bg-card rounded-3xl border border-border group-hover:border-primary/30 p-6 transition-all duration-300"
                >
                  <div class="flex items-start gap-4">
                    <!-- Icon -->
                    <div
                      class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                      :style="{
                        background:
                          info.icon === 'Mail'
                            ? 'linear-gradient(135deg, rgba(0, 225, 255, 0.1) 0%, rgba(27, 212, 193, 0.05) 100%)'
                            : info.icon === 'Phone'
                            ? 'linear-gradient(135deg, rgba(27, 212, 193, 0.1) 0%, rgba(0, 225, 255, 0.05) 100%)'
                            : info.icon === 'MapPin'
                            ? 'linear-gradient(135deg, rgba(0, 225, 255, 0.1) 0%, rgba(27, 212, 193, 0.05) 100%)'
                            : 'linear-gradient(135deg, rgba(27, 212, 193, 0.1) 0%, rgba(0, 225, 255, 0.05) 100%)',
                      }"
                    >
                      <svg
                        class="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          v-if="info.icon === 'Mail'"
                          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                        />
                        <path
                          v-else-if="info.icon === 'Phone'"
                          d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                        />
                        <path
                          v-else-if="info.icon === 'MapPin'"
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        />
                        <path
                          v-else
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>

                    <!-- Content -->
                    <div class="flex-1">
                      <p class="text-sm text-textGray mb-1">
                        {{ t(info.title) }}
                      </p>
                      <a
                        v-if="info.link"
                        :href="info.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="font-medium text-textPrimary hover:text-primary transition-colors duration-300 inline-flex items-center gap-1"
                      >
                        {{ info.value }}
                        <svg
                          v-if="info.link.startsWith('http')"
                          class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                          />
                          <path
                            d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                          />
                        </svg>
                      </a>
                      <p v-else class="font-medium text-textPrimary">
                        {{ info.value }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="group relative">
              <!-- Social Card -->
              <div
                class="relative rounded-3xl overflow-hidden transition-all duration-500"
              >
                <!-- Gradient Border -->
                <div
                  class="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-[#00e1ff] rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"
                ></div>

                <!-- Main Card -->
                <div
                  class="relative bg-card rounded-3xl border border-border group-hover:border-[#00e1ff]/30 p-6 transition-all duration-300"
                >
                  <p class="text-sm text-textGray mb-4">
                    {{ t("contact.follow_us") }}
                  </p>
                  <div class="flex gap-3">
                    <a
                      v-for="social in socialLinks"
                      :key="social.label"
                      :href="social.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="group/social relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                      :aria-label="t(social.label)"
                    >
                      <!-- Background -->
                      <div
                        class="absolute inset-0 bg-card border border-border rounded-xl group-hover/social:border-[#00e1ff]/30 transition-colors duration-300"
                      ></div>

                      <!-- Gradient overlay -->
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"
                      ></div>

                      <!-- Icon -->
                      <svg
                        class="relative z-10 w-5 h-5 text-textGray group-hover/social:text-primary transition-colors duration-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          v-if="social.icon === 'Github'"
                          fill-rule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clip-rule="evenodd"
                        />
                        <path
                          v-else-if="social.icon === 'Linkedin'"
                          fill-rule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clip-rule="evenodd"
                        />
                        <path
                          v-else
                          d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="group relative">
              <!-- Map Card -->
              <div
                class="relative rounded-3xl overflow-hidden transition-all duration-500"
              >
                <!-- Gradient Border -->
                <div
                  class="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"
                ></div>

                <!-- Main Card -->
                <div
                  class="relative bg-card rounded-3xl border border-b-card group-hover:border-primary/30 overflow-hidden transition-all duration-300"
                >
                  <!-- Map -->
                  <div class="aspect-video">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977738015644!2d-122.39568368468156!3d37.78779977975772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806285ddb1a3%3A0xad5b2d368ebb4a8!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style="
                        border: 0;
                        filter: invert(90%) hue-rotate(180deg) contrast(85%);
                      "
                      allowfullscreen
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      :title="t('contact.map.title')"
                      class="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  <!-- Map Overlay -->
                  <div
                    class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0f1729] to-transparent"
                  >
                    <div class="flex items-center gap-2 text-white">
                      <svg
                        class="w-4 h-4 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="text-sm font-medium">{{
                        t("contact.map.location")
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Contact -->
            <div class="group relative">
              <!-- Quick Contact Card -->
              <div
                class="relative rounded-3xl overflow-hidden transition-all duration-500"
              >
                <!-- Gradient Border -->
                <div
                  class="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"
                ></div>

                <!-- Main Card -->
                <div
                  class="relative bg-bg rounded-3xl border border-border group-hover:border-primary/30 p-6 transition-all duration-300"
                >
                  <h3 class="text-lg font-bold text-textPrimary mb-4">
                    {{ t("contact.quick.title") }}
                  </h3>
                  <div class="space-y-3">
                    <a
                      href="tel:+15551234567"
                      class="group/quick flex items-center gap-3 p-3 rounded-xl bg-card border border-borderå hover:border-primary/30 transition-all duration-300"
                    >
                      <div
                        class="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/10 to-primary/10 flex items-center justify-center"
                      >
                        <svg
                          class="w-5 h-5 text-primary"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p class="text-sm text-textGray">
                          {{ t("contact.quick.call_us") }}
                        </p>
                        <p class="text-textPrimary font-medium">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:hello@aftech.dev"
                      class="group/quick flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      <div
                        class="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/10 to-primary/10 flex items-center justify-center"
                      >
                        <svg
                          class="w-5 h-5 text-primary"
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
                      </div>
                      <div>
                        <p class="text-sm text-textGray">
                          {{ t("contact.quick.email_us") }}
                        </p>
                        <p class="text-textPrimary font-medium">
                          hello@aftech.dev
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Form data
const isSubmitting = ref(false);
const submitSuccess = ref(false);
const formData = ref({
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
});

// Contact info (titles are i18n keys)
const contactInfo = [
  {
    icon: "Mail",
    title: "contact.info.email",
    value: "hello@aftech.dev",
    // link: "mailto:hello@aftech.dev",
  },
  {
    icon: "Phone",
    title: "contact.info.phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: "MapPin",
    title: "contact.info.address",
    value: "123 Tech Street, San Francisco, CA 94105",
    link: "https://maps.google.com",
  },
  {
    icon: "Clock",
    title: "contact.info.hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM PST",
    link: null,
  },
];

// Social links (labels are i18n keys)
const socialLinks = [
  {
    icon: "Github",
    href: "https://github.com",
    label: "contact.social.github",
  },
  {
    icon: "Linkedin",
    href: "https://linkedin.com",
    label: "contact.social.linkedin",
  },
  {
    icon: "Twitter",
    href: "https://twitter.com",
    label: "contact.social.twitter",
  },
];

// Form submission handler
const handleSubmit = async () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  submitSuccess.value = false;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show success message
    submitSuccess.value = true;

    // Reset form
    formData.value = {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    };

    // Hide success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false;
    }, 5000);
  } catch (error) {
    console.error("Error submitting form:", error);
  } finally {
    isSubmitting.value = false;
  }
};

// Animation refs
const heroRef = ref(null);
const formRef = ref(null);
const sidebarRef = ref(null);

// Intersection Observer animation
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translate(0)";
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Animate elements
  setTimeout(() => {
    if (heroRef.value) {
      heroRef.value.classList.add("fade-in-up");
    }
    if (formRef.value) observer.observe(formRef.value);
    if (sidebarRef.value) observer.observe(sidebarRef.value);
  }, 100);
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

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.05;
    transform: scale(1);
  }
  50% {
    opacity: 0.08;
    transform: scale(1.05);
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

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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

.fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-spin {
  animation: spin 1s linear infinite;
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

/* Style select dropdown */
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2300e1ff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
}

/* Custom focus styles */
input:focus,
textarea:focus,
select:focus {
  box-shadow: 0 0 0 3px rgba(0, 225, 255, 0.1);
  outline: none;
}

/* Custom placeholder color */
::placeholder {
  color: #94a3b8;
  opacity: 1;
}

/* Custom selection color */
::selection {
  background-color: rgba(0, 225, 255, 0.3);
  color: white;
}

/* Firefox select fix */
@-moz-document url-prefix() {
  select {
    padding-right: 2.5rem;
  }
}
</style>
