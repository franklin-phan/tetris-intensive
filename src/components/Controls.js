import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'

import KeyboardEventHandler from 'react-keyboard-event-handler';


export default function Controls(props) {
    const dispatch = useDispatch()
	const isRunning = useSelector((state) => state.game.isRunning)
    const gameOver = useSelector((state) => state.game.gameOver) 


	return (
		<div className={`controls`}>
            <KeyboardEventHandler
            handleKeys={['a','left']}
            onKeyEvent={(key, e) => {
                if (!isRunning || gameOver) { return } 
                dispatch(moveLeft())
            }} />
            
			{/* left */}
			<button 
				disabled={!isRunning || gameOver}
				className="control-button" 
				onClick={(e) => {
					if (!isRunning || gameOver) { return } 
					dispatch(moveLeft())
				}}>Left</button>

            <KeyboardEventHandler
            handleKeys={['d','right']}
            onKeyEvent={(key, e) => {
                if (!isRunning || gameOver) { return } 
                dispatch(moveRight())
            }} />       
			{/* right */}
			<button 
				disabled={!isRunning || gameOver}
				className="control-button" 
				onClick={(e) => {
					if (!isRunning || gameOver) { return } 
					dispatch(moveRight())
				}}>Right</button>
            <KeyboardEventHandler
            handleKeys={['w','up']}
            onKeyEvent={(key, e) => {
                if (!isRunning || gameOver) { return } 
                dispatch(rotate())
            }} />  
			{/* rotate */}
			<button 
				disabled={!isRunning || gameOver}
				className="control-button" 
				onClick={(e) => {
					if (!isRunning || gameOver) { return } 
					dispatch(rotate())
				}}>Rotate</button>
            <KeyboardEventHandler
            handleKeys={['s','down']}
            onKeyEvent={(key, e) => {
                if (!isRunning || gameOver) { return } 
                dispatch(moveDown())
            }} />  
			{/* down */}
			<button 
				disabled={!isRunning || gameOver}
				className="control-button" 
				onClick={(e) => {
					if (!isRunning || gameOver) { return } 
					dispatch(moveDown())
				}}>Down</button>

		</div>
	)
}