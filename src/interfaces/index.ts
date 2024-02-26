export interface PRODUCT {
  id: string | undefined;
  title: string;
  description: string;
  price: string;
  imageURL: string;
  colors: string[];
  category: { name: string; imageURL: string };
}
export interface IInput {
  id: string;
  name: string;
  label: string;
  type: string;
}
