<template>
  <header>
    <div class="flex fixed bg-black w-full px-3 py-4 md:px-20">
      <div class="container flex items-center mx-auto">
        <div>
          <a href="#">
            <img
              src="/assets/image/spotify-logo.png"
              alt="Spotify"
              class="w-20 md:w-125px"
            />
          </a>
        </div>

        <div class="flex justify-end flex-1 text-white text-3xl md:hidden">
          <i class="fas fa-bars"></i>
        </div>

        <div class="items-end flex-1 text-white font-bold hidden md:flex">
          <nav class="flex-1">
            <ul class="flex justify-end flex-1">
              <li class="px-4">
                <a href="#">Premium</a>
              </li>

              <li class="px-4">
                <a href="#">Ajuda</a>
              </li>

              <li class="px-4">
                <a href="#">Baixar</a>
              </li>

              <li class="px-4">
                <span class="border-r border-white"></span>
              </li>

              <li class="px-4">
                <a href="#">Inscrever-se</a>
              </li>

              <li class="px-4">
                <a href="#">Log In</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
a {
  @apply hover:text-hoverspt text-sm;
}
</style>