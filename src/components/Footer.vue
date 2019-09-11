<template>
  <footer class="bg-dark pt-95 pb-135 color-white">
    <div class="container px-xl-0">
      <div class="row">
        <div class="col-xl-1"></div>
        <div class="mb-50 mb-lg-0 col-lg-3">
          <a href="#" class="mb-35 logo link color-white">{{ $static.metaData.siteName }} <span class="f-14 color-gray">co. ltd</span></a>
          <div class="text-adaptive">
            Be sure to take a look at <br>
            our <a href="#" class="link color-white">Terms of Use</a> and <br>
            <a href="#" class="link color-white">Privacy Policy</a>
          </div>
        </div>
        <div class="col-xl-7 col-lg-8">
          <div class="row no-gutters">
            <div class="col-md-5 col-6 mb-50 mb-md-0">
              <div class="mb-35 f-18 semibold title">Product</div>
              <div class="mb-10"><a href="#" class="link color-white">Primary Batteries</a></div>
              <div class="mb-10"><a href="#" class="link color-white">Rechargeable Batteries</a></div>
              <div class="mb-10"><a href="#" class="link color-white">Energy Storage System</a></div>
            </div>
            <div class="col-md-5 col-6 mb-50 mb-md-0">
              <div class="mb-35 f-18 semibold title">&nbsp;</div>
              <div class="mb-10"><a href="#" class="link color-white">LED Light</a></div>
              <div class="mb-10"><a href="#" class="link color-white">Power Bank</a></div>
              <div class="mb-10"><a href="#" class="link color-white">Batteries Pack Connector</a></div>
            </div>
            <div class="col-md-2 col-6">
              <div class="mb-35 f-18 semibold title">About</div>
              <div class="mb-10"><a href="#" class="link color-white">About Us</a></div>
              <div class="mb-10"><a href="#" class="link color-white">Contact</a></div>
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