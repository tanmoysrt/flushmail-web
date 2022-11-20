import Navbar from "./navbar";
import MailBox from "./mailbox";
import ViewMailMobile from "../viewEmailMobile";
import { useEffect, useRef, useState } from "react";
import config from "../config";

const Container = () => {
  const dataRef = useRef({
    isDesktop: true,
    mails: [],
    latestId: 0,
  });

  // showMail,

  const [mailContent, setMailContent] = useState(null);

  function showMail(details) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
        config.baseURL+"/mail/?token="+localStorage.getItem("token")+"&id="+localStorage.getItem("emailId")+"&mailid="+details.id.toString(),
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>{
        if(result.success){
            setMailContent(result.payload);
            console.log(result.payload);
        }
      })
      .catch((error) => console.log("error", error));
  }

  function clearMail() {
    setMailContent(null);
  }

  function loadMails(){
    const token = localStorage.getItem("token");
    if(token === null){
        setTimeout(loadMails, 1000);
        console.log("FFF")
        return;
    }
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(config.baseURL+"/latest/?token="+token+"&id="+(localStorage.getItem("emailId")||"0")+"&latestMailId="+dataRef.current.latestId.toString(), requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.success){
                dataRef.current.mails = [...result.payload, ...dataRef.current.mails];
                if(dataRef.current.mails.length > 0) dataRef.current.latestId = dataRef.current.mails[0].id;
            }

            if(dataRef.current.updateMailList) dataRef.current.updateMailList();
        })
        .catch(error => console.log('error', error))
        .finally(()=>{
            setTimeout(loadMails, 10000);
        });
}


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dataRef.current.showMail = showMail;
    dataRef.current.setMailContent = setMailContent;
    dataRef.current.clearMail = clearMail;

    if (window.innerWidth > 600) {
      dataRef.current.isDesktop = true;
    } else {
      dataRef.current.isDesktop = false;
    }
    loadMails();
  });

  return (
    <>
      <Navbar dataRef={dataRef} />
      {
        !dataRef.current.isDesktop && mailContent != null  ?  <ViewMailMobile dataRef={dataRef} mailContent={mailContent} /> : <MailBox dataRef={dataRef} mailContent={mailContent} /> 
      }
      
    </>
  );
};

export default Container;
