<script setup lang="ts">
import FeaturedProjects from '~/components/Home/FeaturedProjects.vue';
</script>

<template>
  <main class="min-h-screen">
    <div class="space-y-24">
      <HomeIntro />
      <HomeSocialLinks />
      <FeaturedProjects/>
      <HomeFeaturedArticles/>
       <NuxtLink
          to="/CV.pdf"
          external
        >
        Cliquer
      </NuxtLink>
      <HomeNewsletter />
    </div>
  </main>
</template>
