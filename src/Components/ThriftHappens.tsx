import { useState } from "react";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";

interface ThriftHappensProps {
  data: ClothingProduct[];
}

function ThriftHappens({ data }: ThriftHappensProps) {
  const [items, setItems] = useState<ClothingProduct[]>(data);
  const [cartItems, setCartItems] = useState<ClothingProduct[]>([]);

  const handleIncrease = (id: number) => {
    setItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id && item.itemQuantity < item.quantity
          ? { ...item, itemQuantity: item.itemQuantity + 1 }
          : item,
      ),
    );
  };

  const handleDecrease = (id: number) => {
    setItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id && item.itemQuantity > 0
          ? { ...item, itemQuantity: item.itemQuantity - 1 }
          : item,
      ),
    );
  };

  const handleAddToCheckout = (id: number) => {
    const selectedItem = items.find((item) => item.id === id);

    if (
      !selectedItem ||
      selectedItem.itemQuantity <= 0 ||
      selectedItem.itemQuantity > selectedItem.quantity
    ) {
      return;
    }

    setCartItems((previousCart) => {
      const existingItem = previousCart.find((item) => item.id === id);

      if (existingItem) {
        return previousCart.map((item) =>
          item.id === id
            ? {
                ...item,
                itemQuantity: item.itemQuantity + selectedItem.itemQuantity,
              }
            : item,
        );
      }

      return [...previousCart, { ...selectedItem }];
    });

    setItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - selectedItem.itemQuantity,
              itemQuantity: 0,
            }
          : item,
      ),
    );
  };

  return (
    <div>
      <h2>Thrift Happens</h2>

      <ItemsContainer
        items={items}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onAddToCheckout={handleAddToCheckout}
      />
    </div>
  );
}

export default ThriftHappens;
