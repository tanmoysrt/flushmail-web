import Navbar from "./navbar";
import MailBox from "./mailbox";
import ViewMailMobile from "../viewEmailMobile";
import { useEffect, useRef, useState } from "react";
import config from "../config";
import toast, { Toaster } from 'react-hot-toast';
import { Box, Progress } from "@chakra-ui/react";

const Container = () => {
  const dataRef = useRef({
    isDesktop: true,
    mails: [],
    latestId: 0,

  });


  const [mailContent, setMailContent] = useState(null);
  const [isRefreshingMail, setIsRefreshingMail] = useState(null);
  const [email, setEmail] = useState("");

  function showMail(details) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      config.baseURL +
        "/mail/?token=" +
        dataRef.current["token"] +
        "&id=" +
        dataRef.current["emailId"] +
        "&mailid=" +
        details.id.toString(),
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setMailContent(result.payload);
          console.log(result.payload);
        }
      })
      .catch((error) => console.log("error", error));
  }

  function clearMail() {
    setMailContent(null);
    setTimeout(() => {
      dataRef.current.updateMailList();
    }, 100);
  }

  function loadMails() {
    const token = dataRef.current["token"];
    if (token === null) {
      setTimeout(loadMails, 1000);
      console.log("FFF");
      return;
    }
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    setIsRefreshingMail(true);

    fetch(
      config.baseURL +
        "/latest/?token=" +
        token +
        "&id=" +
        (dataRef.current["emailId"] || "0") +
        "&latestMailId=" +
        dataRef.current.latestId.toString(),
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          dataRef.current.mails = [...result.payload, ...dataRef.current.mails];
          if (dataRef.current.mails.length > 0)
            dataRef.current.latestId = dataRef.current.mails[0].id;
        }

        if (dataRef.current.updateMailList) dataRef.current.updateMailList();
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setTimeout(loadMails, 10000);
        setIsRefreshingMail(false);
      });
  }

  function refreshEmailId() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      config.baseURL +
        "/details/?token=" +
        dataRef.current["token"] +
        "&email=" +
        dataRef.current["email"],
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const payload = result.payload;

          dataRef.current["email"] = payload.emailId;
          dataRef.current["token"] = payload.token;
          dataRef.current["emailId"] = payload.id;

          localStorage.setItem("email", payload.emailId);
          localStorage.setItem("token", payload.token);
          localStorage.setItem("emailId", payload.id);

          setEmail(payload.emailId);

          if (payload.id.toString() !== dataRef.current["emailId"].toString()) {
            toast.success("Old email expired.");
            // call function to drop old mails and fetch new mails
            // just reload
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }else{
            toast.success("Mail ID refreshed.");
          }
        }
      })
      .catch((error) => console.log("error", error));

    setTimeout(refreshEmailId, 600000);
  }

  function flushEmailId() {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(
      config.baseURL +
        "/flush/?token=" +
        dataRef.current["token"] +
        "&id=" +
        dataRef.current["emailId"],
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        toast.success("Email Id flushed successfully");
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        localStorage.removeItem("emailId");
        window.location.reload();
      })
      .catch((error) => console.log("error", error));
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dataRef.current.showMail = showMail;
    dataRef.current.setMailContent = setMailContent;
    dataRef.current.clearMail = clearMail;
    dataRef.current.refreshEmailId = refreshEmailId;
    dataRef.current.flushEmailId = flushEmailId;

    if (window.innerWidth > 600) {
      dataRef.current.isDesktop = true;
    } else {
      dataRef.current.isDesktop = false;
    }

    dataRef.current["email"] = localStorage.getItem("email") || "";
    dataRef.current["emailId"] = localStorage.getItem("emailId") || "";
    dataRef.current["token"] = localStorage.getItem("token") || "";

    refreshEmailId();

    loadMails();
  },[]);

  return (
    <>


  <Box 
    position="absolute"
    top="0"
    left="0"
    right="0"
    visibility={isRefreshingMail ? "visible" : "hidden"}
  >
    <Progress size='xs' colorScheme="teal" isIndeterminate  />
  </Box>

          

    <Toaster
      position="bottom-center"
      reverseOrder={false}
    />
      <Navbar dataRef={dataRef} email={email} />
      {!dataRef.current.isDesktop && mailContent != null ? (
        <ViewMailMobile dataRef={dataRef} mailContent={mailContent} />
      ) : (
        <MailBox dataRef={dataRef} mailContent={mailContent} />
      )}
    </>
  );
};

export default Container;
