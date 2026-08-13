export function saveScore(

    score:number,

    prompt:string

){

    const leaderboard = JSON.parse(

        localStorage.getItem("arenaLeaderboard")

        ||"[]"

    );

    leaderboard.push({

        score,

        prompt,

        date:new Date().toLocaleString(),

    });

    leaderboard.sort(

        (a:any,b:any)=>

            b.score-a.score

    );

    localStorage.setItem(

        "arenaLeaderboard",

        JSON.stringify(

            leaderboard.slice(0,20)

        )

    );

}