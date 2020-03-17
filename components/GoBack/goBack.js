import { withRouter } from 'next/router';

const GoBack = ({ router  }) => {
  const handleGoBack = () => {
    router.back();
  }

  return <button className="go-back" onClick={handleGoBack} type="button">Go Back</button>;
};

export default withRouter(GoBack);
