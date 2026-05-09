import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Product = {
  id: string | number
  name: string
}

type CartItem = Product & {
  quantity: number
}

type CartStore = {
  items: CartItem[]

  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void

  clearCart: () => void
  getTotalItems: () => number
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product) => {
        const items = get().items

        const existingItem = items.find(
          (item) => item.id === product.id
        )

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          })
        } else {
          set({
            items: [
              ...items,
              {
                ...product,
                quantity: 1,
              },
            ],
          })
        }
      },

      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          set((state) => ({
            items: state.items.filter((item) => item.id !== id),
          }))
          return
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity,
                }
              : item
          ),
        }))
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce(
          (total, item) => total + item.quantity,
          0
        )
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)

export default useCartStore