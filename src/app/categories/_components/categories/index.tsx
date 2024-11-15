"use client";

import Button from "@/components/ui/button";
import { Modal } from "@mui/material";
import { useState } from "react";
import { CategoryForm } from "../categoryForm";

export default function Categories() {
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  const toggleForm = () => {
    setShowCategoryForm(!showCategoryForm);
  };
  return (
    <>
      <section className="flex flex-col gap-8">
        <h1 className="font-heading text-3xl text-heading leading-9 font-semibold">
          Hotel Categories
        </h1>
        <Button onClick={toggleForm} className=" self-end">
          Add New
        </Button>

        <div className=" overflow-auto">
          <table className="w-full bg-card p-4 rounded-md shadow-md">
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="p-4 text-sm border-b border-border text-left text-body font-body leading-5 font-semibold"
                >
                  Name
                </th>
                <th className="p-4 text-sm  border-border text-right text-body font-body leading-5 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  className="p-4  border-border text-left text-sm text-body font-body leading-5 font-normal"
                >
                  5 Star
                </td>
                <td className="p-4 border border-border flex  justify-end items-center gap-4 text-right text-sm text-body font-body leading-5 font-normal">
                  <Button>Edit</Button>
                  <Button intent="outline">Delete</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Modal
        open={showCategoryForm}
        onClose={toggleForm}
        className="flex justify-center items-center"
      >
        <CategoryForm />
      </Modal>
    </>
  );
}
