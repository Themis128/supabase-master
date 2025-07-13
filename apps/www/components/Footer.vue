<script setup lang="ts">
import { computed } from 'vue'
// TODO: Replace with Nuxt composables or injects for theme, router, etc.
// import { useRouter } from 'vue-router'
// import { useTheme } from 'some-theme-lib'
// import { useDarkLaunchWeeks } from '~/composables/useDarkLaunchWeeks'
// import SectionContainer from '../Layouts/SectionContainer.vue'
// import ThemeToggle from 'ui-patterns/ThemeToggle.vue'
// import IconDiscord from 'ui/IconDiscord.vue'
// import IconGitHubSolid from 'ui/IconGitHubSolid.vue'
// import IconTwitterX from 'ui/IconTwitterX.vue'
// import IconYoutubeSolid from 'ui/IconYoutubeSolid.vue'
// import footerData from '~/data/Footer'

defineProps<{
  className?: string
  hideFooter?: boolean
}>()

const props = defineProps({
  className: String,
  hideFooter: Boolean,
})

// Placeholder logic for theme and route
const isDarkLaunchWeek = false
const isGAWeek = false
const forceDark = isDarkLaunchWeek
const supabaseLogoWordmarkLight = '/logo-light.png' // Replace with actual asset
const supabaseLogoWordmarkDark = '/logo-dark.png' // Replace with actual asset
const footerData = [] // Replace with actual data
</script>

<template>
  <footer
    v-if="!props.hideFooter"
    :class="[
      'bg-alternative',
      isDarkLaunchWeek && 'bg-[#060809]',
      isGAWeek && 'dark:bg-alternative',
      props.className
    ]"
    aria-labelledby="footerHeading"
  >
    <h2 id="footerHeading" class="sr-only">Footer</h2>
    <div class="w-full !py-0">
      <!-- SectionContainer replacement -->
      <div class="grid grid-cols-2 md:flex items-center justify-between text-foreground md:justify-center gap-8 md:gap-16 xl:gap-28 !py-6 md:!py-10 text-sm">
        <div class="flex flex-col md:flex-row gap-2 md:items-center">
          We protect your data.
          <NuxtLink to="/security" class="text-brand hover:underline">
            More on Security
          </NuxtLink>
        </div>
        <ul class="flex flex-col md:flex-row gap-2 md:gap-8 justify-center md:items-center" data-testid="footer-cert-list">
          <li class="flex items-center gap-2 whitespace-nowrap flex-nowrap">SOC2 Type 2 <span class="text-foreground-lighter hidden sm:inline">Certified</span></li>
          <li class="flex items-center gap-2 whitespace-nowrap flex-nowrap">HIPAA <span class="text-foreground-lighter hidden sm:inline">Compliant</span></li>
        </ul>
      </div>
      <div class="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
    <!-- SectionContainer replacement -->
    <div class="py-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <NuxtLink to="/" class="w-40">
            <img :src="supabaseLogoWordmarkLight" width="160" height="30" alt="Supabase Logo" class="dark:hidden" />
            <img :src="supabaseLogoWordmarkDark" width="160" height="30" alt="Supabase Logo" class="hidden dark:block" />
          </NuxtLink>
          <div class="flex space-x-5">
            <a href="https://twitter.com/supabase" class="text-foreground-lighter hover:text-foreground transition">
              <span class="sr-only">Twitter</span>
              <!-- <IconTwitterX :size="22" /> -->
            </a>
            <a href="https://github.com/supabase" class="text-foreground-lighter hover:text-foreground transition">
              <span class="sr-only">GitHub</span>
              <!-- <IconGitHubSolid :size="22" /> -->
            </a>
            <a href="https://discord.supabase.com/" class="text-foreground-lighter hover:text-foreground transition">
              <span class="sr-only">Discord</span>
              <!-- <IconDiscord :size="22" /> -->
            </a>
            <a href="https://youtube.com/c/supabase" class="text-foreground-lighter hover:text-foreground transition">
              <span class="sr-only">Youtube</span>
              <!-- <IconYoutubeSolid :size="22" /> -->
            </a>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
          <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
            <!--
            <div v-for="(segment, segIdx) in footerData" :key="`footer_${segment.title || segIdx}`">
              <h6 class="text-foreground overwrite text-base">{{ segment.title }}</h6>
              <ul v-if="segment.links && segment.links.length" class="mt-4 space-y-2" data-testid="footer-links-list">
                <li v-for="(linkObj, idx) in segment.links" :key="`${segment.title || segIdx}_link_${idx}`">
                  <NuxtLink v-if="linkObj.url && !linkObj.url.startsWith('https')" :to="linkObj.url" class="text-sm transition-colors text-foreground-lighter hover:text-foreground">{{ linkObj.text }}</NuxtLink>
                  <a v-else-if="linkObj.url" :href="linkObj.url" class="text-sm transition-colors text-foreground-lighter hover:text-foreground">{{ linkObj.text }}</a>
                  <span v-else class="text-sm transition-colors text-muted hover:text-foreground-lighter">
                    {{ linkObj.text }}
                    <span class="ml-2 inline text-xs xl:ml-0 xl:block 2xl:ml-2 2xl:inline">
                      <!-- <Badge size="small">Coming soon</Badge> -->
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            -->
          </div>
        </div>
      </div>
      <div class="border-default mt-32 flex justify-between border-t pt-8">
        <small class="small">&copy; Supabase Inc</small>
        <div v-if="!forceDark">
          <!-- <ThemeToggle :forceDark="forceDark" /> -->
        </div>
      </div>
    </div>
  </footer>
</template>
