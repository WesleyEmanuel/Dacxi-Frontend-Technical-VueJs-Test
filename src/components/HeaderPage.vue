<template>

  <nav class="flex justify-between items-center flex-col sm:flex-row sm:mx-[15%] gap-5 relative top-[-80px] translate-y-[140px] animate-down">

    <div class="w-28 cursor-pointer">
      <img src="@/assets/logo.png" alt="Dacxi Logo">
    </div>

    <div class="cursor-pointer border py-1 px-4 rounded-[50px] hover:bg-cyan-800 hover:border-cyan-800 transition-colors duration-200">
      <span>Entrar</span>
    </div>

  </nav>
</template>

<script>

  export default {
    name: 'HeaderPage'
  }
</script>
