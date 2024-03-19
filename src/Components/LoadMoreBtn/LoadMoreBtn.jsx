import CustomButton from "./CustomButtom";
import { errorMessage } from "../../notification/messages";

const LoadMoreBtn = ({ isVisible, onClick }) => {
  return (
    <>
      {isVisible && (
        <CustomButton onClick={onClick}>{errorMessage.loadMore}</CustomButton>
      )}
    </>
  );
};

export default LoadMoreBtn;
