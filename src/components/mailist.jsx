import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MailCard from "./mailcard";

const MailList = ({dataRef}) => {

  const [mails, setMails] = useState([]);

  function updateMailList(){
    setMails([...dataRef.current.mails]);
  }

  function onClikcMailCard(details){
    if(dataRef.current.showMail) dataRef.current.showMail(details);
  }

  useEffect(()=>{
    dataRef.current.updateMailList = updateMailList;
  })


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
      {mails.map((mail) => <MailCard key={mail.id} details={mail} onClick={onClikcMailCard} />)}
    </Flex>
  );
};

export default MailList;
