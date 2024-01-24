import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>
        {error.status}: {error.statusText}
      </h1>
    </div>
  );
};

export default ErrorPage;
