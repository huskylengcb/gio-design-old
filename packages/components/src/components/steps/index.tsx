import * as React from 'react';
import { Steps as AntdSteps } from 'antd';
import 'antd/lib/tag/style/index.css';

export const Step = AntdSteps.Step;

export interface PropsType {
  [key: string]: any
}

const Steps = (props: PropsType) => {
  return <AntdSteps {...props} />;
};

Steps.Step = Step;

export default Steps;
