import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

function AddButton({ children, onClick }: Props) {
  return (
    <button onClick={onClick} type="button" className="btn btn-success">
      {children}
    </button>
  );
}

export default AddButton;
