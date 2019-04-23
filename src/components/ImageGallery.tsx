import React, { Component } from 'react';

interface Props {
    imagesURLs: string[]
};

interface State {
};

export default class ImageGallery extends React.Component<Props, State> {


    render():JSX.Element {


        // let  dictFullPath: Array<Object> = [];
        // this.props.imagesURLs.forEach((thisPath,i) => {
        //     dictFullPath[i] = {'url':thisPath};
        //     }
        // );
        console.log(this.props.imagesURLs);
        const imageContainer = this.props.imagesURLs.map((url: string) => {
            return (
        <div style={{'margin':'10x','display': 'inline-block'}}> 
            <img src = {'/' + url} height = '400px' width = '400px' alt = {"MISSING image"}  />
        </div>);
        });
        return (
            <div >
                {imageContainer}
            </div>
        );
    };
};
