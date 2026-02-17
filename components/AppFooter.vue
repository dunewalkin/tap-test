<template>
  <footer class="footer container">
    <div class="footer__container">
      <div class="footer__column">
        <h2 class="footer__title">Каталог</h2>
        <a class="footer__link" href="#">Все бренды</a>
        <a class="footer__link" href="#">Nike</a>
        <a class="footer__link" href="#">Adidas</a>
        <a class="footer__link" href="#">Puma</a>
        <a class="footer__link" href="#">New Balance</a>
      </div>

      <div class="footer__column">
        <h2 class="footer__title">Помощь</h2>
        <a class="footer__link" href="#">Доставка</a>
        <a class="footer__link" href="#">Заказ и оплата</a>
        <a class="footer__link" href="#">Обмен и возврат</a>
        <a class="footer__link" href="#">F.A.Q.</a>
      </div>

      <div class="footer__column">
        <h2 class="footer__title">Информация</h2>
        <a class="footer__link" href="#">Преимущества</a>
        <a class="footer__link" href="#">Гарантия безопасности</a>
        <a class="footer__link" href="#">Индивидуальный заказ</a>
        <a class="footer__link" href="#">Акции</a>
      </div>

      <div class="footer__column">
        <h2 class="footer__title">Контакты</h2>
        <a class="footer__link" href="#">О нас</a>
        <a class="footer__link" href="#">Блог</a>
        <a class="footer__link" href="#">Отзывы</a>
        <a class="footer__link" href="#">Контакты</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: $black;
  color: $white;
}

.footer__container {
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.footer__title {
  color: $dark;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
}

.footer__column {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer__link {
  color: $white;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
}

@include media(md) {
  .footer__container {
    grid-template-columns: 1fr;
    gap: 60px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
</style>
