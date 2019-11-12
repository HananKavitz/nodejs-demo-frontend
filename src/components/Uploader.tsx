import * as React from 'react';
import Dropzone from 'react-dropzone';

export interface IUploaderProps {
  uploadHandle: (file : File) => void;
  isUploading: boolean;
}

export interface IUploaderState {
  
}

export default class Uploader extends React.Component<IUploaderProps, IUploaderState> {
  constructor(props: IUploaderProps) {
    super(props);

    this.state = {
      
    }
  }

  render(): JSX.Element {
    const dropzone = < Dropzone onDrop = {
          (acceptedFiles) => {
            
            this.props.uploadHandle(acceptedFiles[0]);
          }
        } > 
        {
          ({getRootProps, getInputProps}) => (
            <section>
              <div {...getRootProps()} style = {{ cursor: 'pointer' }}>
                <input {...getInputProps()}/>
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )
        }
        </Dropzone>
        const uploading = <p>Uploading...</p>
        const shown = this.props.isUploading? 
                        uploading:
                        dropzone;
    return (
      <div>
        {shown}
        
      </div>
    );
  }
}
