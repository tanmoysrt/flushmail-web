import { Box, Flex, Text } from "@chakra-ui/react";
import { ArrowDownIcon } from '@chakra-ui/icons'


const MailAttachment = () => {
    return (
        <Box paddingY="10px" paddingX="17px" backgroundColor="white" borderRadius="50px"> 
            <Flex justifyContent="center" alignItems="center" fontSize="19px">
                <Text>admission.pdf</Text>&nbsp;&nbsp;
                <ArrowDownIcon/>
            </Flex>
        </Box>
    );
}

export default MailAttachment;