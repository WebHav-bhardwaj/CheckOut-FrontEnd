import React, { useState } from "react";

import Select from "../../shared/components/FormElements/Select";
import MainHeading from "../../shared/components/UIElements/MainHeading";
import ElecForm from "../components/Forms/ElecForm";
import BooksForm from "../components/Forms/BooksForm";
import FurForm from "../components/Forms/FurForm";
import Others from "../components/Forms/Others";
import Button from "../../shared/components/FormElements/Button";

export default function NewProduct() {
  const CATEGORIES = [
    { name: "Electronics", catId: 1 },
    { name: "Books", catId: 2 },
    { name: "Furniture", catId: 3 },
    { name: "Others", catId: 4 },
  ];

  const [formType, setFormType] = useState();

  let form = "";
  if (formType === "Electronics") {
    form = <ElecForm />;
  } else if (formType === "Books") {
    form = <BooksForm />;
  } else if (formType === "Furniture") {
    form = <FurForm />;
  } else if (formType === "Others") {
    form = <Others />;
  } else {
    form = "";
  }

  return (
    <div className="w-full flex-col justify-center">
      <MainHeading className="text-3xl pt-8 pb-8 lg:pt-10 lg:pb-10">
        <h2>Post Your Ad</h2>
      </MainHeading>
      <form
        className="border-2 py-4 px-6 lg:items-start border-black mb-16 mx-3 lg:px-16 lg:mx-64 lg:py-8"
        action=""
      >
        <Select
          label="category"
          items={CATEGORIES}
          selectedValue={setFormType}
          className=""
        />
        {console.log(formType)}
        {form}
        <div className="w-full flex justify-center lg:w-2/3">
          <Button
            className="rounded-md text-sm my-8 border-2 w-36 py-3 border-black bg-BackDropMain lg:text-lg"
            type="submit"
          >
            POST NOW
          </Button>
        </div>
      </form>
    </div>
  );
}
