import { useFilters } from "@/store/filtersSlice";
import { useParams } from "next/navigation";
import { HTMLAttributes, useEffect } from "react";
import { FilterItem } from "./FilterItem";

interface FilterListProps extends HTMLAttributes<HTMLUListElement> {
  items: Array<{
    key: string;
    value: string;
  }>;
}

export function FilterList({ items, ...props }: FilterListProps) {
  const { currentFilter, changeFilter } = useFilters((state) => {
    return {
      currentFilter: state.currentFilter,
      changeFilter: state.changeFilter
    }
  })
  const { filter } = useParams()

  useEffect(() => {
    changeFilter(String(filter))
  }, [changeFilter, filter])


  return (
    <ul
      className="flex items-center justify-center gap-12 px-12"
      {...props}
    >
      {items?.map(item => (
        <FilterItem
          active={currentFilter === item.key}
          key={item.key}
          onClick={() => changeFilter(item.key)}
        >
          {item.value}
        </FilterItem>
      ))}
    </ul>
  )
}