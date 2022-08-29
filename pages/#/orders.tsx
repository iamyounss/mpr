export default function(){
    return(
        <form className="form">
            {/* current value from database */}
            <label>complete name</label>
            <input type="text" className="input" placeholder="complete name" />
            <label>email</label>
            <input type="email" className="input" placeholder="email" />
            <label>city</label>
            <input type="text" className="input" placeholder="city" />
            <label>region</label>
            <input type="text" className="input" placeholder="region" />
            <button type="submit" className="button">Update information</button>
        </form>
    )
}