const trailReducer = (prevTrails=[], action)=>{
    switch(action.type){
        case "VIEW_TRAILS":
            return [...prevTrails, action.trails]
        default: 
        return prevTrails
    }
}



export const viewTrails = (trails)=> {
    return {
        type: "VIEW_TRAILS", 
        trails
    }
}

export default trailReducer