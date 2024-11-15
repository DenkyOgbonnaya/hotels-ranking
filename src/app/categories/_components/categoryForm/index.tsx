import Button from "@/components/ui/button";
import TextField from "@/components/ui/textField";
import useInputChange from "@/hooks/useInputChange";
import { useStoreDispatch } from "@/hooks/useStoreDispatch";
import { useStoreSelector } from "@/hooks/useStoreSelector";
import { addCategory, updateCategory } from "@/store/slice/categories.slice";
import { ICategory, ICategoryCreate } from "@/types/category.type";
import { sanitizeInputs } from "@/utils/validation";
import { FormEvent, useState } from "react";

interface Props {
  category?: ICategory | null;
  onSuccess: () => void;
}
export function CategoryForm({ category, onSuccess }: Props) {
  const [message, setMessage] = useState("");
  const { categories } = useStoreSelector(({ categories }) => categories);

  const { state, onChange } = useInputChange<ICategoryCreate>({
    name: category?.name ?? "",
  });

  const dispatch = useStoreDispatch();

  const checkExistingCategory = (
    categoryName: string,
    categories: ICategory[]
  ) => {
    if (categories.length < 1) return false;

    const category = categories.find((cat) => cat.name === categoryName);

    return category ? true : false;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMessage("");

    const categoryExist = checkExistingCategory(state.name, categories);

    if (categoryExist) {
      setMessage("Category alreay exist");
      return;
    }

    const { haseErrors, errors } = sanitizeInputs(state);

    if (haseErrors) {
      setMessage(errors.name);
      return;
    }

    // if category object is defined, edit category
    if (category) {
      dispatch(updateCategory({ _id: category._id, newRecord: state }));
    } else {
      // add new category
      dispatch(addCategory(state));
    }

    onSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card flex flex-col gap-4 py-10 px-4 min-w-[90%] lg:min-w-[600px] rounded-md"
    >
      <h4 className="font-heading text-2xl text-heading leading-9 mb-8">
        {category ? "Edit" : "Add"} Category
      </h4>

      <TextField
        id="name"
        name="name"
        label="Name"
        value={state.name}
        onChange={onChange}
        required
        placeholder="Enter name"
        className="w-full flex-1 "
        errorMessage={message}
      />

      <Button className="px-10 self-end mt-8">Submit</Button>
    </form>
  );
}
