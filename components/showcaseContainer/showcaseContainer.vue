<template>
  <div class="showcase">
    <img v-for="(lr, index) in showcaseItems" :key="index" :style="{'z-index':lr.layer||index} " :src="lr.src" :alt="lr.alt">
  </div>
</template>

<script lang="ts">
    export default {
        props:{
          showcaseItems: Array,
          showcaseWidth: String
        },
    };
</script>

<style lang="scss">
.showcase{
  margin: auto;
  position: relative;
  height: 49vw;
  max-height: 562px;
  img{
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    object-fit: contain;
    height: 100%;
  }
}
</style>
