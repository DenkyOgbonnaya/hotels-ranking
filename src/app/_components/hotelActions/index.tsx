"use client";

import Button from "@/components/ui/button";
import SearchField from "@/components/ui/searchField";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { HotelForm } from "../hotelForm";
import { useStoreSelector } from "@/hooks/useStoreSelector";
import { useStoreDispatch } from "@/hooks/useStoreDispatch";
import { searchByName } from "@/store/slice/hotel.slice";

export default function HotelActions() {
  const [showHotelForm, setShowHotelForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const { hotel } = useStoreSelector(({ hotels }) => hotels);

  const dispatch = useStoreDispatch();

  const toggleHotelForm = () => {
    setShowHotelForm(!showHotelForm);
  };

  const handleAddSuccess = () => {
    toggleHotelForm();

    setSuccessMessage("New hotel added successfully");
  };

  const handleSearch = (searchString: string) => {
    const DEBOUNCE_DELAY = 3000; // 3sec in ms
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      dispatch(searchByName({ search: searchString }));
    }, DEBOUNCE_DELAY);
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <SearchField
          placeholder="Search"
          onChange={({ target }) => handleSearch(target.value)}
          className="flex-1"
        />
        <Button
          onClick={toggleHotelForm}
          className=" w-[200px] px-2 p-2 "
          data-testid="add-hotel"
        >
          Add New
        </Button>
      </div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        {successMessage && (
          <Alert
            severity="success"
            onClose={() => {
              setSuccessMessage("");
            }}
          >
            {successMessage}
          </Alert>
        )}
      </Stack>

      <Modal
        open={showHotelForm}
        onClose={toggleHotelForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <HotelForm hotel={hotel} onSuccess={handleAddSuccess} />
      </Modal>
    </>
  );
}
