<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projets" :description="description" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
const description =
  "J'ai eu l'occasion durant mon BTS ainsi qu'à Epitech de travailler sur différents projets.J'ai choisi de présenter uniquement mes trois projets essentiels.";
useSeoMeta({
  title: "Projets | Benjamin Cahn",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
