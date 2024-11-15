import React from "react";

// renders generic list of items
//using the render props patterm
interface ListComponentProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  ListEmptyComponent?: React.ReactNode;
}
export default function ListComponent<T>({
  data,
  renderItem,
  ListEmptyComponent,
}: ListComponentProps<T>) {
  if (!data.length) return ListEmptyComponent ?? null;
  return <>{data.map((item) => renderItem(item))}</>;
}
