import * as React from 'react';
import Uploader from '../components/Uploader';
import axios, { AxiosResponse, AxiosError } from 'axios';

export interface UploaderContainerProps {
  refreshImagesHandler: () => void;
}

export interface UploaderContainerState {
  isUploading: boolean;
}

export default class UploaderContainer extends React.Component<UploaderContainerProps, UploaderContainerState> {
  constructor(props: UploaderContainerProps) {
    super(props);
    this.uploadHandle = this.uploadHandle.bind(this);

    this.state = {
      isUploading: false
    }
  }

  render(): JSX.Element {
    return (
      <div>
        <Uploader uploadHandle = {this.uploadHandle} isUploading = {this.state.isUploading}/>
    </div>
    );
  }

  uploadHandle(file: File): void {
    console.log(file);
    const data: FormData = new FormData();
    
    data.append('file', file);
    
    this.setState(
      {isUploading: true}
    );
    axios.post('/api/newImege',data).
    then((res: AxiosResponse) => {
      console.log(res.status);
      this.props.refreshImagesHandler();
      
      this.setState({
        isUploading: false
      })
      
    }).
    catch((err: AxiosError) => {
      console.log(err);
      this.setState({
        isUploading: false
      })
    });
  }
}
