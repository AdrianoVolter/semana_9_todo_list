import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="mb-5 p-4 bg-secondary-subtle bg-gradient rounded d- justify-content-center">
      <h1 className="text-danger"
      >Oops!</h1>
      <br /> <br />
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}