import React from "react";

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

const CATEGORIES = [
  { name: "Electronics", catId: 1 },
  { name: "Books", catId: 2 },
  { name: "Furniture", catId: 3 },
  { name: "Others", catId: 4 },
];
export default function NewProduct() {
  //pass input image id to useForm 
  const [formState, inputHandler] = useForm(
    {
      new_product_brand: { value: "", isValid: false },
      new_product_title: { value: "", isValid: false },
      new_product_description: { value: "", isValid: false },
      new_product_image: { value: "", isValid: false }
    },
    false
  );

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <div className="w-full flex-col justify-center">
      <MainHeading className="text-3xl pt-8 pb-8 lg:pt-10 lg:pb-10">
        <h2>Post Your Ad</h2>
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
            id="new_product_brand"
            element="input"
            label="Brand"
            placeholder="Enter The Brand Name"
          />
          <Input
            id="new_product_title"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(7)]}
            errorText="bawe full error deriya scene"
            element="input"
            label="Ad Title"
            placeholder="Mention the key features of your item (e.g. brand, model, age, type)"
          />
          <Input
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(20)]}
            id="new_product_description"
            label="Description"
            placeholder="Include condition, features and reason for selling"
          />
          <PriceInput className="" id="new_product_price" />
          <h2 className="text-lg my-8">CONFIRM YOUR LOCATION</h2>
          <div>
            <Input
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              element="input"
              label="Country"
            />
            <Input
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              element="input"
              label="State"
              className=""
            />
            <Input
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
            id="new_product_image"
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
            POST NOW
          </Button>
        </div>
      </form>
    </div>
  );
}
