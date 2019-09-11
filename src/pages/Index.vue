<template>
  <div>
    <a href="#" class="open_menu bg-light radius_full" ref="menu" @click.prevent="toggleMobileNavigation(true)"><i class="fas fa-bars lh-40"></i></a>
    <div class="navigation_mobile bg-dark type1" ref="navMobile">
      <a href="#" class="close_menu color-white" @click.prevent="toggleMobileNavigation(false)"><i class="fas fa-times"></i></a>
      <div class="px-40 pt-60 pb-60 inner">
        <div class="logo color-white mb-30">{{ $static.metaData.siteName }} <span class="f-14 color-gray">co. ltd</span></div>
        <div><g-link class="f-heading f-16 link color-white mb-20" to="/">Home</g-link></div>
        <div><a href="#" class="f-heading f-16 link color-white mb-20">Primary Batteries</a></div>
        <div><a href="#" class="f-heading f-16 link color-white mb-20">Rechargeable Batteries</a></div>
        <div><a href="#" class="f-heading f-16 link color-white mb-20">Energy Storage System</a></div>
        <div><a href="#" class="f-heading f-16 link color-white mb-20">LED Light</a></div>
        <div><a href="#" class="f-heading f-16 link color-white mb-20">Power Bank</a></div>
        <div><a href="#" class="f-heading f-16 link color-white mb-20">Batteries Pack Connector</a></div>
        <div><g-link class="link color-white op-3 mb-15" to="/about">About</g-link></div>
        <div><g-link class="link color-white op-3 mb-15" to="/collections">Collections</g-link></div>
        <div><g-link class="link color-white op-3 mb-15" to="/contacts">Contacts</g-link></div>
        <!-- <div class="socials mt-40">
          <a href="#" target="_blank" class="link color-white f-18 mr-20"><i class="fab fa-twitter"></i></a>
          <a href="#" target="_blank" class="link color-white f-18 mr-20"><i class="fab fa-facebook"></i></a>
          <a href="#" target="_blank" class="link color-white f-18 mr-20"><i class="fab fa-google-plus-g"></i></a>
        </div> -->
        <!-- <div class="mt-50 f-14 light color-white op-3 copy">&copy; 2019 Designmodo. All rights reserved.</div> -->
      </div>
    </div>
    <!-- Header 11 -->
    <header class="bg-light pt-160 pb-105 header_11">
      <!-- Header Menu 11 -->
      <nav class="header_menu_11 pt-30 pb-30 mt-35" ref="headerNav">
        <div class="container mw-970 px-xl-0">
          <div class="row align-items-baseline justify-content-between">
            <div class="col-lg-3">
              <div class="logo">{{ $static.metaData.siteName }} <span class="f-14 color-heading">co. ltd</span></div>
            </div>
            <div class="col-lg-9 d-flex justify-content-end align-items-center f-18 medium">
              <g-link class="link color-main mr-30 semibold" to="/about">About</g-link>
              <g-link class="link color-main mr-30 semibold" to="/collections">Collections</g-link>
              <g-link class="link color-main mr-30 semibold" to="/contacts">Contacts</g-link>
            </div>
          </div>
        </div>
      </nav>
      <div class="container px-xl-0">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="row flex-column-reverse flex-md-row justify-content-between align-items-center text-center text-md-left">
              <div class="col-lg-5 col-md-6">
                <div class="mt-5 mt-md-0 mb-3 logo d-block d-xl-none logo_mobile">{{ $static.metaData.siteName }} <span class="f-14 color-heading">co. ltd</span></div>
                <h1>We promise spectacular batteries</h1>
                <div class="mt-25 f-22 color-heading op-7 text-adaptive">
                  We haven’t forgotten about responsive layout. With Startup Framework,
                  you can create a website with full mobile support.
                </div>
                <div class="mt-60 d-flex justify-content-center justify-content-md-start align-items-baseline buttons">
                  <a href="#" class="btn action-2">Our Items</a>
                  <!-- <a href="#" class="ml-10 link color-main f-18 medium px-35">Learn More</a> -->
                </div>
              </div>
              <div class="col-lg-6 col-md-5 col-6 d-flex justify-content-end align-items-center">
                <img src="/images/hero.png" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Content 1 -->
    <section class="content_1 bg-light pt-80 pb-80">
      <div class="container px-xl-0">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-10 text-center">
            <div class="f-14 color-heading semibold text-uppercase sp-20">Design and code</div>
            <h2 class="mt-25">Driving Batteries Quality</h2>
          </div>
        </div>
      </div>
    </section>
    <!-- Feature 32 -->
    <section class="feature_32 bg-light pt-105">
      <div class="container px-xl-0">
        <div class="row justify-content-center text-center">
          <div class="col-xl-10">
            <h2 class="small">Our Strength</h2>
            <div class="mt-15 mb-70 f-22 color-heading text-adaptive decription">
              Huge trendy collection of web screens and components. Fully customized. </div>
          </div>
        </div>
        <div class="row justify-content-center text-center text-lg-left">
          <div class="mt-55 col-xl-3 col-lg-4 col-md-6 col-sm-8 order-1 left_side">
            <div class="mb-65 ml-50 block">
              <div class="mb-10 f-14 semibold text-uppercase sp-20 title">Safety</div>
              <div class="color-heading text-adaptive">
                This product will speed <br />
                up your work in creating
                landing pages. </div>
            </div>
            <div class="mb-65 ml-50 block">
              <div class="mb-10 f-14 semibold text-uppercase sp-20 title">Durable</div>
              <div class="color-heading text-adaptive">
                We used only <br />
                time-tested technologies
                for the best results. </div>
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-end col-xl-5 col-lg-4 col-sm-5 col-8 order-4 order-lg-2">
            <img srcset="/images/batt.jpg" src="/images/batt.jpg" class="mw-full img" alt="" />
          </div>
          <div class="mt-55 col-xl-3 col-lg-4 col-md-6 col-sm-8 order-3 right_side">
            <div class="ml-20 mb-65 block">
              <div class="mb-10 f-14 semibold text-uppercase sp-20 title">Eco-friendly</div>
              <div class="color-heading text-adaptive">
                At length one of them <br />
                called out in a clear, <br />
                polite, smooth dialect. </div>
            </div>
            <div class="ml-20 mb-65 block">
              <div class="mb-10 f-14 semibold text-uppercase sp-20 title">Everlasting</div>
              <div class="color-heading text-adaptive">
                At first, for some time, I <br />
                was not able to answer <br />
                him one word. </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Call to Action 7 -->
    <section class="call_to_action_7 bg-light pt-100 pb-100 text-center">
      <div class="container px-xl-0">
        <div class="row justify-content-center">
          <div class="col-xl-9 col-lg-10">
            <!-- <img srcset="/images/call_to_action_7_img@2x.jpg 2x" src="/images/call_to_action_7_img.jpg" alt="" class="img-fluid radius30" /> -->
            <h2 class="mt-30 mb-20 small">{{ $static.metaData.siteName }}</h2>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-8 col-sm-10">
            <div class="color-heading text-adaptive">
              A high-quality solution for those who want a
              beautiful startup website quickly. </div>
            <a href="#" class="mt-45 btn lg action-2">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer 3 -->
    <Footer />
  </div>
</template>
<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<script>
import Footer from '~/components/Footer'
export default {
  metaInfo: {
    title: 'GLOSO',
  },
  methods: {
    toggleMobileNavigation(toggle) {
      this.$refs.navMobile.classList.toggle('opened', toggle)
    },

    showHideMenu() {
      if(document.body.clientWidth < 1199.98) {
        this.$refs.menu.classList.add('d-block')
        this.$refs.headerNav.classList.add('d-none')
        this.$refs.navMobile.classList.remove('opened')
      } else {
        this.$refs.menu.classList.remove('d-block')
        this.$refs.headerNav.classList.remove('d-none')
        this.$refs.navMobile.classList.remove('opened')
      }
    }
  },
  components: {
    Footer,
  },
  mounted() {
    this.showHideMenu()
    // $(".close_menu, header, section, footer, .navigation_mobile .inner a").click(function(event){
    //   $(".navigation_mobile").removeClass("opened");
    // });

    this.resizeHandler = this.showHideMenu.bind(this)
    window.addEventListener('resize', this.resizeHandler)
  },

  destroyed() {
    window.removeEventListener('resize', this.resizeHandler)
  }
}
</script>
