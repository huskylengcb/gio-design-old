import React, { useState } from 'react';
import { Upload as AntdUpload } from 'antd';
import { UploadProps } from 'antd/lib/upload'
import classnames from 'classnames';
import 'antd/lib/upload/style/index.css';

export interface PropsType extends UploadProps {
  children: React.ReactNode
}

const Upload = (props: PropsType) => {
  return (
    <AntdUpload {...props}
      className={
        classnames(
          'gio-upload-old',
          props.className
        )
      }
    >
      {
        props.children
      }
    </AntdUpload>
  )
}

export default Upload;
