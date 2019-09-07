<template>
  <Layout>
    <section class="ecommerce_16 bg-light pt-100 pb-70">
      <div class="container px-xl-0">
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-xl-8 col-lg-9 d-flex flex-wrap justify-content-between align-items-baseline">
            <div class="color-heading f-14 semibold text-uppercase sp-20 total">2 Items</div>
            <div class="sort_by">
              <span class="color-heading f-14 semibold text-uppercase sp-20">Sort by </span>
              <div class="d-inline-block dropdown">
                <a href="#" class="link color-main f-14 semibold text-uppercase sp-20 dropdown-toggle" id="ecommerce_16_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">New arrival</a>
                <div class="ml-0 bg-light px-0 pt-15 pb-15 radius16 dropdown-menu dropdown-menu-right" aria-labelledby="ecommerce_16_dropdown">
                  <div class="py-1 px-15 link_holder"><a href="#" class="link color-heading">New arrival</a></div>
                  <div class="py-1 px-15 link_holder"><a href="#" class="link color-heading">Size</a></div>
                  <div class="py-1 px-15 link_holder"><a href="#" class="link color-heading">Price Up</a></div>
                  <div class="py-1 px-15 link_holder"><a href="#" class="link color-heading">Price Down</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <Category />
          <div class="mt-20 col-xl-8 col-lg-9 ecommerce_21 category">
            <div class="row justify-content-center products">
              <template v-for="subcategory in subcategoryList">
                <Subcategory :subcategory="subcategory" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
import Category from '~/components/Category'
import Subcategory from '~/components/Subcategory'
import AlkalineBatteries from '~/templates/AlkalineBatteries'

export default {
  components: {
    Category,
    Subcategory,
    AlkalineBatteries
  },
  data() {
    return {
      fakeData: [
        {name: 'Alkaline Batteries'},
        {name: 'Alkaline Manganese Button Cell'}
      ],

      subcategoryList: [
        {name: 'Alkaline Batteries'},
        {name: 'Alkaline Manganese Button Cell'}
      ]
    }
  }
}
</script>