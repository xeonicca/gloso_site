<template>
  <div class="mt-15 mb-30 mb-lg-0 col-lg-3 f-15 medium text-center text-lg-left categories">
    <div v-for="category in categoryList" class="mt-10 d-inline-block d-lg-block category"><a href="#" class="link color-heading lh-30 bold text-uppercase semibold" :class="{active: category.active}">{{ category.name }}</a></div>
    <!-- <div class="mt-10 d-inline-block d-lg-block category"><a href="#" class="link color-heading lh-30">Blazers &amp; Suits</a></div>
    <div class="mt-10 d-inline-block d-lg-block category"><a href="#" class="link color-heading lh-30">Jeans</a></div>
    <div class="mt-10 d-inline-block d-lg-block category"><a href="#" class="link color-heading lh-30">Trousers</a></div>
    <div class="mt-10 d-inline-block d-lg-block category"><a href="#" class="link color-heading lh-30">Shorts</a></div>
    <div class="mt-10 d-inline-block d-lg-block category"><a href="#" class="link color-heading lh-30">Underwear</a></div>
    <div class="mt-10 d-inline-block d-lg-block category"><a href="#" class="link color-heading lh-30">Gift Sets</a></div> -->
  </div>
</template>
<script>
export default {
  props: ['categoryList']
}
</script>
<style scoped lang="scss">
.link.active {
  color: $color_main;
}
</style>