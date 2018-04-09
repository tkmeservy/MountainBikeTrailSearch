import React from 'react'
import {Link} from "react-router-dom"

function NavBar(props) {
    return (
        <div className="navBar">
            <div className="links">
            <Link className= "link" to="/trailsearch">Home</Link>
            <Link className="link" to="/trailsearch/searchbar" > Trail Search </Link>
            <Link className="link" to="/trailsearch/linked">Links</Link>
            </div>
            <div className="mtb">
                
                <a href="https://www.mtbproject.com/">powered by MTB Project</a>
                </div>
        </div>
    )
}

export default NavBar
