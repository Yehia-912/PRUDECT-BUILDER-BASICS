import { Dialog, Transition } from "@headlessui/react";
import { FormEvent, Fragment, ReactNode } from "react";
import Button from "./Button";
import { IProduct } from "../../interfaces";
import { defaultProductObj } from "../../data";
import { errorsValidation } from "../../validation";
interface IProps {
  title: string;
  isOpen: boolean;
  children?: ReactNode;
  setIsOpen: (val: boolean) => void;
  setProducts: (val: IProduct[]) => void;
  products: IProduct[];
  newProduct: IProduct;
  setNewProduct: (val: IProduct) => void;
}
const Model = ({
  isOpen,
  setIsOpen,
  title,
  children,
  products,
  newProduct,
  setNewProduct,
  setProducts,
}: IProps) => {
  // ** handlers
  //#1
  const closeModal = () => setIsOpen(false);
  //#2
  const onCancelHandler = () => {
    setNewProduct(defaultProductObj);
    // closeModal();
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = errorsValidation({
      title: newProduct.title,
      description: newProduct.description,
      imageURL: newProduct.imageURL,
      price: newProduct.price,
    });
    console.log(errors);
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 uppercase mb-5"
                  >
                    {title}
                  </Dialog.Title>
                  <form action="get" onSubmit={onSubmitHandler}>
                    {children}
                    <br />
                    <div className="flex space-x-3">
                      <Button
                        className="w-full bg-indigo-400  text-white hover:bg-indigo-500 duration-150"
                        onClick={() => setIsOpen(false)}
                      >
                        submit
                      </Button>
                      <Button
                        className="w-full bg-gray-400 text-white hover:bg-gray-500 duration-150"
                        onClick={onCancelHandler}
                      >
                        cancel
                      </Button>
                    </div>
                  </form>
                  <form action="">
                    <button type="submit"></button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Model;
