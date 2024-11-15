"use client";

import Hotel from "@/components/hotel";
import ListComponent from "@/components/listComponent";
import { Modal } from "@mui/material";
import { useState } from "react";
import { HotelForm } from "../hotelForm";
import { IHotel } from "@/types/hotel.type";
import { useStoreSelector } from "@/hooks/useStoreSelector";
import Jumbotron from "@/components/jumbotron";

export default function HotelList() {
  const [showHotelForm, setShowHotelForm] = useState(false);
  const { hotels } = useStoreSelector(({ hotels }) => hotels);

  const toggleHotelForm = () => {
    setShowHotelForm(!showHotelForm);
  };

  const handleEdit = () => {
    toggleHotelForm();
  };

  const handleDelete = () => {};
  return (
    <div className="flex flex-col gap-4">
      <ListComponent<IHotel>
        data={hotels}
        renderItem={(hotel) => (
          <Hotel
            key={hotel._id}
            hotel={hotel}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
        ListEmptyComponent={
          <Jumbotron message="No aavailable hotels" data-testid="hotel-empty" />
        }
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
