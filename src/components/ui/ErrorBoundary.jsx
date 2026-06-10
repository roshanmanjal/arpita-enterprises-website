import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] bg-white px-4 py-28 text-center">
          <h2 className="text-xl font-bold text-slate-900">This section could not load.</h2>
          <p className="mt-2 text-sm text-slate-500">Refresh the page or try again shortly.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
