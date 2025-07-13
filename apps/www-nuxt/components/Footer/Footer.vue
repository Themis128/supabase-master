<template>
  <footer
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
      <SectionContainer class="grid grid-cols-2 md:flex items-center justify-between text-foreground md:justify-center gap-8 md:gap-16 xl:gap-28 !py-6 md:!py-10 text-sm">
        <div class="flex flex-col md:flex-row gap-2 md:items-center">
          We protect your data.
          <NuxtLink to="/security" class="text-brand hover:underline">
            More on Security
          </NuxtLink>
        </div>
        <ul class="flex flex-col md:flex-row gap-2 md:gap-8 justify-center md:items-center">
          <li class="flex items-center gap-2 whitespace-nowrap flex-nowrap">
            SOC2 Type 2
            <span class="text-foreground-lighter hidden sm:inline">Certified</span>
          </li>
          <li class="flex items-center gap-2 whitespace-nowrap flex-nowrap">
            HIPAA
            <span class="text-foreground-lighter hidden sm:inline">Compliant</span>
          </li>
        </ul>
      </SectionContainer>
      <div class="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
    <SectionContainer class="py-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <NuxtLink to="/" class="w-40">
            <img
              :src="supabaseLogoWordmarkLight"
              width="160"
              height="30"
              alt="Supabase Logo"
              class="dark:hidden"
              loading="eager"
            />
            <img
              :src="supabaseLogoWordmarkDark"
              width="160"
              height="30"
              alt="Supabase Logo"
              class="hidden dark:block"
              loading="eager"
            />
          </NuxtLink>
          <div class="flex space-x-5">
            <a
              href="https://twitter.com/supabase"
              class="text-foreground-lighter hover:text-foreground transition"
              aria-label="Twitter"
            >
              <IconTwitterX :size="22" />
            </a>
            <a
              href="https://github.com/supabase"
              class="text-foreground-lighter hover:text-foreground transition"
              aria-label="GitHub"
            >
              <IconGitHubSolid :size="22" />
            </a>
            <a
              href="https://discord.supabase.com/"
              class="text-foreground-lighter hover:text-foreground transition"
              aria-label="Discord"
            >
              <IconDiscord :size="22" />
            </a>
            <a
              href="https://youtube.com/c/supabase"
              class="text-foreground-lighter hover:text-foreground transition"
              aria-label="Youtube"
            >
              <IconYoutubeSolid :size="22" />
            </a>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
          <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
            <template v-for="(segment, segIdx) in footerData.filter(Boolean)" :key="segment.title || segIdx">
              <div v-if="segment && segment.title && Array.isArray(segment.links)">
                <h6 class="text-foreground overwrite text-base">{{ segment.title }}</h6>
                <ul v-if="segment.links && segment.links.filter(Boolean).length > 0" class="mt-4 space-y-2">
                  <template v-for="(linkObj, idx) in segment.links.filter(Boolean)" :key="`${segment.title || segIdx}_link_${idx}`">
                    <li v-if="linkObj">
                      <template v-if="linkObj.url">
                        <a
                          v-if="linkObj.url.startsWith('https')"
                          :href="linkObj.url"
                          class="text-sm transition-colors text-foreground-lighter hover:text-foreground"
                        >
                          {{ linkObj.text }}
                        </a>
                        <NuxtLink
                          v-else
                          :to="linkObj.url"
                          class="text-sm transition-colors text-foreground-lighter hover:text-foreground"
                        >
                          {{ linkObj.text }}
                        </NuxtLink>
                      </template>
                      <template v-else-if="linkObj.component">
                        <component :is="linkObj.component">
                          <span class="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                            {{ linkObj.text }}
                          </span>
                        </component>
                      </template>
                      <template v-else>
                        <span class="text-sm transition-colors text-muted hover:text-foreground-lighter">
                          {{ linkObj.text }}
                          <span class="ml-2 inline text-xs xl:ml-0 xl:block 2xl:ml-2 2xl:inline">
                            <Badge size="small">Coming soon</Badge>
                          </span>
                        </span>
                      </template>
                    </li>
                  </template>
                </ul>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="border-default mt-32 flex justify-between border-t pt-8">
        <small class="small">&copy; Supabase Inc</small>
        <div :class="[forceDark && 'hidden']">
          <ThemeToggle :forceDark="forceDark" />
        </div>
      </div>
    </SectionContainer>
  </footer>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import SectionContainer from '../Layouts/SectionContainer.vue'
import { Badge, IconDiscord, IconGitHubSolid, IconTwitterX, IconYoutubeSolid } from 'ui'
import ThemeToggle from 'ui-patterns/ThemeToggle.vue'
import footerData from 'data/Footer'
import useDarkLaunchWeeks from '../../hooks/useDarkLaunchWeeks'
import supabaseLogoWordmarkDark from 'common/assets/images/supabase-logo-wordmark--dark.png'
import supabaseLogoWordmarkLight from 'common/assets/images/supabase-logo-wordmark--light.png'

const props = defineProps<{
  className?: string
  hideFooter?: boolean
}>()

const route = useRoute()
const isDarkLaunchWeek = useDarkLaunchWeeks()
const isGAWeek = computed(() => route.path.includes('/ga-week'))
const forceDark = computed(() => isDarkLaunchWeek.value)

// In Nuxt, you can use <template v-if="!props.hideFooter"> around the whole footer
</script>
