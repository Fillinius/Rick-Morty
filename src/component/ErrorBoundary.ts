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
      return 'Что-то пошло не так'
    }
    return this.props.children
  }
}
export default ErrorBoundary
