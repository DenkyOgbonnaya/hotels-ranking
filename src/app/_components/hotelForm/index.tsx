import Button from "@/components/ui/button";
import SelectField from "@/components/ui/selectField";
import TextArea from "@/components/ui/textAreat";
import TextField from "@/components/ui/textField";

export function HotelForm() {
  return (
    <form className="bg-card flex flex-col gap-4 py-10 px-4 min-w-[90%] lg:min-w-[600px] rounded-md">
      <h4 className="font-heading text-2xl text-heading leading-9 mb-8">
        Add Hotel
      </h4>
      <div className="flex flex-col md:flex-row lg:items-center gap-4">
        <TextField
          id="name"
          name="name"
          label="Name"
          placeholder="Enter name"
          className="w-full lg:flex-1 "
        />
        <SelectField
          id="category"
          name="category"
          label="Category"
          className="w-full lg:flex-1 "
        >
          <option value="" className=" font-light text-faded text-sm">
            Select-
          </option>
          <option>3 star</option>
        </SelectField>
      </div>

      <TextField
        id="country"
        name="country"
        label="Country"
        placeholder="Enter country"
        className="w-full flex-1 "
      />

      <TextArea
        id="address"
        name="address"
        label="Address"
        placeholder="Enter address"
        className="w-full flex-1 "
      />

      <Button className="px-10 self-end mt-8">Submit</Button>
    </form>
  );
}
