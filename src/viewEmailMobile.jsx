import { Box, Button, Flex, Text, Wrap } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import MailAttachment from "./components/mailAttachment";
import config from "./config";

const ViewMailMobile = ({dataRef, mailContent})=>{
    if(mailContent == null || mailContent === {}) return <Box></Box>
    else return(
        <Box w="100%" height="80vh" overflowY="scroll" backgroundColor="#F8F8F8"marginTop="20px" borderRadius="16px" padding="15px">
            <Flex alignItems="center">
                <Button backgroundColor="#F5F4F4" fontWeight="medium"
                onClick={dataRef.current.clearMail}
                ><ArrowBackIcon/>&nbsp;&nbsp;Go back</Button>
                <Text marginLeft="auto" fontSize="12px">{mailContent.date}</Text>
            </Flex>

            <Text fontSize="1.2rem" marginTop="15px" fontWeight="semibold">{mailContent.subject}</Text>
            <Text fontWeight="semibold">{mailContent.fromName} <span style={{
                    color: "#878787",
                    fontWeight: "normal"
                }}>&#60;{mailContent.fromEmail}&#62;</span></Text>

            <Box dangerouslySetInnerHTML={{
                __html: mailContent.contentHtml
            }} 
            marginTop="20px" borderRadius="10px" minH="100px" width="100%" backgroundColor="white" padding="8px">
            </Box>

            <Wrap marginTop="15px" gap="10px">
            {
                Object.entries(mailContent.attachmentsData).map(([id, details])=><MailAttachment key={id} name={details.actual} link={config.fileURL+"/"+localStorage.getItem("emailId")+"/"+details.stored} />)
            }
            </Wrap>
        </Box>
    );
}

export default ViewMailMobile;