export interface Product {
  id: number | string
  title: string
  price: number
  image: string
}

export interface ProductsApiResponse {
  items: Product[]
  page: number
  totalPages: number
}
