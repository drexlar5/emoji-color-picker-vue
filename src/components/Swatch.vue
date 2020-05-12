<template>
  <div class="grid-item">
    <div class="grid-cell--top" :style="effect(swatch)">
      <span v-html="swatch.emoji" :class="{ bounce: swatch == active }"></span>
    </div>
    <div class="grid-cell--bottom" :style="color(swatch)">
      {{ swatch.color.toUpperCase() }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Swatch",
  props: ["active", "swatch", "effect", "color"]
};
</script>
