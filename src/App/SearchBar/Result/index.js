import React, { Component } from 'react'

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                name: '',
                type: '',
                summary:'',
                rating: '',
                difficulty: '',
                url: '',
                length:'',
                ascent:'',
                descent:'',
                imgSmall:'',
                imgMedium:'',
                trails: true
            }

        }

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (event) => {
        event.preventDefault()
        this.setState(() => {
            return {
                info: {
                    name: this.props.name,
                    type: this.props.type,
                    summary: this.props.summary,
                    rating: this.props.stars,
                    difficulty: this.props.difficulty,
                    url: this.props.url,
                    length: this.props.length,
                    ascent:this.props.ascent,
                    descent: this.props.descent,
                    imgSmall: this.props.imgSmall,
                    imgMedium: this.props.imgMedium,
                    trails: false
                }
            }
        })
    }
   render() {

    console.log(this.state.info.url)
      return (
            this.state.info.trails ?

                <div className="trailList">

                    <h3>{this.props.name}</h3>
                    <h4>{this.props.summary}</h4>

                    <button className='bb' onClick={this.handleClick} name={this.props.id}>Trail Details</button>

                </div>

                :
                <div className="trailList">
                    <h1>{this.state.info.name}</h1>
                    <p>{this.state.info.summary}</p>
                    <p>{this.state.info.rating} stars</p>
                    <p>difficulty: {this.state.info.difficulty}</p>
                    <p>ascent: {this.state.info.ascent}</p>
                    <p>decent: {this.state.info.descent}</p>
                    <p>length: {this.state.info.length} miles</p>
                    <div className="arefDiv">
                    <a href={this.state.info.url} className="aref">MTB Project Link to {this.state.info.name}</a>
                    </div>
                    <img src={this.state.info.imgMedium} alt=""/>
                    
                    
                    
                    
                    </div>





        )
    }
}

export default Result
