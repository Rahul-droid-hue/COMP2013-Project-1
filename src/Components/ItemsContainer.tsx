import type { ClothingProduct } from "../data/data";
import ItemCard from "./ItemCard";

interface ItemsContainerProps {
  items: ClothingProduct[];
}
function ItemsContainer({ items }: ItemsContainerProps) {
  return (
    <div>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
export default ItemsContainer;
