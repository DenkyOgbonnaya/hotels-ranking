import Button from "@/components/ui/button";
import TextArea from "@/components/ui/textAreat";
import TextField from "@/components/ui/textField";
import useInputChange from "@/hooks/useInputChange";
import { useGetCountriesQuery } from "@/services/country.service";
import { IHotel, IHotelCreateInput } from "@/types/hotel.type";

import VirtualizedAutocomplete from "@/components/virtaulizedAutoComplete";
import { FormEvent } from "react";
import { useStoreDispatch } from "@/hooks/useStoreDispatch";
import { addHotel, updateHotel } from "@/store/slice/hotel.slice";
import { useStoreSelector } from "@/hooks/useStoreSelector";
import SelectField from "@/components/ui/selectField";

interface Props {
  onSuccess: () => void;
  hotel?: IHotel | null;
}
export function HotelForm({ onSuccess, hotel }: Props) {
  const { categories } = useStoreSelector(({ categories }) => categories);
  const { data } = useGetCountriesQuery(null);

  const dispatch = useStoreDispatch();

  const { state, onChange, onChangeByNameValue } =
    useInputChange<IHotelCreateInput>({
      name: hotel?.name ?? "",
      category: hotel?.category ?? "",
      country: hotel?.country ?? "",
      address: hotel?.address ?? "",
    });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // if hotel object is defined, edit hotel
    if (hotel) {
      dispatch(updateHotel({ _id: hotel._id, newRecord: state }));
    } else {
      // add new hotel
      dispatch(addHotel(state));
    }

    onSuccess();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card flex flex-col gap-4 py-10 px-4 min-w-[90%] lg:min-w-[600px] rounded-md"
    >
      <h4 className="font-heading text-2xl text-heading leading-9 mb-8">
        {hotel ? "Edit" : "Add"} Hotel
      </h4>
      <div className="flex flex-col md:flex-row lg:items-center gap-4">
        <TextField
          id="name"
          name="name"
          label="Name"
          value={state.name}
          onChange={onChange}
          placeholder="Enter name"
          className="w-full lg:flex-1 "
          required
        />

        <VirtualizedAutocomplete
          name="country"
          accessor="country"
          name_accessor="country"
          options={data}
          value={state.country}
          allowNull
          required
          onChange={(_, value) => onChangeByNameValue("country", value.country)}
        />
      </div>

      <SelectField
        id="category"
        name="category"
        value={state.category}
        onChange={onChange}
        label="Category"
        className="w-full flex-1 "
        required
      >
        <option value="">Select-</option>
        {categories?.map((cat) => (
          <option key={cat._id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </SelectField>

      <TextArea
        id="address"
        name="address"
        value={state.address}
        onChange={onChange}
        label="Address"
        placeholder="Enter address"
        className="w-full flex-1 "
        required
      />

      <Button className="px-10 self-end mt-8">Submit</Button>
    </form>
  );
}
