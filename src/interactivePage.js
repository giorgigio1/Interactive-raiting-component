import { useState } from "react";
import { Button } from "./Button";
import Path from "./images/Path.png";

const scores = [1, 2, 3, 4, 5];

export const InteractivePage = ({ onSubmit }) => {
  const [selected, setSelected] = useState(null);

  const handleSubmit = () => {
    if (selected === null) {
      return
    }
    onSubmit(selected)
  };

  return (
    <div className="wrapper">
      <div className="main">
        <figure className="circle">
          <img src={Path} alt="" />
        </figure>
        <h2>How did we do?</h2>
        <p className="description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <article>
          {scores.map((score) => {
            return (
              <Button
                key={score}
                onClick={() => setSelected(score)}
                isSelected={selected === score}
              >
                {score}
              </Button>
            );
          })}
        </article>
        <button type="button" className="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};
