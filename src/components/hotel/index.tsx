import * as React from "react";
import Image from "next/image";

import Button from "@/components/ui/button";

interface Props {
  onEdit: () => void;
  onDelete: () => void;
}

export default function Hotel({ onDelete, onEdit }: Props) {
  return (
    <article className="flex gap-3 rounded-sm p-3 min-h-[10rem] bg-card shadow-md group">
      <figure className="relative  h-full w-[150px] lg:w-1/4 overflow-hidden">
        <Image
          src="/images/hotel_1.jpg"
          fill
          alt=""
          className=" object-cover transition-all duration-500 ease-in-out group-hover:scale-150"
        />
      </figure>
      <section className="flex flex-col flex-1 h-full justify-between px-1">
        <div className="flex flex-col">
          <h5 className="font-heading text-sm leading-5 text-heading font-semibold lg:leading-7  lg:text-base">
            Green View Hotel
          </h5>
          <span className="text-faded text-xs lg:text-sm font-body leading-5">
            Lagos, Nigerai
          </span>
          <address className="text-xs lg:text-sm font-body">
            No 5 some street
          </address>
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-4 justify-between md:items-center">
          <span className="text-primary font-bold text-xs lg:text-sm font-heading leading-5 justify-self-end">
            Rating: 5 Start
          </span>

          <div className="flex items-center gap-4">
            <Button onClick={onEdit}>Edit</Button>
            <Button onClick={onDelete} intent="outline">
              Delete
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
