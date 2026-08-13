interface Props{
    grade:string;
    stars:number;
    score:number;
}

export default function GradeCard({
    grade,
    stars,
    score,
}:Props){

    return(

        <div className="grade-card">

            <h2>{score}/100</h2>

            <h1>{grade}</h1>

            <div>

                {Array.from({length:5}).map((_,i)=>

                    <span key={i}>

                        {i<stars?"⭐":"☆"}

                    </span>

                )}

            </div>

        </div>

    )

}