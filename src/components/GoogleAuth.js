import React, { Component } from "react"

class GoogleAuth extends Component {

    componentDidMount = () => {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "159628228181-fdl60fq592tl2cbj234k51e40qis2lpg.apps.googleusercontent.com",
                scope: "email"
            })
        })
    }
    render() {
        return(
            <div>Google Auth</div>
        )
    }
}

export default GoogleAuth