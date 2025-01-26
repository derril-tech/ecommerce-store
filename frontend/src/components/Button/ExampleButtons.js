import React from "react";
import Button from "./Button";

const ExampleButtons = () => (
  <div className="flex flex-col items-center space-y-4 mt-10">
    <h2 className="text-2xl font-bold mb-4">Button Examples</h2>
    <Button
      text="Default Button"
      onClick={() => alert("Default Button clicked!")}
    />
    <Button
      text="Custom Button"
      color="bg-blue-500"
      hoverColor="hover:bg-blue-600"
      size="py-3 px-6"
      onClick={() => alert("Custom Button clicked!")}
    />
    <Button text="Submit Button" type="submit" />
  </div>
);

export default ExampleButtons;
