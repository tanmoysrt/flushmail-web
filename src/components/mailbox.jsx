import { Grid } from "@chakra-ui/react";

import MailList from "./mailist";
import MailContent from "./mailcontent";

const MailBox = ()=>{
    return (
        <Grid templateColumns={{
            "base": "1fr",
            "md": "1fr 3fr"
        }} marginTop={{
            "base": "20px",
            "md": "40px"
        }} height={{
            "base": "90%",
            "md": "80%"
        }} gap="30px">
            <MailList/>
            <MailContent/>
        </Grid>
    );
}

export default MailBox;