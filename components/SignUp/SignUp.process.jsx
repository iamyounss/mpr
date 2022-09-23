export default function SignUpProcess({
    handleCreateData,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    email,
    setEmail,
    companyName,
    setCompanyName
}){

return (
    <div className="w-[50vw] flex flex-col mx-auto">
        <div>
            <h2>SignUp</h2>
            <p> Lets get started</p>
        </div>
        <form noValidate className="form">
            <input
                className="input"
                id="firstname"
                placeholder="firstname"
                value={firstname}
                onChange={e => setFirstname(e.target.value)}
                type="text"
            />
            <input
                className="input"
                id="lastname"
                placeholder="lastname"
                value={lastname}
                onChange={e => setLastname(e.target.value)}
                type="text"
            />
            <input
                className="input"
                id="email-confirm"
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
            />
            <input
                className="input"
                id="company-name"
                placeholder="companyName"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                type="text"
            />


            <button type="submit" className="button-submit" onClick={handleCreateData}>
                {`Save & continue`}
            </button>
        </form>
    </div>
)
}