import { Grid , Box} from "@chakra-ui/react";

import MailList from "./mailist";
import MailContent from "./mailcontent";


const MailBox = ({dataRef, mailContent})=>{



    return (
        <Grid templateColumns={{
            "base": "1fr 0fr",
            "md": "1fr 3fr"
        }} marginTop={{
            "base": "20px",
            "md": "40px"
        }} height={{
            "base": "90%",
            "md": "80%"
        }} gap={{
            "base": "0px",
            "md": "30px"
        }}
        >
            <MailList dataRef={dataRef} />
            <Box display={{
                "base" : "none",
                "md" : "block"
            }}>
                <MailContent dataRef={dataRef} mailContent={mailContent}/>
            </Box>
        </Grid>
    );
}

export default MailBox;