import React, { useState } from 'react'
// import Form_data from './Form_data';
import { useHistory } from 'react-router';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Front = (props) => {
    const history = useHistory();
    const [selectcolor, setcolor] = useState('#000');
    return (
        <>
            <div>
                <div className="data">
                    <div className="front_card" >
                        <div className="logo">
                            <img src={props?.logourl || "https://res.cloudinary.com/dob0ubi8g/image/upload/v1630608807/mmyhzmsxxjk9ubhcc7aa.webp"} alt="loading" />
                        </div>
                        <div className="name"><p style={{ color: props?.colortext || "#aca9ac", }}>{props.name || "Jonny"}</p></div>
                    </div>
                    <div className="icons">
                        <MDBBtn size='lg' floating style={{ marginLeft: "1em", background: props?.coloricon, display: "flex", justifyContent: "center", alignItems: "center", width: "25px", height: "26px", color: "#fff", cursor: "pointer" }} href={props.facebook}>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>
                        <MDBBtn size='lg' floating style={{ marginLeft: "1em", background: props?.coloricon, display: "flex", justifyContent: "center", alignItems: "center", width: "25px", height: "26px", color: "#fff", cursor: "pointer" }} href={props.twitter}>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>
                        <MDBBtn size='lg' floating style={{ marginLeft: "1em", background: props?.coloricon, display: "flex", justifyContent: "center", alignItems: "center", width: "25px", height: "26px", color: "#fff", cursor: "pointer" }} href={props.instagram}>
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>
                        <MDBBtn size='lg' floating style={{ marginLeft: "1em", background: props?.coloricon, display: "flex", justifyContent: "center", alignItems: "center", width: "25px", height: "26px", color: "#fff", cursor: "pointer" }} href={props.linkedin}>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Front;
