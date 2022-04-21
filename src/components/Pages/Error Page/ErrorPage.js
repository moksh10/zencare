import "./errorpage.css";
import { ReactComponent as ErrorBackground } from "./../../../assets/images/errorPage.svg";
function ErrorPage() {
  return (
    <div className="not-found">
      <ErrorBackground className="not-found-bg" />
    </div>
  );
}
export default ErrorPage;
