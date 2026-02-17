<script setup lang="ts">
import type { Product } from "~/types/product"
import { useProductsApi } from "~/composables/useProductsApi"

const ITEMS_PER_PAGE = 12

const products = ref<Product[]>([])
const page = ref(1)
const totalPages = ref(1)
const isLoadingMore = ref(false)
const loadMoreError = ref(false)

const { data, error } = await useAsyncData(
  "products-first-page",
  () => useProductsApi(1, ITEMS_PER_PAGE),
  {
    server: true,
  },
)

if (data.value) {
  products.value = data.value.items
  page.value = data.value.page
  totalPages.value = data.value.totalPages
}

const hasMore = computed(() => page.value < totalPages.value)
const showInitialError = computed(
  () => Boolean(error.value) && products.value.length === 0,
)

const loadMore = async () => {
  if (!hasMore.value || isLoadingMore.value) {
    return
  }

  isLoadingMore.value = true
  loadMoreError.value = false

  try {
    const nextPage = page.value + 1
    const response = await useProductsApi(nextPage, ITEMS_PER_PAGE)

    products.value = [...products.value, ...response.items]
    page.value = response.page
    totalPages.value = response.totalPages
  } catch {
    loadMoreError.value = true
  } finally {
    isLoadingMore.value = false
  }
}
</script>

<template>
  <section class="catalog container">
    <div class="catalog__container">
      <h1 class="catalog__title">КАТАЛОГ</h1>

      <p v-if="showInitialError" class="catalog__initial-error">
        Не удалось загрузить каталог. Обновите страницу.
      </p>

      <div v-else class="catalog__content">
        <div class="catalog__grid">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>

        <div class="catalog__actions">
          <button
            v-if="hasMore && !isLoadingMore"
            class="catalog__more-btn"
            type="button"
            @click="loadMore"
          >
            Показать ещё
          </button>

          <span v-if="isLoadingMore" class="catalog__loading">Загрузка...</span>
        </div>

        <div v-if="loadMoreError" class="catalog__error-block">
          <p class="catalog__error-text">Произошла ошибка, попробуйте позже</p>
          <button class="catalog__retry-btn" type="button" @click="loadMore">
            Повторить
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.catalog__container {
  margin: 0 auto;
  padding: 100px 0;

  @include media(md) {
    padding: 20px 0 40px;
  }
}

.catalog__title {
  margin: 0 0 110px;
  text-align: center;
  color: $black;
  font-family: "Golos Text";
  font-size: 42px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 46.2px */
  text-transform: uppercase;

  @include media(md) {
    margin: 0 0 40px;
    font-size: 24px;
  }
}

.catalog__initial-error {
  margin: 0;
  text-align: center;
}

.catalog__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 40px;

  @include media(lg) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @include media(md) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
}

.catalog__actions {
  margin-top: 110px;
  display: flex;
  justify-content: center;
  color: $black;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  @include media(md) {
    margin-top: 40px;
  }
}

.catalog__more-btn,
.catalog__retry-btn {
  border: 1px solid $black;
  background: transparent;
  padding: 10px 24px;
  cursor: pointer;
}

.catalog__loading {
  padding: 10px 24px;
  font-size: 14px;
}

.catalog__error-block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.catalog__error-text {
  margin: 0;
}
</style>
