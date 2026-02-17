import type { Product, ProductsApiResponse } from '~/types/product'

interface RawProduct {
  id?: number | string
  title?: string
  name?: string
  price?: number | string
  image?: string
  imageUrl?: string
  picture?: string
}

interface RawApiResponse {
  page?: number
  totalPages?: number
  total_pages?: number
  total?: number
  pages?: number
  limit?: number
  perPage?: number
  per_page?: number
  items?: RawProduct[]
  products?: RawProduct[]
  data?: RawProduct[]
}

const normalizeProduct = (raw: RawProduct, index: number): Product => {
  const fallbackId = `item-${index}`
  const numericPrice = Number(raw.price ?? 0)

  return {
    id: raw.id ?? fallbackId,
    title: raw.title ?? raw.name ?? 'Без названия',
    price: Number.isFinite(numericPrice) ? numericPrice : 0,
    image: raw.image ?? raw.imageUrl ?? raw.picture ?? '',
  }
}

export const useProductsApi = async (page: number, limit = 12): Promise<ProductsApiResponse> => {
  const config = useRuntimeConfig()

  const response = await $fetch<RawApiResponse>(`${config.public.productsApiBase}/products`, {
    query: {
      page,
      limit,
    },
  })

  const rawItems = response.items ?? response.products ?? response.data ?? []
  const items = rawItems.map(normalizeProduct)
  const responseLimit = response.limit ?? response.perPage ?? response.per_page ?? limit
  const calculatedTotalPages = response.total ? Math.ceil(response.total / responseLimit) : undefined

  return {
    items,
    page: response.page ?? page,
    totalPages: response.totalPages ?? response.total_pages ?? response.pages ?? calculatedTotalPages ?? page,
  }
}
