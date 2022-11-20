import {Box, Flex, Wrap , Text} from "@chakra-ui/react";
import MailAttachment from "./mailAttachment";

import config from "../config";

const MailContent = ({dataRef, mailContent})=>{

    if (mailContent == null || mailContent === {}) return <Box></Box>
    else return (
        <Box width="100%" height="80vh" backgroundColor="#F8F8F8" borderRadius="10px" padding="27px" display={{
            "base": "none",
            "md": "block"
        }}
        
        overflowY="scroll"
        >
            {/* Headers */}
            <Flex fontSize="18px">
                <Text fontWeight="semibold">{mailContent.fromName}<span style={{
                    color: "#878787",
                    fontWeight: "normal"
                }}>&#60;{mailContent.fromEmail}&#62;</span></Text>
                <Text marginLeft="auto">{mailContent.date}</Text>
            </Flex>
            {/* Subject */}
            <Text fontSize="24px" fontWeight="semibold" marginTop="20px">{mailContent.subject}</Text>
            {/* Body */}
            <Box dangerouslySetInnerHTML={{
                "__html": mailContent.contentHtml
            }} minH="300px" width="100%" backgroundColor="white" marginTop="10px" borderRadius="10px" padding="20px" overflow="scroll">
            </Box>
            {/* Attachments */}
            <Wrap marginTop="20px" gap="10px">
                {
                    Object.entries(mailContent.attachmentsData).map(([id, details])=><MailAttachment key={id} name={details.actual} link={config.fileURL+"/"+localStorage.getItem("emailId")+"/"+details.stored} />)
                }
            </Wrap>
        </Box>
    );
}

export default MailContent;