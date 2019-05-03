import React from "react";

const Loading = props => {

    
return (

   <div className="profile-main-loader">
        <div className="loader">
            <svg className="circular-loader"viewBox="25 25 50 50" >
            <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#1db954" strokeWidth="2" />
            </svg>
        </div>
    </div>

)

}


export default Loading;