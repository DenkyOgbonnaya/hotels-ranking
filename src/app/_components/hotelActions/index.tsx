"use client";

import Button from "@/components/ui/button";
import SearchField from "@/components/ui/searchField";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { HotelForm } from "../hotelForm";

export default function HotelActions() {
  const [showHotelForm, setShowHotelForm] = useState(false);

  const toggleHotelForm = () => {
    setShowHotelForm(!showHotelForm);
  };
  return (
    <>
      <div className="flex items-center gap-2">
        <SearchField placeholder="Search" className="flex-1" />
        <Button onClick={toggleHotelForm} className=" w-[150px] px-2 p-2 ">
          Add New
        </Button>
      </div>

      <Modal
        open={showHotelForm}
        onClose={toggleHotelForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <HotelForm />
      </Modal>
    </>
  );
}
