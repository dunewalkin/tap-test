<template>
  <section class="home container">
    <div class="home__container">
      <h1 class="home__title">ТЕСТОВОЕ ЗАДАНИЕ</h1>
      <NuxtLink class="home__catalog-link" to="/catalog">В каталог</NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home {
  min-height: 100%;
  display: flex;
  align-items: center;

  @include media(md) {
    min-height: calc(100vh - 60px);
  }
}

.home__container {
  width: 100%;
  margin: 0 auto;
}

.home__title {
  color: $black;
  font-size: 64px;
  font-weight: 500;
  line-height: 110%; /* 70.4px */
  text-transform: uppercase;
  margin: 0;

  @include media(md) {
    font-size: 26px;
  }
}

.home__catalog-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  padding: 10px 24px;
  background: $red;
  color: $white;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 40px;
}
</style>
