import { Box , Text} from "@chakra-ui/react";

const MailCard = ()=>{
    return (
        <Box width="100%" backgroundColor="white" borderRadius="10px" padding={{
            base: "12px",
            md: "15px",
        }}>
            <Text fontSize={{
                base: "16px",
                md: "20px",
            }} fontWeight="bold">XYZ Company</Text>
            <Text fontSize={{
                base: "16px",
                md: "20px",
            }} fontWeight="semibold">Password Reset Link</Text>
            <Text fontSize={{
                base: "12px",
                md: "17px",
            }}  color="#616161">Tap the link to reset the password. Kindly dont share the password or link with anone else.</Text>
        </Box>
    );
}

export default MailCard;