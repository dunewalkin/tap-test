<template>
  <div class="app-layout">
    <AppHeader />
    <main class="app-layout__main">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
}

.app-layout__main {
  flex: 1;
  display: flex;
}
</style>
