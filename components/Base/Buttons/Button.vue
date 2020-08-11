<template>
  <button :class="color">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    color: String
  },
};
</script>

<style lang="scss">
button {
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: 300ms all;
}

.dangers {
  background: #e35757;
  color: #fff;
  &:hover {
    background: #c32a2a;
  }
}

.success {
  background: #28ab73;
  color: #fff;
  &:hover{
    background: #1e9965;
  }
}
</style>
