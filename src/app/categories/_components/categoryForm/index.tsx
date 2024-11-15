import Button from "@/components/ui/button";
import TextField from "@/components/ui/textField";

export function CategoryForm() {
  return (
    <form className="bg-card flex flex-col gap-4 py-10 px-4 min-w-[90%] lg:min-w-[600px] rounded-md">
      <h4 className="font-heading text-2xl text-heading leading-9 mb-8">
        Add Category
      </h4>

      <TextField
        id="name"
        name="name"
        label="Name"
        placeholder="Enter name"
        className="w-full flex-1 "
      />

      <Button className="px-10 self-end mt-8">Submit</Button>
    </form>
  );
}
