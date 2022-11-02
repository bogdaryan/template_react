import React, { Component } from "react";
import { ReactSVG } from "@/img_video";

export default class AppReact extends React.PureComponent {
    render() {
        return (
            <div className="react" >
                <h1>Template Webpack + React</h1>
                <img src={ReactSVG} alt="" />
            </div>
        );
    }
}