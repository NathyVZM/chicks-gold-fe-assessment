export interface Item {
    id: number
    name: string
    description: string
    game: string
    image: string
    price?: number
    discount?: number
    onSale: boolean
    onStock: boolean
    quantity?: number
}
