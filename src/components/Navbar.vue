<template>
  <nav class="navigation_18 bg-dark pt-30 pb-30 lh-40 text-center">
    <div class="container px-xl-0">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-auto text-lg-left">
          <g-link class="logo link color-white" to="/">{{ $static.metaData.siteName }} <span class="f-14 color-gray">co. ltd</span></g-link>
        </div>
        <div class="col-lg-9 text-lg-right">
          <g-link class="link color-white mr-15 semibold" to="/about">About</g-link>
          <g-link class="link color-white mx-15 semibold" to="/collections">Collections</g-link>
          <g-link class="link color-white mx-15 semibold" to="/contacts">Contacts</g-link>
          <form method="GET" action="/" class="ml-15 mt-10 mt-md-0 d-inline-block">
            <input type="text" name="search" placeholder="Search" class="input sm w-200 mw-full border-transparent-white focus-white color-white placeholder-transparent-white text-center text-md-left" />
            <input type="submit" class="d-none" />
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>
<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<script>
  export default {

  }
</script>