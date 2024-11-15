import React from "react";

// renders generic list of items
//using the render props patterm
interface ListComponentProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}
export default function ListComponent<T>({
  data,
  renderItem,
}: ListComponentProps<T>) {
  return <>{data.map((item) => renderItem(item))}</>;
}
