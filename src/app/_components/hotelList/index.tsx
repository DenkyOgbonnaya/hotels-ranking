"use client";

import Hotel from "@/components/hotel";
import ListComponent from "@/components/listComponent";
import { Modal } from "@mui/material";
import { useCallback, useState } from "react";
import { HotelForm } from "../hotelForm";
import { IHotel } from "@/types/hotel.type";
import { useStoreSelector } from "@/hooks/useStoreSelector";
import Jumbotron from "@/components/jumbotron";
import { useStoreDispatch } from "@/hooks/useStoreDispatch";
import { removeHotel, setHotel } from "@/store/slice/hotel.slice";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@/components/ui/button";

export default function HotelList() {
  const [showHotelForm, setShowHotelForm] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { hotels, hotel } = useStoreSelector(({ hotels }) => hotels);
  const dispatch = useStoreDispatch();

  const toggleHotelForm = () => {
    setShowHotelForm(!showHotelForm);
  };

  const toggleConfirmDelete = () => {
    setShowConfirmDelete(!showConfirmDelete);
  };

  const handleEdit = useCallback(
    (hotel: IHotel) => {
      // set the hotel to edit to the global store
      dispatch(setHotel(hotel));
      toggleHotelForm();
    },
    [dispatch, toggleHotelForm]
  );

  const handleDelete = useCallback(
    (hotel: IHotel) => {
      dispatch(setHotel(hotel));
      toggleConfirmDelete();
    },
    [dispatch, toggleConfirmDelete]
  );

  const handleEditSuccess = () => {
    toggleHotelForm();

    // clear the hotel reference from the store
    dispatch(setHotel(null));
    setSuccessMessage("Hotel edited successfully");
  };

  // confirm deletion of hotel
  const confirmDelete = () => {
    if (!hotel) return;
    // delete hotel
    dispatch(removeHotel(hotel._id!));
    setSuccessMessage("Hotel deleted successfully");
    toggleConfirmDelete();
  };

  // cancel delete action
  const cancelDelete = () => {
    toggleConfirmDelete();

    // clear the hotel reference from the store
    dispatch(setHotel(null));
  };

  return (
    <div className="flex flex-col gap-4">
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
        <HotelForm hotel={hotel} onSuccess={handleEditSuccess} />
      </Modal>

      <Dialog
        open={showConfirmDelete}
        onClose={cancelDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Hotel</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this hotel?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button intent="outline" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button onClick={confirmDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
