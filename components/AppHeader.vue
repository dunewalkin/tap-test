<template>
  <header class="header container">
    <div class="header__container">
      <a class="header__logo" href="#" aria-label="Логотип" />

      <nav class="header__nav" aria-label="Главная навигация">
        <a class="header__nav-link" href="#">Мужчинам</a>
        <a class="header__nav-link" href="#">Женщинам</a>
        <a class="header__nav-link" href="#">Каталог</a>
        <a class="header__nav-link" href="#">Доставка</a>
        <a class="header__nav-link" href="#">Блог</a>
        <a class="header__nav-link" href="#">О нас</a>
      </nav>

      <button class="header__burger" type="button" aria-label="Меню">
        <span class="header__burger-line" />
        <span class="header__burger-line" />
        <span class="header__burger-line" />
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: $white;
}

.header__container {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;

  @include media(md) {
    padding: 10px 0;
  }
}

.header__logo {
  width: 42px;
  height: 42px;
  background: $red;

  @include media(md) {
    width: 28px;
    height: 28px;
  }
}

.header__nav {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  width: fit-content;
  gap: 40px;
  background: $grey;
  padding: 10px 24px;
  white-space: nowrap;
}

.header__nav-link {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: $black;
}

.header__burger {
  display: none;
  width: 40px;
  height: 40px;
  border: none;
  background: $grey;
  flex-direction: column;
  gap: 3.5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  justify-self: flex-end;
}

.header__burger-line {
  display: block;
  height: 2px;
  width: 17px;
  background: $black;
}

@include media(850px) {
  .header__nav {
    display: none;
  }

  .header__burger {
    display: inline-flex;
  }
}
</style>
