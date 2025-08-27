import { useFormikContext } from "formik";
import BlackButton from "./BlackButton";


function BlackSubmitButton({ children }) {
  const { isSubmitting } = useFormikContext();

  return (
    <BlackButton type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : children}
    </BlackButton>
  );
}
export default BlackSubmitButton;