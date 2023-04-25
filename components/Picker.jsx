import React, { useState } from 'react'
import { SketchPicker } from 'react-color';
import Button from '@material-ui/core/Button';
const Picker = ({ pickercolor, iconcolor, setshowdata, setshowtemplate, setbg3, setbg2 }) => {
    const [chosecolor, setcolor] = useState('#616161');
    const [choseicon, setcoloricon] = useState('pink');
    const [show, setshowcolor] = useState(false);
    const [icon, seticon] = useState(false);

    const changevent = (e) => {
        pickercolor(e.hex)
        setcolor(e.hex);
    }
    const changicon = (e) => {
        setcoloricon(e.hex)
        iconcolor(e.hex)
    }
    const clicked = () => {
        setshowcolor(!show)
        seticon(false);
    }
    const clickedicon = () => {
        seticon(!icon);
        setcolor(false);
    }
    // ------------next page
    const NextPage = () => {
        setshowtemplate(true); setbg3(true);
        setshowdata(false); setbg2(false)
    }

    return (
        <>
            <div className="detail">
                <h1>Customize theme</h1>
            </div>
            <div className="cover_all">

                <div className="text_btn">
                    <Button variant="outlined" color="secondary" onClick={clicked}>text color</Button>
                    {
                        show ? <div>
                            <SketchPicker className="picker"
                                color={chosecolor}
                                onChange={changevent} />
                        </div> : null
                    }

                </div>
                <div className="icon_btn">
                    <Button variant="outlined" color="secondary" onClick={clickedicon}>icon color</Button>
                    {
                        icon ?
                            <div>
                                <SketchPicker className="picker"
                                    color={choseicon}
                                    onChange={changicon} />
                            </div> : null
                    }
                </div>
            <div className="Next_btn">
                <Button onClick={NextPage} variant="contained" color="primary">
                    Next
                </Button>
            </div>
            </div>

        </>
    )
}

export default Picker
