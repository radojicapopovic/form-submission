import React, { useState } from "react";
import { Form } from "./components/Form";
import { FormInput } from "./components/FormInput";
import "./App.css";

export const PageWithForm: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    age: "",
    name: "",
    phone: {
      ext: "",
      number: "",
    },
  });

  const handleSubmit = (newUserInfo: typeof userInfo) => {
    setUserInfo(newUserInfo);
    console.log(newUserInfo);
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          required
          name="email"
          placeholder="example@alea.com"
        />
        <FormInput type="number" name="age" placeholder="30" />
        <FormInput type="text" required name="name" placeholder="John Doe" />
        <FormInput type="text" name="phone.ext" placeholder="00387" />
        <FormInput type="text" name="phone.number" placeholder="65/123-456" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default PageWithForm;
