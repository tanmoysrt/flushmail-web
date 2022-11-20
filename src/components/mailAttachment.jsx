import { Box, Flex, Text } from "@chakra-ui/react";
import { ArrowDownIcon } from '@chakra-ui/icons'


const MailAttachment = ({name, link}) => {
    return (
        <Box paddingY={{
            base: "8px",
            md: "10px",
        }} paddingX={{
            base: "10px",
            md: "17px",
        }} backgroundColor="white" borderRadius="50px"
        
        onClick={()=>{
            window.open(link, "_blank");
        }}
        > 
            <Flex justifyContent="center" alignItems="center" fontSize={{
                base: "15px",
                md : "19px"
            }}>
                <Text>{name}</Text>&nbsp;&nbsp;
                <ArrowDownIcon/>
            </Flex>
        </Box>
    );
}

export default MailAttachment;