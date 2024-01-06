// Chakra imports
import {
  Stack,
  Button,
  useColorModeValue, Box
} from "@chakra-ui/react";

import React from "react";
import { InsertTrxButton } from "./CustomButtons/InsertTrxButton";
import { ViewsButton } from "./CustomButtons/ViewsButton";

const PolicyButtons = ({ title, captions, data, isLoading, setIsLoading, onActionComplete }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Box mt={4} mb={3}>
      <Stack spacing={8} direction="row" align="center">
        <ViewsButton/>
        <InsertTrxButton
          setIsLoading={setIsLoading}
          onActionComplete={onActionComplete}
        />
      </Stack>
    </Box>
  );
};

export default PolicyButtons;
