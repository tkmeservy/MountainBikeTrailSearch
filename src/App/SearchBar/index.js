import React, { Component } from 'react'
import Result from "./Result"
import { connect } from "react-redux"
import { viewTrails } from "../../redux/trails.js"
import Axios from "axios"


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            whichSide: 'none',
            trailsLeft: [],
            trailsRight: [],
            url: "https://www.mtbproject.com/data/get-trails?",
            key: "200172008-c413225245d99bd361caaccda68f9fa7",
            inputs: {
                latitude: "",
                longitude: "",
                maxDistance: "",
                minStars: "",
                minLength: "",
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        let { name, value } = event.target
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,

                    [name]: value
                }
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        let side = event.target.name
        let { url, key } = this.state
        let { viewTrails } = this.props
        let { latitude, longitude, maxDistance, minStars, minLength } = this.state.inputs
        Axios.get(`${url}lat=${latitude}&lon=${longitude}&maxDistance=${maxDistance}&minStars=${minStars}&minLength=${minLength}&key=${key}`)
            .then((response) => {
                let { data } = response;
                if (side === "right"){
                this.setState(() => {
                    return {
                        trailsRight: [...viewTrails(data.trails).trails],
                    }
                })
            } else {
                this.setState(() => {
                    return {
                        trailsLeft: [...viewTrails(data.trails).trails]
                    }
                })
            }
            })


    }
    ///


    render() {
        let { latitude, longitude, maxDistance, minStars, minLength } = this.state.inputs
        const rightTrails = this.state.trailsRight.map((trail, i) => {
            return <Result key={i + trail.id} {...trail} ></Result>
        })
        const leftTrails = this.state.trailsLeft.map((trail, i) => {
            return <Result key={i + trail.id} {...trail} ></Result>
        })
        return (

            <div className="searchWrapper">
                <div className="searchBar">
                    <form className='search' >
                        <div className="lat">
                            <input onChange={this.handleChange} type="text" value={latitude} name="latitude" placeholder="latitude" />
                        </div>
                        <div className="lon">
                            <input onChange={this.handleChange} type="text" value={longitude} name="longitude" placeholder="longitude" />
                        </div>
                        <div className="dis">

                            <input onChange={this.handleChange} type="text" value={maxDistance} name="maxDistance" placeholder="Max Distance From Coordinate" />

                        </div>
                        <div className="sta">
                            <input onChange={this.handleChange} type="text" value={minStars} name="minStars" placeholder="Minimum Star Rating" />

                        </div>
                        <div className="len">
                            <input onChange={this.handleChange} type="text" value={minLength} name="minLength" placeholder="Minimum Trail Length" />

                        </div>
                        <div className="b1">
                        <button  onClick={this.handleSubmit} name="left" className="b">Submit</button>
                        </div>
                        <div className="b2">
                        <button className="b" onClick={this.handleSubmit} name="right" >Submit</button>
                        </div>
                    </form>
                    <div className= "trailWrapper">
                        <div className = "left scrollbar">
                            <div className = "resultsL" >
                            
                            {leftTrails}
                            </div>
                            
                            
                        </div>
                        <div className="right scrollbar">
                            <div className="results">
                            
                            {rightTrails}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default connect(state => state, { viewTrails })(SearchBar)
