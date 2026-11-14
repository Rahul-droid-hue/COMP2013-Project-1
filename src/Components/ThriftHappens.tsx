import { useState } from "react";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";

interface ThriftHappensProps {
  data: ClothingProduct[];
}

function ThriftHappens({ data }: ThriftHappensProps) {
  const [items, setItems] = useState<ClothingProduct[]>(data);

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

  return (
    <div>
      <h2>Thrift Happens</h2>
      <ItemsContainer
        items={items}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
}

export default ThriftHappens;
