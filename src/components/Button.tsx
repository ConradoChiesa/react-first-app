import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading: boolean;
  onClick: () => void;
};

function Button({ children, isLoading, onClick }: Props) {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      type="button"
      className={`btn btn-${!isLoading ? "primary" : "secondary"}`}
    >
      {isLoading ? "Loading...." : children}
    </button>
  );
}

export default Button;
