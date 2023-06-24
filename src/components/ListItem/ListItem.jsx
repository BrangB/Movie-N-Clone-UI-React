import React, { useState } from 'react'
import './listitem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const ListItem = ({index}) => {

    const [isHovered, setIsHovered] = useState(false)
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div className='listItems' 
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}
    style={{left: isHovered && index * 225 - 5 + index *2.5}}
    >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UTnRi6uKj_X4zIUCeWwItZFdk3jwL5VEoA&usqp=CAU" alt="" />
        {isHovered && (
            <>
                    <video src={trailer} autoPlay={true} loop></video>
        <div className="itemInfo">
            <div className="icons">
                <PlayArrowIcon className='icon'/>
                <AddIcon className='icon'/>
                <ThumbUpOutlinedIcon className='icon'/>
                <ThumbDownOutlinedIcon className='icon'/>
            </div>
            <div className="itemInfoTop">
                <span>1hour 14mins</span>
                <span className='limit'>+16</span>
                <span>1999</span>
            </div>
            <div className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At labore, veniam vitae voluptatibus dolore accusamus dolorem quam quasi sequi voluptas error doloribus voluptates quae! Totam impedit repellat quisquam molestias praesentium?
            </div>
            <div className="genre">
                Action
            </div>
        </div></>
        )}

    </div>
  )
}

export default ListItem