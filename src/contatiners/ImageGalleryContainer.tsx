import * as React from 'react';
import ImageGallery from '../components/ImageGallery';
import axios, { AxiosResponse, AxiosError } from 'axios';
import UploaderContainer from './UploaderContainer';

export interface ImageGalleryContainerProps {
}

export interface ImageGalleryContainerState {
    imagesURLs: string[]
}

export default class ImageGalleryContainer extends React.Component<ImageGalleryContainerProps, ImageGalleryContainerState> {
  constructor(props: ImageGalleryContainerProps) {
    super(props);

    this.state = {
        imagesURLs: []
    }
  }
  componentDidMount(){
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

  public render() {
    return (
      <div>
        <h1>Hanan & Elina</h1>
        <UploaderContainer />
        <ImageGallery imagesURLs = { this.state.imagesURLs }/>
      </div>
    );
  }
}
