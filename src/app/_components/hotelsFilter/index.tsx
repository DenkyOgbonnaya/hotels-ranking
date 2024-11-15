"use client";

import SelectField from "@/components/ui/selectField";
import Checkbox from "@/components/ui/checkbox";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CATEGORIES_ROUTE } from "@/constants/route.constant";
import { useStoreSelector } from "@/hooks/useStoreSelector";
import { useStoreDispatch } from "@/hooks/useStoreDispatch";
import { useState } from "react";
import { filterByCategories, sortByName } from "@/store/slice/hotel.slice";
import { SortOrder } from "@/types/hotel.type";

export default function HotelsFilter() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const router = useRouter();
  const { categories } = useStoreSelector(({ categories }) => categories);
  const dispatch = useStoreDispatch();

  const handleManageCategories = () => {
    router.push(CATEGORIES_ROUTE);
  };

  // sort hotels by name
  const handleCategoryFilter = (category: string) => {
    if (selectedCategories.includes(category)) {
      const filtered = selectedCategories.filter((item) => item !== category);

      setSelectedCategories(filtered);
      dispatch(filterByCategories({ categories: filtered }));
    } else {
      dispatch(
        filterByCategories({ categories: selectedCategories.concat(category) })
      );
      setSelectedCategories((prev) => prev.concat(category));
    }
  };

  const handleSorting = (sortOrder: string | SortOrder) => {
    dispatch(sortByName({ order: sortOrder }));
  };
  return (
    <div className="flex flex-col gap-4">
      <SelectField onChange={(e) => handleSorting(e.target.value)}>
        <option value="">Sort order</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </SelectField>

      <div className="bg-card flex flex-col gap-4 px-3 py-8 rounded-md">
        <div className="flex items-center justify-between">
          <label className="text-body font-heading text-lg leading-5">
            Categories
          </label>

          <Button intent="outline" onClick={handleManageCategories}>
            Manage categories
          </Button>
        </div>

        <ul className="  max-h-[600px]  overflow-auto lg:min-h-[400px]">
          {categories.map((category) => {
            return (
              <li key={category._id} className="flex">
                <Checkbox onChange={() => handleCategoryFilter(category.name)}>
                  {category.name}
                </Checkbox>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
