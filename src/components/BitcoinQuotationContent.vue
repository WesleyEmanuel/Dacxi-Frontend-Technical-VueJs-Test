<template>
  <section class="flex flex-col gap-10 mt-10 mx-10 justify-center ">
      <div>
          <span>Pesquisar por data</span>

          <form class="flex justify-center gap-1 mt-2" @submit="searchData">
              <input type="number" name="dia" v-model="dia" placeholder="dd">
              <input type="number" name="mes" v-model="mes" placeholder="mm">
              <input type="number" name="ano" v-model="ano" placeholder="aaaa">
              
              <button class="border-none bg-primary-color px-4 py-2 rounded-md hover:bg-cyan-800 transition-colors duration-200">
                <SearchIcon class="w-6"/>
              </button>
          </form>
      </div>

      <div class="flex flex-col gap-10 md:flex-row md:justify-center md:gap-40">
        <div>
            <span>Preço Bitcoin</span>
            <p class="text-3xl md:text-center md:mt-2">R$ {{parseFloat(coinPrice).toLocaleString('pt-br',{style: 'decimal', minimumFractionDigits:2})}}</p>
        </div>

        <div>
            <span>Valor de Mercado</span>
            <p class="text-2xl md:text-3xl md:text-center md:mt-2">R$ {{parseFloat(marketCap).toLocaleString('pt-br',{style: 'decimal', minimumFractionDigits:2})}}</p>
        </div>
      </div>
  </section>
</template>

<script>
    import { SearchIcon } from '@heroicons/vue/solid'

    export default {
        name: 'BitcoinQuotationContent',
        components: {
            SearchIcon
        },
        data(){
            return{
                coinPrice: '',
                marketCap: ''
            }
        },
        async mounted(){
                const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=BRL&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false')
                const data = await res.json()
                this.coinPrice = data[0].current_price
                this.marketCap = data[0].market_cap
                
        },
        methods: {
            async searchData(e){
                e.preventDefault()
                const searchedDate = `${this.dia}-${this.mes}-${this.ano}`
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${searchedDate}&localization=false`)
                const data = await res.json()
                this.coinPrice = Math.floor(data.market_data.current_price.brl)
                this.marketCap = Math.floor(data.market_data.market_cap.brl)
            }
        }
    }
</script>

<style scoped>
    input{
        @apply border-none w-20 bg-primary-color outline-none p-2 rounded-md text-center
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
</style>