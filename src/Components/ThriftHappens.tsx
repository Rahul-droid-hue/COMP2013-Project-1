import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";

interface ThriftHappensProps {
  data: ClothingProduct[];
}

function ThriftHappens({ data }: ThriftHappensProps) {
  return (
    <div>
      <h2>Thrift Happens</h2>
      <ItemsContainer items={data} />
    </div>
  );
}

export default ThriftHappens;
