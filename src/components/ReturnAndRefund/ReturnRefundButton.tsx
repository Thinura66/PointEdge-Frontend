import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface ReturnRefundButtonProps extends ButtonProps {
  onClick: () => void;
}

const ReturnRefundButton: React.FC<ReturnRefundButtonProps> = ({ onClick }) => {
  return (
    <Button
      variant="outline"
      color="darkBlue"
      border="2px"
      height={"48px"}
      minWidth={100}
      _hover={{
        bg: "darkBlue",
        color: "white",
        borderColor: "darkBlue",
      }}
      onClick={onClick}
    >
      Proceed to Return
    </Button>
  );
};

export default ReturnRefundButton;
