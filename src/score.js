export default function Score(props){
    const {date, score} = props;
    return(
        <>  <h3>
            {score}
            </h3>
            <h3>
             {date}   
            </h3>

        </>
    )
}