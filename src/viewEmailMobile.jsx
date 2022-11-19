import { Box, Button, Flex, Text, Wrap } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import MailAttachment from "./components/mailAttachment";

const ViewMailMobile = ()=>{
    return(
        <Box w="100%" height="950px" backgroundColor="#F8F8F8"marginTop="20px" borderRadius="16px" padding="15px">
            <Flex alignItems="center">
                <Button backgroundColor="#F5F4F4" fontWeight="medium"><ArrowBackIcon/>&nbsp;&nbsp;Go back</Button>
                <Text marginLeft="auto">Fri 4th Nov, 2022 03:34 PM</Text>
            </Flex>

            <Text fontSize="1.2rem" marginTop="15px" fontWeight="semibold">Password Reset Link</Text>
            <Text fontWeight="semibold">XYZ Company <span style={{
                    color: "#878787",
                    fontWeight: "normal"
                }}>&#60;no-reply@company.xyz&#62;</span></Text>

            <Box marginTop="20px" borderRadius="10px" height="100px" width="100%" backgroundColor="white" padding="8px">
                hello
            </Box>

            <Wrap marginTop="15px" gap="10px">
                <MailAttachment/>
                <MailAttachment/>
            </Wrap>
        </Box>
    );
}

export default ViewMailMobile;