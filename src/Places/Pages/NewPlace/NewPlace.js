import React from "react";

import "./NewPlace.css";

import Input from "../../../Shared/Components/FormElements/Form Input/Input";

const Place = () => {
  return (
    <form className="place-form">
      <Input element="input" type="text" label="Title" />
      <Input element="textarea" type="number" label="Number" />
    </form>
  );
};

export default Place;
