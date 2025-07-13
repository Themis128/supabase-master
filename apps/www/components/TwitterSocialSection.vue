<template>
    <div>
        <SectionContainer class="w-full text-center flex flex-col items-center !pb-0">
            <h3 class="h2">Join the community</h3>
            <p class="p max-w-[300px] md:max-w-none">
                Discover what our community has to say about their Supabase experience.
            </p>
            <div class="my-4 flex justify-center gap-2">
                <Button asChild size="small" type="default">
                    <a href="https://github.com/supabase/supabase/discussions" target="_blank" tabindex="-1"
                        @click="sendTelemetry('homepage_github_discussions_button_clicked')">
                        GitHub discussions
                    </a>
                </Button>
                <Button asChild type="default" size="small">
                    <a href="https://discord.supabase.com/" target="_blank" tabindex="-1"
                        @click="sendTelemetry('homepage_discord_button_clicked')">
                        Discord
                    </a>
                </Button>
            </div>
        </SectionContainer>
        <SectionContainer
            class="relative w-full !px-0 lg:!px-16 xl:!px-0 !pb-0 mb-16 md:mb-12 lg:mb-12 !pt-6 max-w-[1400px]">
            <TwitterSocialProofMobile class="lg:hidden -mb-32" :tweets="tweets" />
            <TwitterSocialProof class="hidden lg:flex" />
        </SectionContainer>
    </div>
</template>

<script setup lang="ts">
import SectionContainer from './Layouts/SectionContainer.vue'
import TwitterSocialProof from './Sections/TwitterSocialProof.vue'
import TwitterSocialProofMobile from './Sections/TwitterSocialProofMobile.vue'
import Button from 'ui/Button.vue'
import { ref } from 'vue'
import Tweets from '~/data/tweets/Tweets.json'

const tweets = ref(Tweets.slice(0, 18))
function sendTelemetry(action: string) {
    // Implement telemetry event logic here
}
</script>
