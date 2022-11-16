import { Grid } from "@chakra-ui/react";

import MailList from "./mailist";
import MailContent from "./mailcontent";

const MailBox = ()=>{
    return (
        <Grid templateColumns="1fr 4fr" marginTop="40px" height="80%">
            <MailList/>
            <MailContent/>
        </Grid>
    );
}

export default MailBox;