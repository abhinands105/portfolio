export function calculateXP(score:number){

    if(score>=95) return 300;

    if(score>=85) return 200;

    if(score>=70) return 100;

    if(score>=50) return 50;

    return 10;

}