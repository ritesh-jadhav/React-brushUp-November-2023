import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);



  return (
    <div>
      <h1>Oop's something went wrong</h1>
        <h3>{err.status} :: {err.message}</h3>
    </div>
  );
};



export default ErrorPage;
