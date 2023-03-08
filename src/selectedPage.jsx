import Logo from "./images/illustration.svg";

export const SelectedPage = ({ value }) => {
  return (
    <div className="wrapper">
      <div className="main main2">
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <p className="selectedValue">You selected {value} out of 5</p>
        <h2>Thank you!</h2>
        <p className="description2">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};
