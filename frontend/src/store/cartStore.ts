import { create } from "zustand";
import { persist } from "zustand/middleware";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string | null;
};

type CartItem = Product & {
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addToCart: (product: Product) => void;

  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;

  removeFromCart: (id: string) => void;

  clearCart: () => void;

  getTotalItems: () => number;
  getSubTotal: () => number;
};

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product) => {
        const items = get().items;

        const existingItem = items.find(
          (item) => item.id === product.id
        );

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
          });
        } else {
          set({
            items: [
              ...items,
              {
                ...product,
                quantity: 1,
              },
            ],
          });
        }
      },

      increaseQuantity: (id) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        }));
      },

      decreaseQuantity: (id) => {
        const item = get().items.find(
          (item) => item.id === id
        );

        if (!item) return;

        if (item.quantity <= 1) {
          set((state) => ({
            items: state.items.filter(
              (item) => item.id !== id
            ),
          }));

          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          ),
        }));
      },

      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter(
            (item) => item.id !== id
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce(
          (total, item) => total + item.quantity,
          0
        );
      },

      getSubTotal: () => {
        return get().items.reduce(
          (total, item) =>
            total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
