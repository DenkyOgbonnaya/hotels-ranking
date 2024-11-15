"use client";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Button from "@/components/ui/button";
import { Modal } from "@mui/material";
import { useCallback, useState } from "react";
import { CategoryForm } from "../categoryForm";
import { useStoreSelector } from "@/hooks/useStoreSelector";
import { useStoreDispatch } from "@/hooks/useStoreDispatch";
import { ICategory } from "@/types/category.type";
import { removeCategory, setCategory } from "@/store/slice/categories.slice";
import Jumbotron from "@/components/jumbotron";
import { useRouter } from "next/navigation";

export default function Categories() {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { categories, category } = useStoreSelector(
    ({ categories }) => categories
  );

  const router = useRouter();

  const dispatch = useStoreDispatch();

  const toggleConfirmDelete = () => {
    setShowConfirmDelete(!showConfirmDelete);
  };

  const toggleForm = () => {
    setShowCategoryForm(!showCategoryForm);
  };

  const handleEdit = useCallback(
    (category: ICategory) => {
      // set the category to edit to the global store
      dispatch(setCategory(category));
      toggleForm();
    },
    [dispatch, toggleForm]
  );

  const handleDelete = useCallback(
    (category: ICategory) => {
      dispatch(setCategory(category));
      toggleConfirmDelete();
    },
    [dispatch, toggleConfirmDelete]
  );

  const handleSuccess = (message: string) => {
    toggleForm();

    // clear the category reference from the store
    dispatch(setCategory(null));
    setSuccessMessage(message);
  };

  // confirm deletion of category
  const confirmDelete = () => {
    if (!category) return;
    // delete category
    dispatch(removeCategory(category._id!));
    setSuccessMessage("Category deleted successfully");
    toggleConfirmDelete();
  };

  // cancel delete action
  const cancelDelete = () => {
    toggleConfirmDelete();

    // clear the cateogry reference from the store
    dispatch(setCategory(null));
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-heading text-3xl text-heading leading-9 font-semibold">
            Hotel Categories
          </h1>
          <Button onClick={handleBack} intent="outline">
            Back
          </Button>
        </div>

        <Button onClick={toggleForm} className=" self-end">
          Add New
        </Button>

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

        <div className=" overflow-auto">
          <table className="w-full bg-card p-4 lg:max-w-[50%] mx-auto rounded-md shadow-md">
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="p-4 text-sm border-b border-border text-left text-body font-body leading-5 font-semibold"
                >
                  Name
                </th>
                <th className="p-4 text-sm border-b  border-border text-right text-body font-body leading-5 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.length < 1 ? (
                <tr>
                  <td
                    colSpan={2}
                    className="p-4  border-border text-center text-sm text-body font-body leading-5 font-normal"
                  >
                    <Jumbotron message="No added categories" />
                  </td>
                </tr>
              ) : (
                <>
                  {categories?.map((category) => (
                    <tr key={category._id}>
                      <td
                        colSpan={2}
                        className="p-4 border-b  border-border text-left text-sm text-body font-body leading-5 font-normal"
                      >
                        {category.name}
                      </td>
                      <td className="p-4 border-b border-border flex  justify-end items-center gap-4 text-right text-sm text-body font-body leading-5 font-normal">
                        <Button onClick={() => handleEdit(category)}>
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDelete(category)}
                          intent="outline"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <Modal
        open={showCategoryForm}
        onClose={toggleForm}
        className="flex justify-center items-center"
      >
        <CategoryForm
          category={category}
          onSuccess={() =>
            handleSuccess(
              category
                ? "Category edited successfully"
                : "Category added successfully"
            )
          }
        />
      </Modal>

      <Dialog
        open={showConfirmDelete}
        onClose={cancelDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Category</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this category?
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
    </>
  );
}
