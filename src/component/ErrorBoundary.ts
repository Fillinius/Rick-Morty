import { Component, ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}
interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  constructor(props: ErrorBoundaryState) {
    super(props)
    this.state = {
      hasError: false,
    }
  }
  static getDerivedStateFromError(error) {
    console.log('geterror', error)
    return error
  }

  componentDidCatch(error: { message: any }, Errorinfo: ErrorInfo): void {
    console.log('errCatch', error.message)
    console.log('ErrInfoCatch', Errorinfo)
  }

  render() {
    if (this.state.hasError) {
      return <h3>'Что-то пошло не так'</h3>
    }
    return this.props.children
  }
}
export default ErrorBoundary
