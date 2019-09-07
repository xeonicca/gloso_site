<template>
  <footer class="footer_3 bg-light pt-100 pb-100 text-center text-lg-left">
      <div class="container px-xl-0">
        <div class="row">
          <div class="col-xl-1"></div>
          <div class="mb-50 mb-lg-0 col-lg-4">
            <div class="row">
              <div class="col-12">
                <a href="#" class="logo link color-main">{{ $static.metaData.siteName }} <span class="f-14 color-heading">co. ltd</span></a>
              </div>
              <div class="mt-30 mb-35 col-xl-7 col-lg-9 color-heading text-adaptive description">
                Be sure to take a look at
                our <a href="#" class="link color-heading">Terms of Use</a> and
                <a href="#" class="link color-heading">Privacy Policy</a>
              </div>
              <!-- <div class="col-12 socials">
                <a href="#" class="f-18 link color-main mr-30"><i class="fab fa-twitter"></i></a>
                <a href="#" class="f-18 link color-main mr-30"><i class="fab fa-facebook-square"></i></a>
                <a href="#" class="f-18 link color-main mr-30"><i class="fab fa-google-plus-g"></i></a>
              </div> -->
            </div>
          </div>
          <div class="col-xl-7 col-lg-8">
            <div class="row no-gutters">
              <div class="col-md-5 col-6 mb-50 mb-md-0">
                <div class="mb-35 f-18 semibold title">Product</div>
                <div class="mb-10"><a href="#" class="link color-main">Primary Batteries</a></div>
                <div class="mb-10"><a href="#" class="link color-main">Rechargeable Batteries</a></div>
                <div class="mb-10"><a href="#" class="link color-main">Energy Storage System</a></div>
              </div>
              <div class="col-md-5 col-6 mb-50 mb-md-0">
                <div class="mb-35 f-18 semibold title">&nbsp;</div>
                <div class="mb-10"><a href="#" class="link color-main">LED Light</a></div>
                <div class="mb-10"><a href="#" class="link color-main">Power Bank</a></div>
                <div class="mb-10"><a href="#" class="link color-main">Batteries Pack Connector</a></div>
              </div>
              <div class="col-md-2 col-6">
                <div class="mb-35 f-18 semibold title">About</div>
                <div class="mb-10"><a href="#" class="link color-main">About Us</a></div>
                <div class="mb-10"><a href="#" class="link color-main">Contact</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>