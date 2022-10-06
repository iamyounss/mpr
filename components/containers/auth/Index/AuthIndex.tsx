import { Card }  from '../../../base/Card'

export default function AuthIndex(): JSX.Element{

    return (

            <div>
                <h2 className="text-2xl text-center my-4 font-medium">
                    Statut de votre activité :
                </h2>
                <div className="activity-status">
                    <Card
                        Title="Réservations du jour"
                        Content="Vous avez 1 réservation en attente de réponse"
                    />
                    <Card
                        Title="Actions totales"
                        Content="Vous n'avez pas de trajet aujourd'hui"
                    />
                </div>
            </div>

    )
}

