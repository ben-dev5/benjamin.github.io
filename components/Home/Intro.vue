<template>
  <div class="space-y-6">
    <NuxtImg src="/avatar.png" alt="Fayaz Ahmed"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-15 w-15 sm:h-25 sm:w-40"
      sizes="48px sm:800px" placeholder format="webp" />
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Bonjour,
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      je me présente Benjamin Cahn, étudiant en Master à Epitech.
      Après avoir validé un BTS SIO option SLAM en 2024, j'ai voulu consolider mes connaissances et 
      continuer dans le domaine de l'informatique.
      Ainsi, j'ai intégré une prépa en vue d'un Master à Epitech.
      Cette prépa consiste en une remise à niveau abordant plusieurs domaines variés de l'informatique.
      Du développement Web à la création de jeu en java et 2D (POO), en passant par de l'administration Web et réseau.
    </p>
    
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Benjamin Cahn",
  description:
    "Benjamin Cahn étudiant en informatique en recherche d'alternance dans le développement Web",
});
</script>
