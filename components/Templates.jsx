import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import RoomIcon from '@material-ui/icons/Room';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import DraftsIcon from '@material-ui/icons/Drafts';
import HomeIcon from '@material-ui/icons/Home';
import HttpIcon from '@material-ui/icons/Http';
import LinkIcon from '@material-ui/icons/Link';
import QRCode from "react-qr-code";

const Templates = ({ setTemp, setTemp2, setTemp3, setTemp4, setbg4, setbg3, setshowlogo, setshowtemplate }) => {

    const setTempbtn1 = () => {
        setTemp(true);
        setTemp2(false);
        setTemp3(false); setTemp4(false);
    }
    const setTempbtn2 = () => {
        setTemp2(true);
        setTemp(false);
        setTemp3(false);
        setTemp4(false)
    }
    const setTempbtn3 = () => {
        setTemp3(true);
        setTemp(false);
        setTemp2(false);
        setTemp4(false)
    }
    const setTempbtn4 = () => {
        setTemp4(true)
        setTemp(false);
        setTemp2(false);
        setTemp3(false)
    }
    const NextPage = () => {
        setshowlogo(true); setbg4(true);
        setshowtemplate(false); setbg3(false)
    }
    return (
        <>
            <div className="detail">
                <h1>Choose Templates</h1>
            </div>
            <div className="Template">

                <div onClick={setTempbtn1} className="template1">
                    <div className="mob"><PhoneIcon  /><p >{"+91 123456789"}</p></div>
                    <div className="email"><EmailIcon  /><p >{"abcd@gmail.com"}</p></div>
                    <div className="address"><RoomIcon  /><p >{"Add1 ,Add2"}</p></div>
                    <div className="web"><LanguageIcon  /><p >{"www.zapone.com"}</p></div>
                    {/* {<div className="qr"><QRCode value="hello"/></div>} */}

                </div>
                <br /> <br />

                <div onClick={setTempbtn2} className="template2" >
                    <div className="mob"><PhonelinkRingIcon /><p >{"+91 123456789"}</p></div>
                    <div className="email"><DraftsIcon /><p >{"abcd@gmail.com"}</p></div>
                    <div className="address"><HomeIcon /><p >{"Add1 ,Add2"}</p></div>
                    <div className="web"><HttpIcon /><p >{"www.zapone.com"}</p></div>
                </div>
                <div onClick={setTempbtn3} className="template3" >
                    <div className="mob"><PhonelinkRingIcon style={{ color: "#fff" }} /><p style={{ color: "#fff" }} >{"+91 11111111"}</p></div>
                    <div className="email"><DraftsIcon style={{ color: "#fff" }} /><p style={{ color: "#fff" }} >{"petter@gmail.com"}</p></div>
                    <div className="address"><HomeIcon style={{ color: "#fff" }} /><p style={{ color: "#fff" }} >{"Add1 ,Add2"}</p></div>
                    <div className="web"><HttpIcon style={{ color: "#fff" }} /><p style={{ color: "#fff" }} >{"www.google.com"}</p></div>
                </div>
                <div onClick={setTempbtn4} className="back_card">
                    <div className="mob"><PhoneIcon /><p >{"+91 123456789"}</p></div>
                    <div className="email"><EmailIcon /><p > {"abcd@gmail.com"}</p></div>
                    <div className="web"><LinkIcon /><p >{"www.zapone.com"}</p></div>
                    <div className="address"><RoomIcon /><p >{"Add1 ,Add2"}</p></div>
                   
                </div>
            </div>
            <div className="Next_btn">
                <Button onClick={NextPage} variant="contained" color="primary">
                    Next
                </Button>
            </div>
        </>
    )
}

export default Templates
