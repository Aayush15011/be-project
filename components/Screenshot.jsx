import React, { createRef, useState } from 'react';
import { useHistory} from 'react-router';3
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import RoomIcon from '@material-ui/icons/Room';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import DraftsIcon from '@material-ui/icons/Drafts';
import HomeIcon from '@material-ui/icons/Home';
import HttpIcon from '@material-ui/icons/Http';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import LinkIcon from '@material-ui/icons/Link';
import { useScreenshot } from 'use-react-screenshot'
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import QRCode from "react-qr-code";
import QRCode from 'qrcode.react';


const Screenshot = (props) => {
    const [takess, setss] = useState(false);
    const history = useHistory();
    // ------
    const fname = "First Name";
    const lname = "Last Name"
    const em = "Emailid";
    const mob = "mobile number";
    const web = "link of website";
    const add = "Address";

    // ------
    const ref = createRef(null)
    const [image, takeScreenshot] = useScreenshot();

    const getImage = () => {
        // -------
        if (props.name == "") {
            toast.error(`Enter ${fname}`, {
                position: "top-center",
            });
        }
        if (props.lastname == "") {
            toast.error(`Enter ${lname}`, {
                position: "top-center",
            });
        }
        if (props.email == "") {
            toast.error(`Enter ${em}`, {
                position: "top-center",
            });
        }
        // else if (props.phone == "") {
        //     toast.error(`Enter ${mob}`, {
        //         position: "top-center",
        //     });
        // }
        if (props.website == "") {
            toast.error(`Enter ${web}`, {
                position: "top-center",
            });
        }
        else if (props.address == "") {
            toast.error(`Enter ${add}`, {
                position: "top-center",
            });
        }
        else {
            setss(true)
            takeScreenshot(ref.current)
        }
    }
    // -------------------
    const downloaded = () => {
        if (takess != true) {
            toast.error("Payment not done ", {
                position: "top-right",
            });
        }
    }
    // -----------------

    return (
        <>
        {/* <Payment/> */}
            <div className="ss" >
                <div className="ss_images" ref={ref} >
                    {/* -----Front Card----- */}
                    <div>
                        <div className="data" >
                            <div className="front_card">
                                <div className="logo">
                                    <img src={props?.logourl || "https://res.cloudinary.com/dob0ubi8g/image/upload/v1630608807/mmyhzmsxxjk9ubhcc7aa.webp"} alt="loading" />
                                </div>
                                <div className="name"><p style={{ color: props?.colortext || "#aca9ac", }}>{props.name} {props.lastname}</p></div>
                            </div>
                            <div className="icons">
                                <MDBBtn size='lg' floating style={{ marginLeft: "1em", background: props?.coloricon, display: "flex", justifyContent: "center", alignItems: "center", width: "25px", height: "26px", color: "#fff", cursor: "pointer" }} href={props.facebook} target="_blank">
                                    <MDBIcon fab icon='facebook-f' />
                                </MDBBtn>
                                <MDBBtn size='lg' floating style={{ marginLeft: "1em", background: props?.coloricon, display: "flex", justifyContent: "center", alignItems: "center", width: "25px", height: "26px", color: "#fff", cursor: "pointer" }} href={props.twitter} target="_blank">
                                    <MDBIcon fab icon='twitter' />
                                </MDBBtn>
                                <MDBBtn size='lg' floating style={{ marginLeft: "1em", background: props?.coloricon, display: "flex", justifyContent: "center", alignItems: "center", width: "25px", height: "26px", color: "#fff", cursor: "pointer" }} href={props.instagram} target="_blank">
                                    <MDBIcon fab icon='instagram' />
                                </MDBBtn>
                                <MDBBtn size='lg' floating style={{ marginLeft: "1em", background: props?.coloricon, display: "flex", justifyContent: "center", alignItems: "center", width: "25px", height: "26px", color: "#fff", cursor: "pointer" }} href={props.linkedin} target="_blank">
                                    <MDBIcon fab icon='linkedin-in' />
                                </MDBBtn>
                            </div>
                        </div>
                    </div>
                    {/* -------------------Back Card---------------- */}
                    {
                        props.temp ?
                            <div className="template1" >
                                <div className="mob"><PhoneIcon style={{ color: props.coloricon || "#fff" }} /><p style={{ color: props?.colortext || "#ebebeb" }} >{props.phone || "Mobile number"}</p></div>
                                <div className="email"><EmailIcon style={{ color: props.coloricon || "#fff" }} /><p style={{ color: props?.colortext || "#aca9ac" }} >{props.email || "Email id"}</p></div>
                                <div className="address"><RoomIcon style={{ color: props.coloricon || "#fff" }} /><p style={{ color: props?.colortext || "#aca9ac" }} >{props.address || "Address"}</p></div>
                                <div className="web"><LanguageIcon style={{ color: props.coloricon || "#fff" }} /><p style={{ color: props?.colortext || "#aca9ac" }} >{props.website || "Website"}</p></div>

                                {/*    ---------------- QR-code added  */}
                                {/* <div className="qr" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '20px ' }}>
                                    <QRCode value="https://www.example.com" size={30} />
                                </div> */}
                                {/* --------------------- */}
                            </div>
                            : null
                    }
                    {
                        props.temp2 ?
                            <div className="template2" >
                                <div className="mob"><PhonelinkRingIcon style={{ color: props.coloricon }} /><p style={{ color: props?.colortext || "#aca9ac" }} >{props.phone || "+91 123456789"}</p></div>
                                <div className="email"><DraftsIcon style={{ color: props.coloricon }} /><p style={{ color: props?.colortext || "#aca9ac" }}>{props.email || "abcd@gmail.com"}</p></div>
                                <div className="address"><HomeIcon style={{ color: props.coloricon }} /><p style={{ color: props?.colortext || "#aca9ac" }}>{props.address || "Add1 ,Add2"}</p></div>
                                <div className="web"><HttpIcon style={{ color: props.coloricon }} /><p style={{ color: props?.colortext || "#aca9ac" }}>{props.website || "www.zapone.com"}</p></div>
                                {/* <div className="qr" > <QRCode value='hello'/></div> */}
                            </div> : null
                    }
                    {
                        props.temp3 ?
                            <div className="template3" >
                                <div className="mob"><PhonelinkRingIcon style={{ color: props.coloricon }} /><p style={{ color: props?.colortext || "#aca9ac" }} >{props.phone || "+91 11111111"}</p></div>
                                <div className="email"><DraftsIcon style={{ color: props.coloricon }} /><p style={{ color: props?.colortext || "#aca9ac" }} >{props.email || "petter@gmail.com"}</p></div>
                                <div className="address"><HomeIcon style={{ color: props.coloricon }} /><p style={{ color: props?.colortext || "#aca9ac" }} >{props.address || "Add1 ,Add2"}</p></div>
                                <div className="web"><HttpIcon style={{ color: props.coloricon }} /><p style={{ color: props?.colortext || "#aca9ac" }} >{props.website || "www.google.com"}</p></div>
                            </div> : null
                    }
                    {
                        props.temp4 ?
                            <div className="back_card">
                                <div className="mob"><PhoneIcon style={{ color: props.coloricon }} /><p style={{ color: props?.colortext || "#aca9ac" }}>{props.phone || "+91 123456789"}</p></div>
                                <div className="email"><EmailIcon style={{ color: props.coloricon }} /><p style={{ color: props?.colortext || "#aca9ac" }}>{props.email || "abcd@gmail.com"}</p></div>
                                <div className="web"><LinkIcon style={{ color: props.coloricon }} /><p style={{ color: props?.colortext || "#aca9ac" }}>{props.website || "www.zapone.com"}</p></div>
                                <div className="address"><RoomIcon style={{ color: props.coloricon }} /><p style={{ color: props?.colortext || "#aca9ac" }}>{props.address || "Add1 ,Add2"}</p></div>
                            </div>
                            : null
                    }
                </div>
                <div className="ss_btn">
                    <Button onClick={getImage} variant="contained" color="primary">
                        Take
                    </Button>
                    {/* ----------------payment mode------------ */}
                    <div className="hello">

                        <Button variant="contained" color="primary">
                        <a style={{ color: "#fff" }} href="https://6446c4c2c05ca41f55915ebe--cool-malasada-856c17.netlify.app/"> Payment</a>
                            
                        </Button>
                    </div>

                    {/* ----------------------------------------- */}
                    <Button onClick={downloaded} variant="contained" color="primary">
                        <a style={{ color: "#fff" }} href={image} download> Download</a>
                    </Button>
                </div>
                <div className="ss_img">
                    <img src={image || "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"} alt={"ScreenShot"} />
                </div>

            </div>






        </>
    )
}

export default Screenshot
