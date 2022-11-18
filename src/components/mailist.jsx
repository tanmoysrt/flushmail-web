import { Flex } from "@chakra-ui/react";
import MailCard from "./mailcard";

const MailList = () => {
  return (
    <Flex
      backgroundColor="#F8F8F8"
      flexDirection="column"
      height="100%"
      borderRadius="10px"
      padding={{
        base: "8px",
        md: "13px",
      }}
      rowGap={{
        base: "10px",
        md: "15px",
      }}
      overflowY="scroll"
    >
      <MailCard />
      <MailCard />
      <MailCard />
      <MailCard />
      <MailCard />
      <MailCard />
      <MailCard />
      <MailCard />
    </Flex>
  );
};

export default MailList;
