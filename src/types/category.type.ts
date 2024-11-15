// types definition for the category entity

export interface ICategoryCreate {
  name: string;
}

export interface ICategory extends ICategoryCreate {
  _id: string;
}
