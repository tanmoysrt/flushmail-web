import { Flex,Box,Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import mailIcon from "../img/mail-icon.png";
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
  },[])


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
      
      {
        mails.length > 0 ? mails.map((mail) => <MailCard key={mail.id} details={mail} onClick={onClikcMailCard} />)
        : <Box 
            display="flex"
            height="100%" 
            width="100%" 
            justifyContent="center" 
            alignItems="center"
          >
            <Box 
              height="min"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image src={mailIcon} width={{
                "base": "50%",
                "md": "70%"
              }} alt="mailicon"></Image>
              <Text fontSize={{
                "base": "20px",
                "md": "25px"
              }} fontWeight="semibold" color="#878787">No mails to show</Text>
            </Box>
        </Box>
      }
    </Flex>
  );
};

export default MailList;
