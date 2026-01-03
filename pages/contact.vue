<template>
  <div class="min-h-screen bg-bg">
    <!-- Hero Section -->
    <section class="relative py-16 md:py-24 lg:py-32 overflow-hidden">
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
              backgroundSize: '40px 40px',
            }"
          ></div>
        </div>

        <!-- Animated Orbs -->
        <div
          class="absolute top-1/3 -left-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-5 blur-3xl animate-pulse-slow"
          ></div>
        </div>

        <!-- Floating Elements -->
        <div class="absolute top-1/4 right-4 md:right-20">
          <div
            class="w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-lg border border-primary/50 animate-float rotate-12"
          ></div>
        </div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref="heroRef" class="max-w-4xl mx-auto text-center">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6 sm:mb-8"
          >
            <div class="flex items-center gap-1 sm:gap-2">
              <div class="relative">
                <Icon
                  name="heroicons:information-circle"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-textPrimary"
                />
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 animate-ping"
                ></div>
              </div>
              <span
                class="text-xs sm:text-sm font-semibold text-textPrimary tracking-wider uppercase"
                >{{ t("contact.badge") }}</span
              >
            </div>
          </div>

          <!-- Title -->
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            <span class="text-textPrimary">{{ t("contact.title.part1") }}</span>
            <span
              class="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient mt-2"
            >
              {{ t("contact.title.part2") }}
            </span>
            <span class="text-textPrimary">{{ t("contact.title.part3") }}</span>
          </h1>

          <!-- Description -->
          <p
            class="text-base sm:text-lg md:text-xl lg:text-2xl text-textLightGray max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0"
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
    <section class="relative py-8 sm:py-12 lg:py-16 pb-16 sm:pb-24 lg:pb-32">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <!-- Contact Form -->
          <div ref="formRef" class="lg:col-span-2 opacity-0 translate-x-8">
            <div
              class="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500"
            >
              <!-- Gradient Border -->
              <div
                class="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"
              ></div>

              <!-- Main Card -->
              <div
                class="relative bg-card rounded-2xl sm:rounded-3xl border border-border group-hover:border-primary/30 p-6 sm:p-8 transition-all duration-300"
              >
                <!-- Form Header -->
                <div class="mb-6 sm:mb-8">
                  <h2
                    class="text-2xl sm:text-3xl font-bold text-textPrimary mb-2 sm:mb-3"
                  >
                    {{ t("contact.form.title") }}
                  </h2>
                  <p class="text-sm sm:text-base text-textLightGray">
                    {{ t("contact.form.subtitle") }}
                  </p>
                </div>

                <!-- Form -->
                <form
                  @submit.prevent="handleSubmit"
                  class="space-y-4 sm:space-y-6"
                >
                  <!-- Name & Email -->
                  <div class="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div class="space-y-2 sm:space-y-3">
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
                          class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-inputField border border-border rounded-lg text-textPrimary placeholder-textGray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          :placeholder="t('contact.placeholders.name')"
                        />
                      </div>
                    </div>

                    <div class="space-y-2 sm:space-y-3">
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
                          class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-inputField border border-border rounded-lg text-textPrimary placeholder-textGray focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Company & Subject -->
                  <div class="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div class="space-y-2 sm:space-y-3">
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
                          class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-inputField border border-border rounded-lg text-textPrimary placeholder-textGray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          :placeholder="t('contact.placeholders.company')"
                        />
                      </div>
                    </div>

                    <div class="space-y-2 sm:space-y-3">
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
                          class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-inputField border border-border rounded-lg text-textPrimary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 appearance-none"
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
                        <Icon
                          name="heroicons:chevron-down"
                          class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-textGray pointer-events-none"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Message -->
                  <div class="space-y-2 sm:space-y-3">
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
                        rows="4"
                        class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-inputField border border-border rounded-lg text-textPrimary placeholder-textGray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                        :placeholder="t('contact.placeholders.message')"
                      ></textarea>
                    </div>
                  </div>

                  <!-- Submit Button -->
                  <div class="pt-3 sm:pt-4">
                    <button
                      type="submit"
                      :disabled="isSubmitting"
                      :class="[
                        'group/btn relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto',
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
                        class="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-[#0f1729]"
                      >
                        <template v-if="isSubmitting">
                          <div
                            class="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#0f1729] border-t-transparent rounded-full animate-spin"
                          ></div>
                          <span>{{ t("contact.submit.sending") }}</span>
                        </template>
                        <template v-else>
                          <span>{{ t("contact.submit.send") }}</span>
                          <Icon
                            name="heroicons:arrow-right"
                            class="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
                          />
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
                        <Icon
                          name="heroicons:check-circle"
                          class="w-5 h-5 text-primary shrink-0"
                        />
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
          <div
            ref="sidebarRef"
            class="space-y-4 sm:space-y-6 opacity-0 -translate-x-8"
          >
            <!-- Contact Info Cards -->
            <div
              v-for="info in contactInfo"
              :key="info.title"
              class="group relative"
            >
              <!-- Info Card -->
              <div
                class="relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500"
              >
                <!-- Gradient Border -->
                <div
                  class="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"
                ></div>

                <!-- Main Card -->
                <div
                  class="relative bg-card rounded-2xl sm:rounded-3xl border border-border group-hover:border-primary/30 p-4 sm:p-6 transition-all duration-300"
                >
                  <div class="flex items-start gap-3 sm:gap-4">
                    <!-- Icon -->
                    <div
                      class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
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
                      <Icon
                        v-if="info.icon === 'Mail'"
                        name="heroicons:envelope"
                        class="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-secondary transition-colors duration-300"
                      />
                      <Icon
                        v-else-if="info.icon === 'Phone'"
                        name="heroicons:phone"
                        class="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-secondary transition-colors duration-300"
                      />
                      <Icon
                        v-else-if="info.icon === 'MapPin'"
                        name="heroicons:map-pin"
                        class="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-secondary transition-colors duration-300"
                      />
                      <Icon
                        v-else
                        name="heroicons:clock"
                        class="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-secondary transition-colors duration-300"
                      />
                    </div>

                    <!-- Content -->
                    <div class="flex-1 min-w-0">
                      <p class="text-xs sm:text-sm text-textGray mb-1 truncate">
                        {{ t(info.title) }}
                      </p>
                      <a
                        v-if="info.link"
                        :href="info.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="font-medium text-sm sm:text-base text-textPrimary hover:text-primary transition-colors duration-300 inline-flex items-center gap-1 truncate"
                      >
                        <span class="truncate">{{ info.value }}</span>
                        <Icon
                          v-if="info.link.startsWith('http')"
                          name="heroicons:arrow-top-right-on-square"
                          class="w-3 h-3 sm:w-4 sm:h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </a>
                      <p
                        v-else
                        class="font-medium text-sm sm:text-base text-textPrimary truncate"
                      >
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
                class="relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500"
              >
                <!-- Gradient Border -->
                <div
                  class="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-[#00e1ff] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"
                ></div>

                <!-- Main Card -->
                <div
                  class="relative bg-card rounded-2xl sm:rounded-3xl border border-border group-hover:border-[#00e1ff]/30 p-4 sm:p-6 transition-all duration-300"
                >
                  <p class="text-xs sm:text-sm text-textGray mb-3 sm:mb-4">
                    {{ t("contact.follow_us") }}
                  </p>
                  <div class="flex gap-2 sm:gap-3">
                    <a
                      v-for="social in socialLinks"
                      :key="social.label"
                      :href="social.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="group/social relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                      :aria-label="t(social.label)"
                    >
                      <!-- Background -->
                      <div
                        class="absolute inset-0 bg-card border border-border rounded-lg sm:rounded-xl group-hover/social:border-[#00e1ff]/30 transition-colors duration-300"
                      ></div>

                      <!-- Gradient overlay -->
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg sm:rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"
                      ></div>

                      <!-- Icon -->
                      <Icon
                        v-if="social.icon === 'Github'"
                        name="mdi:github"
                        class="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-textGray group-hover/social:text-primary transition-colors duration-300"
                      />
                      <Icon
                        v-else-if="social.icon === 'Linkedin'"
                        name="mdi:linkedin"
                        class="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-textGray group-hover/social:text-primary transition-colors duration-300"
                      />
                      <Icon
                        v-else
                        name="mdi:twitter"
                        class="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-textGray group-hover/social:text-primary transition-colors duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="group relative overflow-hidden">
              <!-- Map Card -->
              <div
                class="relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500"
              >
                <!-- Gradient Border -->
                <div
                  class="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"
                ></div>

                <!-- Main Card -->
                <div
                  class="relative bg-card rounded-2xl sm:rounded-3xl border border-primary/30 overflow-hidden transition-all duration-300"
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
                    class="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-[#0f1729] to-transparent"
                  >
                    <div class="flex items-center gap-2 text-white">
                      <Icon
                        name="heroicons:map-pin"
                        class="w-3 h-3 sm:w-4 sm:h-4 text-primary"
                      />
                      <span class="text-xs sm:text-sm font-medium">{{
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
                class="relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500"
              >
                <!-- Gradient Border -->
                <div
                  class="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"
                ></div>

                <!-- Main Card -->
                <div
                  class="relative bg-bg rounded-2xl sm:rounded-3xl border border-border group-hover:border-primary/30 p-4 sm:p-6 transition-all duration-300"
                >
                  <h3
                    class="text-base sm:text-lg font-bold text-textPrimary mb-3 sm:mb-4"
                  >
                    {{ t("contact.quick.title") }}
                  </h3>
                  <div class="space-y-2 sm:space-y-3">
                    <a
                      href="tel:+15551234567"
                      class="group/quick flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      <div
                        class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-primary/10 to-primary/10 flex items-center justify-center shrink-0"
                      >
                        <Icon
                          name="heroicons:phone"
                          class="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                        />
                      </div>
                      <div class="min-w-0">
                        <p class="text-xs sm:text-sm text-textGray truncate">
                          {{ t("contact.quick.call_us") }}
                        </p>
                        <p
                          class="text-sm sm:text-base text-textPrimary font-medium truncate"
                        >
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:hello@aftech.dev"
                      class="group/quick flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      <div
                        class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-primary/10 to-primary/10 flex items-center justify-center shrink-0"
                      >
                        <Icon
                          name="heroicons:envelope"
                          class="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                        />
                      </div>
                      <div class="min-w-0">
                        <p class="text-xs sm:text-sm text-textGray truncate">
                          {{ t("contact.quick.email_us") }}
                        </p>
                        <p
                          class="text-sm sm:text-base text-textPrimary font-medium truncate"
                        >
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
  width: 8px;
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

/* Responsive text sizing */
@media (max-width: 640px) {
  .text-balance {
    text-wrap: balance;
  }
}
</style>
