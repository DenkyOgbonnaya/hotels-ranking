"use client";

import SelectField from "@/components/ui/selectField";
import Checkbox from "@/components/ui/checkbox";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CATEGORIES_ROUTE } from "@/constants/route.constant";

export default function HotelsFilter() {
  const router = useRouter();

  const handleManageCategories = () => {
    router.push(CATEGORIES_ROUTE);
  };
  return (
    <div className="flex flex-col gap-4">
      <SelectField>
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

        <ul>
          {[0, 1, 2, 3].map((value) => {
            return (
              <li key={value} className="flex">
                <Checkbox>Line 1</Checkbox>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
