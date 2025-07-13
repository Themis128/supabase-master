<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
// TODO: Replace with Nuxt composables or injects for theme, router, etc.
// import { useTheme } from 'some-theme-lib'
// import { useRouter } from 'vue-router'
// import { useWindowSize } from '@vueuse/core'
// import { useIsLoggedIn, useUser } from 'common'
// import { getMenu } from '~/data/nav'
// import GitHubButton from './GitHubButton.vue'
// import HamburgerButton from './HamburgerMenu.vue'
// import MenuItem from './MenuItem.vue'
// import MobileMenu from './MobileMenu.vue'
// import RightClickBrandLogo from './RightClickBrandLogo.vue'
// import { useSendTelemetryEvent } from '~/lib/telemetry'
// import useDropdownMenu from './useDropdownMenu'
// import { AnnouncementBanner, AuthenticatedDropdownMenu } from 'ui-patterns'
// import Announcement from '../LaunchWeek/7/LaunchSection/Announcement.vue'

defineProps<{
  hideNavbar: boolean
  stickyNavbar?: boolean
}>()

const props = defineProps({
  hideNavbar: Boolean,
  stickyNavbar: {
    type: Boolean,
    default: true,
  },
})

const open = ref(false)
const width = ref(0)

onMounted(() => {
  width.value = window.innerWidth
  window.addEventListener('resize', () => {
    width.value = window.innerWidth
  })
})

watch(open, (val) => {
  document.body.style.overflow = val ? 'hidden' : 'auto'
})

watch(width, (val) => {
  if (val >= 1024) open.value = false
})

const isHomePage = false // TODO: use route
const isLaunchWeekPage = false // TODO: use route
const isLaunchWeekXPage = false // TODO: use route
const isGAWeekSection = false // TODO: use route
const disableStickyNav = isLaunchWeekXPage || isGAWeekSection || isLaunchWeekPage || !props.stickyNavbar
const showLaunchWeekNavMode = (isLaunchWeekPage || isGAWeekSection) && !open.value
const isLoggedIn = false // TODO: use auth composable
const menu = { primaryNav: [] } // TODO: get menu
const user = null // TODO: get user
const userMenu = null // TODO: get user menu
const sendTelemetryEvent = () => {} // TODO: implement
const resolvedTheme = 'light' // TODO: use theme

if (props.hideNavbar) {
  // In Vue, just don't render
}

const showDarkLogo = isLaunchWeekPage || resolvedTheme.includes('dark') || isHomePage
</script>

<template>
  <AnnouncementBanner />
  <div :class="['sticky top-0 z-40 transform', disableStickyNav && 'relative']" style="transform: translate3d(0,0,999px)">
    <div :class="[
      'absolute inset-0 h-full w-full bg-background/90 dark:bg-background/95',
      !showLaunchWeekNavMode && '!opacity-100 transition-opacity',
      showLaunchWeekNavMode && '!bg-transparent transition-all',
      isGAWeekSection && 'dark:!bg-alternative'
    ]" />
    <nav
      :class="[
        'relative z-40 border-default border-b backdrop-blur-sm transition-opacity',
        showLaunchWeekNavMode && 'border-muted border-b bg-alternative/50'
      ]"
      data-testid="main-nav"
    >
      <div class="relative flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20">
        <div class="flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between">
          <div class="flex items-center">
            <div class="flex items-center flex-shrink-0">
              <!-- <RightClickBrandLogo /> -->
            </div>
            <!-- NavigationMenu -->
            <div class="hidden pl-8 sm:space-x-4 lg:flex h-16">
              <ul data-testid="nav-menu-list">
                <!--
                <li v-for="menuItem in menu.primaryNav" :key="menuItem.title">
                  <MenuItem :href="menuItem.url" :title="menuItem.title" />
                </li>
                -->
              </ul>
            </div>
          </div>
          <div class="flex items-center gap-2 opacity-0 animate-fade-in !scale-100 delay-300">
            <span data-testid="nav-github-btn">
              <!-- <GitHubButton /> -->
            </span>
            <template v-if="isLoggedIn">
              <Button class="hidden lg:block" asChild>
                <NuxtLink to="/dashboard/projects">Dashboard</NuxtLink>
              </Button>
              <!-- <AuthenticatedDropdownMenu :menu="userMenu" :user="user" site="www" /> -->
            </template>
            <template v-else>
              <Button type="default" class="hidden lg:block" asChild>
                <NuxtLink to="https://supabase.com/dashboard">Sign in</NuxtLink>
              </Button>
              <Button class="hidden lg:block" asChild>
                <NuxtLink to="https://supabase.com/dashboard">Start your project</NuxtLink>
              </Button>
            </template>
          </div>
        </div>
        <!-- <HamburgerButton :toggleFlyOut="() => open.value = true" :showLaunchWeekNavMode="showLaunchWeekNavMode" /> -->
      </div>
      <span data-testid="nav-mobile-menu">
        <!-- <MobileMenu :open="open" :setOpen="(v) => open.value = v" :menu="menu" /> -->
      </span>
    </nav>
    <!-- <ScrollProgress /> -->
  </div>
</template>
