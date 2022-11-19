import { Box, Flex, Img, Button, Text } from '@chakra-ui/react';
import logo from '../img/logo-full.png';
import { DeleteIcon, CopyIcon } from '@chakra-ui/icons'
import { useEffect, useRef, useState } from 'react';

import config from "../config";


const Navbar = () => {

    const [email, setEmail] = useState("");

    const dataRef = useRef({});

    function refreshEmailId(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        console.log("refreshing email "+ dataRef.current["email"] +" token "+dataRef.current["token"]);
        

        fetch(config.baseURL+"/details/?token="+dataRef.current["token"]+"&email="+dataRef.current["email"], requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.success){
                const payload = result.payload;
                if(payload.id.toString() !== dataRef.current["emailId"]){ 
                    // call function to drop old mails and fetch new mails
                }

                dataRef.current["email"] = payload.emailId;
                dataRef.current["token"] = payload.token;
                dataRef.current["emailId"] = payload.id;

                localStorage.setItem("email", payload.emailId);
                localStorage.setItem("token", payload.token);
                localStorage.setItem("emailId", payload.id);

                setEmail(payload.emailId);
            }
        })
        .catch(error => console.log('error', error));

        setTimeout(refreshEmailId, 10000);
    };

    function copyEmailId(){
        navigator.clipboard.writeText(email);
    }

    function flushEmailId(){
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };
        
        fetch(config.baseURL+"/flush/?token="+dataRef.current["token"]+"&id="+dataRef.current["emailId"], requestOptions)
            .then(response => response.text())
            .then(result =>{
                localStorage.removeItem("email");
                localStorage.removeItem("token");
                localStorage.removeItem("emailId");
                window.location.reload();
            })
            .catch(error => console.log('error', error));
    }


    useEffect(() => {
        dataRef.current["email"] = localStorage.getItem("email") || "";
        dataRef.current["emailId"] = localStorage.getItem("emailId") || "";
        dataRef.current["token"] = localStorage.getItem("token") || "";
        refreshEmailId();
    },[]);



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
                    onClick={flushEmailId}
                ><DeleteIcon/>&nbsp;&nbsp;Flush E-mail</Button>
            </Flex>
        </Box>
    );
}

export default Navbar;