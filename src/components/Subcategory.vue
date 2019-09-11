<template>

<div class="mx-auto pt-20 pb-20 px-20 radius20 d-xl-flex flex-row-reverse justify-content-between align-items-center category">
  <g-link class="flex-shrink-0 img_link" to="/detail">
    <img srcset="i/ecommerce_21_img_1@2x.jpg 2x" src="images/ecommerce_21_img_1.jpg" alt="" class="radius10 img-fluid" width="80">
  </g-link>
  <div class="mt-30 mt-xl-0 px-20 pb-20 inner">
    <div class="color-heading f-12 text-uppercase semibold sp-10">Alkaline Battery</div>
    <h2 class="f-18">
      <g-link class="link color-main" to="/detail">{{ subcategory.name }}</g-link>
    </h2>
  </div>
</div>
</template>

<script>
export default {
  props: {
    subcategory: {
      type: Object
    }
  }
}
</script>