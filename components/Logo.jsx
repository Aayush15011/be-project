import React from 'react'
import { useState} from 'react'
import ImageIcon from '@material-ui/icons/Image';

const Logo = ({ imageUrl }) => {
  // const [url, setUrl] = useState("");
  // ------------
  const handleuploadimage=(e)=>{ 
    const data = new FormData()
    data.append("file", e.target.files[0])
    data.append("upload_preset", "tutorial")
    data.append("cloud_name", "dlkpq3es")
    fetch("https://api.cloudinary.com/v1_1/dlkpql3es/image/upload", {
      method: "post",
      body: data
    })
    .then(resp => resp.json())
    .then(data => {  
      imageUrl(data.url)
    })
    .catch(err => alert("Check your network failed to upload logo"));
  }

  return (
    <>
      <div>
        <div className="choose_file">
          <input style={{display:"none"}}  type="file" id="file" accept='.jpg ,.png' 
            onChange ={handleuploadimage}
          ></input> <br />
          <label for="file">
            <ImageIcon  style={{ color: "#3d31a7" }} />
            Select Logo
          </label>
        </div>
      </div>

    </>

  );
}

export default Logo
