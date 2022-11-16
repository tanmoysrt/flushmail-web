import { Box, Flex, Img, Button, Text } from '@chakra-ui/react';
import logo from '../img/logo-full.png';
import { DeleteIcon, CopyIcon } from '@chakra-ui/icons'


const Navbar = () => {
    return (
        <Box>
            <Flex justifyContent="space-between" alignItems="center">
                {/* Logo */}
                <Img src={logo} height="50px" />
                {/* Mail box */}
                <Box 
                    backgroundColor="#F1F1F1" 
                    color="#000000"
                    minWidth="40vw"
                    borderRadius="50px"
                    padding="7px"
                    paddingLeft="20px"
                 >
                    <Flex justifyContent="space-between" height="40px">
                        <Text fontWeight="600" fontSize="1.1rem" display="flex" alignItems="center">test@test.com</Text>
                        <Box 
                            backgroundColor="#4489E5"
                            height="100%"
                            color="white"
                            borderRadius="50px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            paddingX="18px"
                            fontWeight="600"
                            cursor="pointer"
                            _hover={{
                                backgroundColor: "#3A7BD5"
                            }}
                        >
                            <CopyIcon/>&nbsp;&nbsp;Copy Mail ID
                        </Box>
                    </Flex>
                </Box>
                {/* Flush Button */}
                <Button borderRadius="50px" colorScheme="red" alignItems="center" paddingX="25px" fontSize="1.1rem"><DeleteIcon/>&nbsp;&nbsp;Flush</Button>
            </Flex>
        </Box>
    );
}

export default Navbar;