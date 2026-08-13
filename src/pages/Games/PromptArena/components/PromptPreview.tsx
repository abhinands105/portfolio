interface Props{

    original:string;

    improved:string;

}

export default function PromptPreview({

    original,

    improved,

}:Props){

    return(

        <div className="prompt-preview">

            <h3>Your Prompt</h3>

            <p>{original}</p>

            <hr/>

            <h3>Improved Prompt</h3>

            <p>{improved}</p>

        </div>

    )

}