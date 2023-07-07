// import axios from "axios";
import React from "react";

import Input from "./Input";

export default function Location() {
  return (
    <div>
      <Input element='input' label="Country" />
      <Input element="input" label="State" className="" />
      <Input element="input" label="City" className="" />
    </div>
  );
}
