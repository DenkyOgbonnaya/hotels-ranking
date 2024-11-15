"use client";

import Hotel from "@/components/hotel";
import ListComponent from "@/components/listComponent";
import { Modal } from "@mui/material";
import { useState } from "react";
import { HotelForm } from "../hotelForm";

export default function HotelList() {
  const [showHotelForm, setShowHotelForm] = useState(false);

  const toggleHotelForm = () => {
    setShowHotelForm(!showHotelForm);
  };

  const handleEdit = () => {
    toggleHotelForm();
  };

  const handleDelete = () => {};
  return (
    <div className="flex flex-col gap-4">
      <ListComponent<number>
        data={[1, 2, 3, 4, 5]}
        renderItem={(item) => (
          <Hotel key={item} onEdit={handleEdit} onDelete={handleDelete} />
        )}
      />

      <Modal
        open={showHotelForm}
        onClose={toggleHotelForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <HotelForm />
      </Modal>
    </div>
  );
}
