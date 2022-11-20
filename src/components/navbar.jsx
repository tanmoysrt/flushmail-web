import { Box, Flex, Img, Button, Text } from '@chakra-ui/react';
import logo from '../img/logo-full.png';
import { DeleteIcon, CopyIcon } from '@chakra-ui/icons'



const Navbar = ({dataRef, email}) => {

    function copyEmailId(){
        navigator.clipboard.writeText(email);
    }

    return (
        <Box>
            <Flex justifyContent="space-between" alignItems="center" flexDirection={{
                "base": "column",
                "md": "row"
            }} >
                {/* Logo */}
                <Img src={logo} height={{
                    "base": "30px",
                    "md": "50px"
                }} />
                {/* Mail box */}
                <Box 
                    backgroundColor="#F1F1F1" 
                    color="#000000"
                    minWidth={{
                        "base": "90vw",
                        "md": "40vw"
                    }}
                    borderRadius="50px"
                    padding={{
                        "base": "3px",
                        "md": "7px"
                    }}
                    paddingLeft={{
                        "base": "10px",
                        "md": "20px"
                    }}
                    marginTop={{
                        "base": "20px",
                        "md": "0px"
                    }}
                 >
                    <Flex justifyContent="space-between" height={{
                        "base": "35px",
                        "md": "40px"
                    }}>
                        <Text fontWeight="600" fontSize="1.1rem" display="flex" alignItems="center">{email}</Text>
                        <Box 
                            backgroundColor="#4489E5"
                            height="100%"
                            color="white"
                            borderRadius="50px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            paddingX={{
                                "base": "15px",
                                "md": "18px"
                            }}

                            paddingY={{
                                "base": "10px",
                                "md": "10px"
                            }}

                            fontWeight="600"
                            cursor="pointer"
                            _hover={{
                                backgroundColor: "#3A7BD5"
                            }}
                            onClick={copyEmailId}
                        >
                            <Box display={{
                                "base": "none",
                                "md": "block"
                            }}><CopyIcon/>&nbsp;&nbsp;Copy Mail ID</Box>
                            <Box display={{
                                "base": "block",
                                "md": "none"
                            }}>
                                <CopyIcon/>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
                {/* Flush Button */}
                <Button 
                    borderRadius="50px" 
                    colorScheme="red" 
                    alignItems="center" 
                    paddingX="25px" 
                    fontSize="1.1rem"
                    position={{
                        "base": "absolute",
                        "md": "absolute"
                    }}
                    bottom={{
                        "base": "20px",
                        "md": "20px"
                    }}
                    right={{
                        "base": "10px",
                        "md": "30px"
                    }}
                    onClick={dataRef.current.flushEmailId}
                ><DeleteIcon/>&nbsp;&nbsp;Flush E-mail</Button>
            </Flex>
        </Box>
    );
}

export default Navbar;