import "./styles/App.css";
import "./styles/selectedPage.css";
import { SelectedPage } from "./selectedPage";
import { InteractivePage } from "./interactivePage";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(null);

  if (value === null) {
    return <InteractivePage onSubmit={(handleSubmit) => setValue(handleSubmit)} />;
  }

  return <SelectedPage value={value} />;
}
