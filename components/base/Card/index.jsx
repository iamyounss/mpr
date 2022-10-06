
/**
 * @param need a Title and Content
 */
export function Card({
    Title, 
    Content
}) {
    return (
        <div className="card-wrapper">
            <h3>{Title}</h3>
            <p>1</p>
            <hr />
            <p>{Content}</p>
        </div>
    )
}