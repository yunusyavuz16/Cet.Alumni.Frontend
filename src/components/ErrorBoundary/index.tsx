import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: { message: "", stack: "" },
    info: { componentStack: "" },
  };

  static getDerivedStateFromError = (error: any) => {
    return { hasError: true };
  };

  componentDidCatch = (error: any, info: any) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError, error, info } = this.state;
    const { children } = this.props as any;

    return hasError ? <ErrorComponent /> : children;
  }
}

const ErrorComponent = () => {
  return (
    <div>
      {/* türkçe */}
      <h1 className="text-red-500 ">Bir hata oluştu!</h1>
      <p className="text-black">Lütfen daha sonra tekrar deneyin.</p>
      {/* english */}
    </div>
  );
};

export default ErrorBoundary;