<script setup>
import {ConfigProvider} from "radix-vue";

const idGeneratorFunc = () => useId()
</script>

<template>
  <NuxtRouteAnnouncer/>
  <ConfigProvider :use-id="idGeneratorFunc">
    <NuxtPage/>
  </ConfigProvider>
</template>