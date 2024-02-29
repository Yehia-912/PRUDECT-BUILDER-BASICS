/**
 *
 * @param {Object} product - The product object to be validated.
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.imageURL - The URL of the product image.
 * @param {string} product.price - The price of the product.
 * @returns {Object} An object containing error messages for each field: title, description, imageURL, and price.
 */
export const errorsValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  const { title, description, imageURL, price } = product;

  const validURL: boolean =
    // eslint-disable-next-line no-useless-escape
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
      imageURL
    );
  const validTitle = !title.trim() || title.length < 8 || title.length > 90;
  const validDescription =
    !description.trim() || description.length < 15 || description.length > 900;
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  if (validTitle)
    errors.title = "product title must be between 8 and 90 characters";
  if (validDescription)
    errors.description =
      "product description must be between 15 and 900 characters";
  if (!price.trim() || isNaN(+price)) errors.price = "valid price requird";
  if (!imageURL.trim() || !validURL) errors.imageURL = "valid price required";
  return errors;
};
