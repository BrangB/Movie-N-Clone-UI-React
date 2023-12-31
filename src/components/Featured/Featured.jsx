import React from 'react'
import img1 from '../../img/img1.jpg'
import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option value="">Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}

        <img src={img1} alt="" />
        <div className="info">
            <h1>CAR OUTSIDE</h1>
            <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa debitis rem, voluptates a exercitationem, magnam quas molestias ipsa vel sapiente non provident laudantium facilis minima, optio deleniti eveniet? Inventore, provident?
            </div>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon className='icons'/>
                    <span>Play</span>
                </button>
                <button className='more'>
                    <InfoIcon className='icons'/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured