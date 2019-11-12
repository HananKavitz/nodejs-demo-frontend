import * as React from 'react';
import Dropzone from 'react-dropzone';

export interface IUploaderProps {
  uploadHandle: (file : File) => void;
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
    return (
      <div>
        
        < Dropzone onDrop = {
          (acceptedFiles) => {
            
            this.props.uploadHandle(acceptedFiles[0]);
          }
        } > 
        {
          ({getRootProps, getInputProps}) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()}/>
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )
        }
        </Dropzone>
      </div>
    );
  }
}
