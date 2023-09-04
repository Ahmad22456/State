import React from "react";

class Person extends React.Component {

    constructor({fullName, bio, imgSrc, profession}) {

        super()
        this.fullName = fullName
        this.bio = bio
        this.imgSrc = imgSrc
        this.profession = profession
    }

    render() {
        return(
            <div>
                {this.fullName}
            </div>
        )
    }
}

export default Person