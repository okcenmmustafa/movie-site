import React from "react";
import Html from "components/Html";
import styles from "./TheErrorBoundary.module.css";
import TheErrorBoundaryData from "./TheErrorBoundary.data";
import Link from "next/link";


export default class TheErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { error, hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // TODO: send to an error tracker service
    console.trace("Critical exception", error);
    console.trace("Exception informations", errorInfo);

    this.props.dispatchAccount({ type: actionTypes.CLEAR_LOGGED_ACCOUNT });
  }

  render() {

    if (this.state.hasError) {
      return (
        <div className={styles.errorBoundary}>
          <div>
            <h3>
              <Html>{TheErrorBoundaryData.errorTitle}</Html>
            </h3>

            <div>
              <button
                className={`${styles.errorBoundaryButton} ${styles.errorBoundaryButtonPink}`}
                onClick={() => window.location.reload()}
              >
                {TheErrorBoundaryData.reloadThePageButton}
              </button>
            </div>

            <div>
              <Link href="/">
                <a
                  className={`${styles.errorBoundaryButton} ${styles.errorBoundaryButtonBlue}`}
                >
                  {TheErrorBoundaryData.goToHomepageButton}
                </a>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
