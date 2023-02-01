import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import Orders from './Orders'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faCogs, faTable, faList, faUser } from '@fortawesome/free-solid-svg-icons'

import './App.css'

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleTrigger = () => setIsOpen(!isOpen)

    return (
        <div className="App">
            <div className="page">

                <div className={`sidebar${isOpen ? ' sidebar--open' : ''}`}>
                    <div className="trigger" onClick={handleTrigger}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </div>

                    <div className="sidebar-position">
                        <FontAwesomeIcon icon={faUser} />
                        <span>
                            <a href="http://localhost:3000/">
                                Home
                            </a>
                        </span>
                    </div>
                    <div className="sidebar-position">
                        <FontAwesomeIcon icon={faTable} />
                        <span>
                            <a href='http://localhost:3000/orders'>
                                Place Orders
                            </a>
                        </span>
                    </div>
                    <div className="sidebar-position">
                        <FontAwesomeIcon icon={faCogs} />
                        <span>
                            <a href='http://localhost:3000/track'>	My Orders  </a>
                        </span>
                    </div>

                    <div className="sidebar-position">
                        <FontAwesomeIcon icon={faList} />
                        <span>
                            <a href='http://localhost:3000/feedback'>	Feedback  </a>
                        </span>
                    </div>
                    <br /><br /><br /><br /><br /><br />
                    <br />



                    <div className="sidebar-position">
                        <span class="text-black">
                            {/* Preview the new<br/> */}
                            {/* <b class="font-bold">ChainHive</b>
		   <br/>website! */}
                            <div class="bg-white h-36 w-48 p-4 mt-1 rounded-lg">
                                <p class="text-black font-bold">Preview the new<br />
                                    <b class="text-blue-600 ml-5">ChainHive !</b></p><br />
                                <a class="ml-6 text-black font-bold" href="https://youtu.be/P2czTHeJP6Y">Demo Link</a>
                            </div>
                        </span>



                    </div>
                </div>

            </div>
        </div>
    )
}
export default Sidebar
