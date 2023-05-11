import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="mt-10 flex justify-center items-center flex-col-reverse">
            <img src="https://i.ibb.co/g6D6PdM/404.gif" alt="" />
            <Link to='/'><button className="btn btn-success">Back to Home</button>
</Link>
        </div>
    );
};

export default ErrorPage;