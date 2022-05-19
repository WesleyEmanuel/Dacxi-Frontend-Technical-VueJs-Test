<template>
  <main
    class="
      text-center
      my-28
      text-[1rem]
      sm:text-[20px]
      relative
      left-[-800px]
      translate-x-[800px]
      animate-right
    "
  >
    <h1 class="font-bold text-4xl sm:text-6xl mb-3">Cotação Bitcoin</h1>
    <span>Consulte o preço em tempo real</span>

    <BitcoinQuotationContent />
  </main>
</template>

<script>
    import BitcoinQuotationContent from './BitcoinQuotationContent.vue';
    
    export default {
        name: 'HomePage',
        components: {
            BitcoinQuotationContent
        }
    }
</script>