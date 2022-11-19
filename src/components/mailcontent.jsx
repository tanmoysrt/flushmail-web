import {Box, Flex, Wrap , Text} from "@chakra-ui/react";
import MailAttachment from "./mailAttachment";

const MailContent = ()=>{
    return (
        <Box width="100%" backgroundColor="#F8F8F8" borderRadius="10px" padding="27px" display={{
            "base": "none",
            "md": "block"
        }}>
            {/* Headers */}
            <Flex fontSize="18px">
                <Text fontWeight="semibold">XYZ Company <span style={{
                    color: "#878787",
                    fontWeight: "normal"
                }}>&#60;no-reply@company.xyz&#62;</span></Text>
                <Text marginLeft="auto">Fri 4th Nov, 2022 03:34 PM</Text>
            </Flex>
            {/* Subject */}
            <Text fontSize="24px" fontWeight="semibold" marginTop="20px">Password Reset Link</Text>
            {/* Body */}
            <Box height="600px" width="100%" backgroundColor="white" marginTop="10px" borderRadius="10px" padding="20px" overflow="scroll">

            </Box>
            {/* Attachments */}
            <Wrap marginTop="20px" gap="10px">
                <MailAttachment/>
                <MailAttachment/>
                <MailAttachment/>
                <MailAttachment/>
                <MailAttachment/>
                <MailAttachment/>
                <MailAttachment/>
                <MailAttachment/>
                <MailAttachment/>
                <MailAttachment/>
                <MailAttachment/>
                <MailAttachment/>
                <MailAttachment/>
            </Wrap>
        </Box>
    );
}

export default MailContent;