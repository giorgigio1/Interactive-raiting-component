export const Button = ({ children, onClick, isSelected }) => (
  <button
    onClick={onClick}
    style={{ backgroundColor: isSelected ? "gray" : "" }}
  >
    {children}
  </button>
);
