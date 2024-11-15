import { ICategory } from "@/types/category.type";

export const NO_SPECIAL_CHAR_REGEX =
  /^[a-zA-Z0-9@_.,-]*(?: [a-zA-Z0-9@_.,-]*)*$/;

export const ALLOWED_CHARS = "Only letters, numbers and  @ _ - ., are allowed";

export const defaultCategories: ICategory[] = [
  {
    _id: "1",
    name: "1 Star",
  },
  {
    _id: "2",
    name: "2 Star",
  },
  {
    _id: "3",
    name: "3 Star",
  },
];
