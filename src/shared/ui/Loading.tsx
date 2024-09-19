import { Spinner } from "react-bootstrap";
import s from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={s.spiner}>
      <Spinner animation="border" variant="secondary" />
    </div>
  );
};
