interface Props{

    prompt:string;

}

export default function StatsCard({

    prompt,

}:Props){

    const words=prompt.trim().split(/\s+/).filter(Boolean);

    const chars=prompt.length;

    return(

        <div className="stats-card">

            <h3>Statistics</h3>

            <p>Words : {words.length}</p>

            <p>Characters : {chars}</p>

        </div>

    )

}