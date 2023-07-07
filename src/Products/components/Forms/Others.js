import React from "react";

import Input from "../../../shared/components/FormElements/Input";
import PriceInput from "../../../shared/components/FormElements/PriceInput";
import Location from "../../../shared/components/FormElements/Location";

export default function Others() {
  return (
    <div>
      <div>
        <h2 className="text-lg my-8">Include Some Details</h2>
        <Input
          element="input"
          label="Brand"
          placeholder="Enter The Brand Name"
        />
        <Input
          element="input"
          label="Ad Title"
          placeholder="Mention the key features of your item (e.g. brand, model, age, type)"
        />
        <Input
          label="Description"
          placeholder="Include condition, features and reason for selling"
        />
        <PriceInput className="" />
        <h2 className="text-lg my-8">CONFIRM YOUR LOCATION</h2>
        <Location />
        <h2 className="text-lg my-8">UPLOAD PHOTOS</h2>
        <Input element="input" type="image" />
      </div>
    </div>
  );
}
