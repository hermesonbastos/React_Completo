import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  const arr = ['Item 1', 'Item 2'];
  return (
    <div>
      <Input id="email" label="Email" required />
      <Input id="senha" type="password" label="Senha" />
      <Button items={arr} />
    </div>
  );
};

export default Form;
