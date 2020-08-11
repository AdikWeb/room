<template>
  <div class="container">
    <div class="pad-2">
      <div class="card">
        <ShowcaseContainer :showcase-items="customShowcase||showcase"></ShowcaseContainer>
        <Button @click.native="saveResult" color="success" class="mt-2">Save</Button>
        <Button @click.native="resetCustomShowcase" color="dangers" class="mt-2">Reset</Button>
      </div>
    </div>
    <div class="pad-2">
      <div class="details">
        <div class="min" @click="setPicture" :data-layer="lr.layer" v-for="(lr, index) in details" :key="index" >
          <img :style="{'z-index':lr.layer||index} " :src="lr.src" :alt="lr.alt">
        </div>
      </div>
    </div>
    <div class="pad-2">
      <div class="saved">
        <ShowcaseContainer showcase-width="320px" v-for="(showcase, index) in savedResults" :key="index" :showcase-items="showcase"></ShowcaseContainer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "index",
  computed:{
    showcase: function():any{
      // @ts-ignore
      return this.$store.getters.showcase
    },
    savedResults: function():any{
      // @ts-ignore
      return this.$store.getters.savedResults
    },
     customShowcase: function():any{
      // @ts-ignore
      return this.$store.getters.customShowcase
    },
    details: function():any{
      // @ts-ignore
      return this.$store.getters.details
    }
  },
  methods:{
    setPicture(el:any){
      // @ts-ignore
      this.$store.dispatch('setPicture', +el.target.dataset.layer);
    },
    saveResult: function (){
      // @ts-ignore
      this.$store.commit('saveResult');
    },
    resetCustomShowcase: function(){
      // @ts-ignore
      this.$store.commit('resetCustomShowcase');
    },

  }
}
</script>

<style lang="scss">
  .container{
    max-width: 1024px;
    width: 100%;
  }
  .card {
    background: #fefefe;
    height: auto;
    box-shadow: 0 12px 26px 1px black;
    padding: 15px;
  }
  .pad-2{
    padding: 24px;
  }
  .mt-2{
    margin-top: 24px;
  }
  .details{
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    margin-left: -10px;
    margin-right: -10px;
    flex-wrap: wrap;
    cursor: pointer;

    .min{
      background: #fff;
      border: 1px solid #ccc;
      margin: 5px 10px;
      transition: 300ms all;
      &:hover{
        box-shadow: 0 12px 26px 1px black;
      }
      @media screen and (max-width: 767px){
        flex-grow: 1;
      }
    }
    img{
      display: block;
      object-fit: contain;
      height: 100px;
      margin: auto;
      pointer-events: none;
    }
  }
</style>
