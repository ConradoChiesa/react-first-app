import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const DelButton = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} type="button" className="btn btn-danger">
      {children}
    </button>
  );
};

export default DelButton;
