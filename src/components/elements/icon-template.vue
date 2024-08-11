<template>
    <svg class="icon-template">
      <use :xlink:href="require('@/assets/sprite.svg') + '#' + name"></use>
    </svg>
  </template>
  
  <script>
  export default {
    name: 'icon-template',
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style lang="scss">
  </style>