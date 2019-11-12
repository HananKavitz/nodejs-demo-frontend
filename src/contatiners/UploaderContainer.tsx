import * as React from 'react';
import Uploader from '../components/Uploader';
import axios from 'axios';

export interface UploaderContainerProps {
  
}

export interface UploaderContainerState {
}

export default class UploaderContainer extends React.Component<UploaderContainerProps, UploaderContainerState> {
  constructor(props: UploaderContainerProps) {
    super(props);

    this.state = {
    }
  }

  render(): JSX.Element {
    return (
      <div>
        <Uploader uploadHandle = {this.uploadHandle}/>
    </div>
    );
  }

  uploadHandle(file: File): void {
    console.log(file);
    const data = new FormData() 
    data.append('file', file);
    axios.post('/api/newImege',data).then(res => {
      console.log(res);
    })
  }
}
