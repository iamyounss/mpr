import Link from "next/link";

export function ErrorPage(){
    return(
        <div className="bg-slate-100 h-screen flex flex-col items-center justify-center">

        <h1 className="text-center text-3xl font-bold">
            Oops, On dirait que tu es perdu !
        </h1>
        <p className="text-center text-slate-700">
            Il n'y a pas de page à cette adresse. Tu devrais retourner à
            la page d'accueil 😁
        </p>
        <span className="border-2 py-2 px-4 rounded-md text-white bg-cyan-600 hover:bg-cyan-700">
            <Link href="/">Accueil</Link>
        </span>

    </div>
    )
}
