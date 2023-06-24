import React from 'react'
import './watch.scss'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const Watch = () => {
  return (
    <div className='watch'>
        <div className='back'>
            <KeyboardBackspaceOutlinedIcon />
            Home
        </div>
        <video className='video' autoPlay progress controls src='https://player.vimeo.com/external/444986412.sd.mp4?s=d9c46e1be19f8b41f7859367a69b8946d4c59ef2&profile_id=164&oauth2_token_id=57447761'/>
    </div>
  )
}

export default Watch