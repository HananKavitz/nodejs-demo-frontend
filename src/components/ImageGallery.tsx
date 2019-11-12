import React, { Component } from 'react';

interface Props {
    imagesURLs: string[]
};

interface State {
};

export default class ImageGallery extends React.Component<Props, State> {


    render():JSX.Element {

        const imageContainer = this.props.imagesURLs.map((url: string, id:number) => {
            return (
        <div style={{'margin':'10x','display': 'inline-block'}} key = {id}> 
            <img src = { url} height = '400px' width = '400px' alt = {"MISSING image"}  />
        </div>);
        });
        return (
            <div >
                {imageContainer}
            </div>
        );
    };
};
