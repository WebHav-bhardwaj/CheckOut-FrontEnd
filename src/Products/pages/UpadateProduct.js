import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Select from "../../shared/components/FormElements/Select";
import MainHeading from "../../shared/components/UIElements/MainHeading";
import Input from "../../shared/components/FormElements/Input";
import PriceInput from "../../shared/components/FormElements/PriceInput";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/util/validators";
import { useForm } from "../../shared/components/Hooks/form-hook";

import image1 from "../../shared/components/assets/ProductImages/image.webp";
import image2 from "../../shared/components/assets/ProductImages/image2.webp";
import image3 from "../../shared/components/assets/ProductImages/image3.webp";

const CATEGORIES = [
  { name: "Electronics", catId: 1 },
  { name: "Books", catId: 2 },
  { name: "Furniture", catId: 3 },
  { name: "Others", catId: 4 },
];

const DUMMY_DATA = [
  {
    productId: "p1",
    images: [image1, image2, image3],
    ad_title:
      "Apple iPhone14 with bill,box in exclusive price refurbished model",
    description:
      "iPhone 13 pro max 256gb 96% battery health in immaculate condition for sale with original box, data cable and charger in scratch less mint condition fully laminated phone. face I'd not working out of warranty",
    price: "25,999",
    location: { country: "India", state: "Gujrat", city: "Surat" },
    userId: "u1",
    contact: { name: "Vishal Raj", contactNo: "8319428275" },
  },
  {
    productId: "p2",
    images: [image1, image2, image3],
    ad_title: "Samsung ipad with bill,box in exclusive price refurbished model",
    description:
      "Samsung ipad 256gb 96% battery health in immaculate condition for sale with original box, data cable and charger in scratch less mint condition fully laminated phone. face I'd not working out of warranty",
    price: "24,999",
    location: { country: "India", state: "Gujrat", city: "Surat" },
    userId: "u2",
    contact: { name: "vaibhav", contactNo: "8319428275" },
  },
];

export default function UpadateProduct() {
  const pid = useParams().pid;
  const [isLoading, setIsLoading] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      update_brand: { value: "", isValid: true },
      update_title: { value: "", isValid: true },
      update_description: { value: "", isValid: true },
      update_image: { value: "", isValid: true },
    },
    true
  );

  const identifiedProduct = DUMMY_DATA.find((p) => p.productId === pid);

  useEffect(() => {
    if (identifiedProduct) {
      setFormData(
        {
          update_brand: { value: "", isValid: true },
          update_title: { value: identifiedProduct.ad_title, isValid: true },
          update_description: {
            value: identifiedProduct.description,
            isValid: true,
          },
          update_image: { value: "", isValid: true },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedProduct]);

  const submitHandler = (event) => {
    event.preventDefault();
  };


  if (isLoading) {
    return (
      <div>
        <h2>is Loading</h2>
      </div>
    );
  }

  if (identifiedProduct)
    return (
      <div className="w-full flex-col justify-center">
        <MainHeading className="text-3xl pt-8 pb-8 lg:pt-10 lg:pb-10">
          <h2>Update Your Ad</h2>
        </MainHeading>
        <form
          className="border-2 py-4 px-6 lg:items-start border-black mb-16 mx-3 lg:px-16 lg:mx-64 lg:py-8"
          onSubmit={submitHandler}
        >
          <Select label="category" items={CATEGORIES} className="" />
          <div>
            <h2 className="text-lg my-8">Include Some Details</h2>
            <Input
              onInput={inputHandler}
              validators={[]}
              id="update_brand"
              element="input"
              label="Brand"
              placeholder="Enter The Brand Name"
            />
            <Input
              id="update_title"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(7)]}
              errorText="bawe full error deriya scene"
              element="input"
              label="Ad Title"
              placeholder="Mention the key features of your item (e.g. brand, model, age, type)"
              initialValue={formState.inputs.update_title.value}
              initialValid={formState.inputs.update_title.isValid}
            />
            <Input
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(20)]}
              id="update_description"
              label="Description"
              placeholder="Include condition, features and reason for selling"
              initialValue={formState.inputs.update_description.value}
              initialValid={formState.inputs.update_description.isValid}
            />
            <PriceInput className="" id="update_price" />
            <h2 className="text-lg my-8">CONFIRM YOUR LOCATION</h2>
            <div>
              <Input
                id="update_country"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                element="input"
                label="Country"
              />
              <Input
                id="update_state"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                element="input"
                label="State"
                className=""
              />
              <Input
                id="update_city"
                validators={[]}
                onInput={inputHandler}
                element="input"
                label="City"
                className=""
              />
            </div>
            <h2 className="text-lg my-8">UPLOAD PHOTOS</h2>
            <Input
              validators={[]}
              onInput={inputHandler}
              id="update_image"
              element="input"
              type="image"
            />
          </div>
          <div className="w-full flex justify-center lg:w-2/3">
            <Button
              className={`${
                !formState.isValid && " bg-red-600"
              }rounded-md text-sm my-8 border-2 w-36 py-3 border-black bg-BackDropMain lg:text-lg`}
              type="submit"
              disabled={!formState.isValid}
            >
              UPDATE NOW
            </Button>
          </div>
        </form>
      </div>
    );

  return (
    <div>
      <h1>NO product found</h1>
    </div>
  );
}
