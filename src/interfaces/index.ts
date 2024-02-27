export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  price: string;
  imageURL: string;
  colors: string[];
  category: { name: string; imageURL: string };
}
// For inputs
export interface IInput {
  label: string;
  id: string;
  type: string;
  name: "title" | "description" | "imageURL" | "price";
}
