<template>
  <div class="page-default">
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.page-default{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #313131;
}
</style>
