import SignIn from "../../components/SignIn";

export default function UnAuthIndex(): JSX.Element { 

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold font-mono">Welcome back.</h2>
                <SignIn />
            </div>
        </>
        
    )
         
}