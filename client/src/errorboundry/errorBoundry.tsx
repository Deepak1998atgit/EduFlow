import { Component,ErrorInfo,ReactNode} from 'react';
import {ErrorBoundaryProps, ErrorBoundaryState} from '../types/errorBoundryTypes';


class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to the console
    console.error('Error caught:', error);
    console.error('Error info:', errorInfo);
    this.setState({ error, errorInfo });
  }

  render(): ReactNode {
    if (this.state.hasError) {                               
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>Error: {this.state.error && this.state.error.toString()}</p>
        </div>
      );
    }

    return this.props.children || null;                                         // Return null if no children are provided
  }
}

export default ErrorBoundary;


