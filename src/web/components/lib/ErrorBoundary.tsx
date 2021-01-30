import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean,
  error: null
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }
  // 子组件抛出异常，这里会接收到并且调用
  public getDerivedStateFromError() {
    return { hasError: true };
  }
  /**
   * componentDidCatch
   */
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    //嵌入SDK
    console.error('报告错误：', error, errorInfo);

  }
  public render() {
    if (this.state.hasError) {
      return <h1>不好意思，系统错误</h1>;
    }
    return this.props.children;
  }
}