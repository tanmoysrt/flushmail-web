import { Box , Text} from "@chakra-ui/react";

const MailCard = ({details, onClick})=>{
    return (
        <Box onClick={()=>onClick?onClick(details):{}} width="100%" backgroundColor="white" borderRadius="10px" padding={{
            base: "12px",
            md: "15px",
        }}
        cursor="pointer"
        >
            <Text fontSize={{
                base: "16px",
                md: "20px",
            }} fontWeight="bold">{details.fromName || details.fromEmail}</Text>
            <Text fontSize={{
                base: "16px",
                md: "20px",
            }} fontWeight="semibold">{details.subject}</Text>
            <Text fontSize={{
                base: "14px",
                md: "17px",
            }} 
            color="#616161">{details.truncatedContent}</Text>
        </Box>
    );
}

export default MailCard;