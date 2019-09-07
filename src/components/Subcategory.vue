<template>
<div class="mt-15 mb-15 col-xl-12 col-lg-12 col-md-12 col-sm-12">
  <div class="mx-auto pt-20 pb-20 px-20 radius20 d-xl-flex flex-row-reverse justify-content-between align-items-center category">
    <g-link class="link color-white mr-15 semibold" to="/detail">
      <img srcset="i/ecommerce_21_img_1@2x.jpg 2x" src="images/ecommerce_21_img_1.jpg" alt="" class="radius10 img-fluid">
    </g-link>
    <div class="mt-30 mt-xl-0 px-20 pb-20 inner">
      <div class="color-heading f-14 text-uppercase semibold sp-20">Alkaline Battery</div>
      <h2 class="small">
        <a href="#" class="link color-main">{{ subcategory.name }}</a>
      </h2>
    </div>
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