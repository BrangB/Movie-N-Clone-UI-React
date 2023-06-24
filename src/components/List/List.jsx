import React, { useRef, useState } from 'react'
import './list.scss'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../ListItem/ListItem';

const List = () => {

    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlidNumber] = useState(0)

    const listRef = useRef();

    const handlerClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 55
        if(direction === "left" && slideNumber > 0){
            setSlidNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${220 + distance}px)`
        }
        if(direction === "right" && slideNumber < 4){
            setSlidNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-220 + distance}px)`
        }
    }

  return (
    <div className='list'>
        <span className="listTitle">Continue to Watch</span>
        <div className="wrapper">
            <ArrowBackIosNewOutlinedIcon className='sliderArrow left' onClick={() => handlerClick("left")} style={{display: !isMoved && "none"}}/>
            <div className="container" ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
            </div>
            <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={() => handlerClick("right")}/>
        </div>
    </div>
  )
}

export default List