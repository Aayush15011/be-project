import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PaletteIcon from '@material-ui/icons/Palette';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import ImageIcon from '@material-ui/icons/Image';
import Templates from './Templates';
import Logo from './Logo';
import Button from '@material-ui/core/Button';
import Picker from './Picker';
import Screenshot from './Screenshot';
import Payment from './Payment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//  --------------------------------------------------------
function Main() {
  const [url, setUrl] = useState("");
  const [chosecolor, setcolor] = useState("#585858");
  const [icon, seticon] = useState("#a8a8ad");
  const [temp, setTemp] = useState(true);
  const [temp2, setTemp2] = useState(false);
  const [temp3, setTemp3] = useState(false);
  const [temp4, setTemp4] = useState(false);

  const [show, setshow] = useState(true);
  const [showdata, setshowdata] = useState(false);
  const [showtemplate, setshowtemplate] = useState(false);
  const [showlogo, setshowlogo] = useState(false);

  const [bg1, setbg1] = useState(true);
  const [bg2, setbg2] = useState(false);
  const [bg3, setbg3] = useState(false);
  const [bg4, setbg4] = useState(false);


  const Clicked = () => {
    setshow(true); setbg1(true)
    setshowdata(false); setbg2(false);
    setshowtemplate(false); setbg3(false);
    setshowlogo(false); setbg4(false)
  }
  const clicked2 = () => {
    setshowdata(true); setbg1(false)
    setshow(false); setbg2(true);
    setshowlogo(false); setbg3(false);
    setshowtemplate(false); setbg4(false)
  }
  const clicked3 = () => {
    setshow(false); setbg1(false)
    setshowdata(false); setbg3(true);
    setshowlogo(false); setbg2(false);
    setshowtemplate(true); setbg4(false)
  }
  const clicked4 = () => {
    setshow(false); setbg4(true)
    setshowdata(false); setbg3(false);
    setshowtemplate(false); setbg2(false);
    setshowlogo(true); setbg1(false);
  }
  // --------------Form-------------
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [website, setweb] = useState("");
  const [address, setadd] = useState("");
  const [facebook, setfacebook] = useState("");
  const [twitter, settwitter] = useState("");
  const [linkedin, setlinkenin] = useState("");
  const [instagram, setinstagram] = useState("");
  const Inputdata = (e) => {
    setname(e.target.value)
  }
  const Inputlast = (e) => {
    setlastname(e.target.value);
  }
  const Inputemail = (e) => {
    setemail(e.target.value)
  }
  const Inputphone = (e) => {
    setphone(e.target.value)

  }
  const Inputwebsite = (e) => {
    setweb(e.target.value)
  }
  const Inputaddress = (e) => {
    setadd(e.target.value)
  }
  const Inputfacebook = (e) => {
    setfacebook(e.target.value);
  }
  const Inputtwitter = (e) => {
    settwitter(e.target.value);
  }
  const Inputlinkenin = (e) => {
    setlinkenin(e.target.value);
  }
  const Inputinstagram = (e) => {
    setinstagram(e.target.value);
  }
  // ----------------------
  function imageUrl(url) {
    setUrl(url);
  }
  function Color(chosecolor) {
    setcolor(chosecolor);
  }
  function Icon(color) {
    seticon(color)
  }
  // -------------
  const fname = "FirstName";
  const lname = "LastName";
  const em = "Emailid";
  const mob = "mobile number";
  const web = "link of website";
  const add = "Address";

  const NextPage = () => {
    if (name == "") {
      toast.error(`Enter ${fname}`, {
        position: "bottom-left",
      });
    }
    else if (lastname == "") {
      toast.error(`Enter ${lname}`, {
        position: "bottom-left",
      });
    }
    else if (email == "") {
      toast.error(`Enter ${em}`, {
        position: "bottom-left",
      });
    }
    else if (phone == "") {
      toast.error(`Enter ${mob}`, {
        position: "bottom-left",
      });
    }
    else if (website == "") {
      toast.error(`Enter ${web}`, {
        position: "bottom-left",
      });
    }
    else if (address == "") {
      toast.error(`Enter ${add}`, {
        position: "bottom-left",
      });
    }
    else {
      setshowdata(true); setbg1(false)
      setshow(false); setbg2(true);
      setshowlogo(false); setbg3(false);
      setshowtemplate(false); setbg4(false);
    }
  }

  return (
    <>
      <ToastContainer />
      
      <div className="box_data">
        <button style={{ background: bg1 ? '#000' : "#ced6e0" }} onClick={Clicked} > <AccountCircleIcon style={{ color: "#fff", fontSize: "37px" }} /> </button>
        <button style={{ background: bg2 ? '#000' : "#ced6e0" }} onClick={clicked2} > <PaletteIcon style={{ color: "#fff", fontSize: "37px" }} /> </button>
        <button style={{ background: bg3 ? '#000' : "#ced6e0" }} onClick={clicked3}> <AmpStoriesIcon style={{ color: "#fff", fontSize: "37px" }} /> </button>
        <button style={{ background: bg4 ? '#000' : "#ced6e0" }} onClick={clicked4}> <ImageIcon style={{ color: "#fff", fontSize: "37px" }} /> </button>
      </div>
      <div className="main_container">

        <div className="showData">
          {show ?
            <>
              <div className="details">
                <p>Enter Your Details</p>
              </div>
              <div className="form_container">
                <div className="form">
                  <div className="text">
                    <label > <span style={{ color: "red" }}>* </span>First Name</label><br />
                    <input type="text" placeholder="First name " value={name} onChange={Inputdata} autoComplete='off' required maxlength="15" />  <br />
                  </div>  
                  <div className="text">
                    <label > <span style={{ color: "red" }}>* </span>Last Name</label><br />
                    <input type="text" placeholder="Last name" value={lastname} onChange={Inputlast} autoComplete='off' required maxlength="15" /> <br />

                  </div>
                  <div className="text">
                    <label > <span style={{ color: "red" }}>* </span>Email </label><br />
                    <input type="text" placeholder="Email" value={email} onChange={Inputemail} autoComplete='off' required maxlength="27" /> <br />

                  </div>
                  <div className="text">
                    <label > <span style={{ color: "red" }}>* </span>Contact Number</label><br />
                    <div className="phone">
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={phone}
                         />
                    </div>

                  </div>
                  <div className="text">
                    <label > <span style={{ color: "red" }}>* </span>Website link</label><br />
                    <input type="link" name="website" value={website} onChange={Inputwebsite} placeholder="Website Url" autoComplete='off' required maxlength="25" /> <br />

                  </div>
                  <div className="text">
                    <label > <span style={{ color: "red" }}>* </span>Address </label><br />
                    <input type="address" name="address" value={address} onChange={Inputaddress} placeholder="Enter Address" autoComplete='off' required maxlength="25" /> <br />

                  </div>
                  <div className="social_media">
                    <h3>Social Media Link </h3>
                  </div>
                  <div className="text">
                    <label > <span style={{ color: "red" }}></span>Facebook </label><br />
                    <input type="link" name="link" value={facebook} onChange={Inputfacebook} placeholder="Facebok link" autoComplete='off' required /> <br />
                  </div>
                  <div className="text">
                    <label > <span style={{ color: "red" }}></span>Twitter </label><br />
                    <input type="link" name="link" value={twitter} onChange={Inputtwitter} placeholder="Twitter link" autoComplete='off' required /> <br />
                  </div>
                  <div className="text">
                    <label > <span style={{ color: "red" }}></span>Linkedin </label><br />
                    <input type="link" name="link" value={linkedin} onChange={Inputlinkenin} placeholder="Linkenin link" autoComplete='off' required /> <br />
                  </div>
                  <div className="text">
                    <label > <span style={{ color: "red" }}></span>Instagram </label><br />
                    <input type="link" name="link" value={instagram} onChange={Inputinstagram} placeholder="Instagram link" autoComplete='off' required /> <br />
                  </div>
                </div>
              </div>
              <div className="form_btn">
                <Button onClick={NextPage} variant="contained" color="primary">
                  Next
                </Button>
              </div>
            </>
            : null}
          {showdata ? <Picker setbg3={setbg3} setbg2={setbg2} setshowlogo={setshowlogo} setshow={setshow} setshowdata={setshowdata} setshowtemplate={setshowtemplate} pickercolor={Color} iconcolor={Icon} /> : null}
          {showtemplate ? <Templates setbg3={setbg3} setbg4={setbg4} setshowtemplate={setshowtemplate} setshowlogo={setshowlogo} setTemp={setTemp} setTemp2={setTemp2} setTemp3={setTemp3} setTemp4={setTemp4} /> : null}
          {showlogo ? <Logo imageUrl={imageUrl} /> : null}

        </div>

      </div>
      {/* ------Screenshot--------- */}
      <div className="screenshot">
        <Screenshot
          temp4={temp4} temp2={temp2} temp={temp} temp3={temp3} coloricon={icon} colortext={chosecolor} logourl={url} name={name} lastname={lastname} facebook={facebook} linkedin={linkedin} twitter={twitter} instagram={instagram}  email={email} phone={phone} website={website} address={address} />
      </div>
      {/* <Payment/> */}
    </>
  )
}

export default Main;
