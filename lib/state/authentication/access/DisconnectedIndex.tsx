import Login from "../../../../pages/login";

// will be the layout page with disconnected sections page 
export default function() { 
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold font-mono">Welcome back.</h2>
                <Login />
            </div>
        </>
    )}