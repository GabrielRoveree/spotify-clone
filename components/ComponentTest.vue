<template>
  <h1 class="bg-green-500 text-red-300 hover:bg-red-300 hover:text-green-500">Tudo são classes</h1>
  <button class="btn blue">Botão</button>
  <button class="btn green">Botão</button>
  <button class="btn red">Botão</button>

  <div class="w-4 md:w-6 lg:w-10 h-4 md:h-6 lg:h-10 m-4 bg-green-400  md:bg-blue-400 lg:bg-red-400 xl:bg-gray-900"></div>

  <div>
    <input type="text" placeholder="Clica em mim" class="bg-gray-300 text-gray-900 focus:bg-red-600 focus:text-red-400">
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.btn {
  @apply text-white font-bold py-2 px-4 m-4 rounded;

  &.blue {
    @apply bg-blue-500 hover:bg-blue-700;
  }

  &.green {
    @apply bg-green-500 hover:bg-green-700;
  }

  &.red {
    @apply bg-red-500 hover:bg-red-700;
  }
}
</style>