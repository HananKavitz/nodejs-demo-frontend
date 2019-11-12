import * as React from 'react';
import ImageGallery from '../components/ImageGallery';
import axios, { AxiosResponse, AxiosError } from 'axios';
import UploaderContainer from "./UploaderContainer";

export interface ImageGalleryContainerProps {
}

export interface ImageGalleryContainerState {
    imagesURLs: string[]
}

export default class ImageGalleryContainer extends React.Component<ImageGalleryContainerProps, ImageGalleryContainerState> {
  constructor(props: ImageGalleryContainerProps) {
    super(props);
    this.refreshImages = this.refreshImages.bind(this);

    this.state = {
        imagesURLs: []
    }
  }
  componentDidMount(): void{
    this.refreshImages();
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Hanan & Elina</h1>
        <UploaderContainer refreshImagesHandler = {this.refreshImages}/>
        <ImageGallery imagesURLs = { this.state.imagesURLs }/>
      </div>
    );
  }

  refreshImages(): void {
    axios.get('/api/imagesInBucket').
        then((res: AxiosResponse) => {
            this.setState({
              imagesURLs: res.data
            })
        }).
        catch((err: AxiosError) => {
            console.error(err);
        });
  }
}
