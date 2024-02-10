import NumberComponent from "./number";

const Question = ({ className1,className2, number,phrase }) => {
    return (
        <>
        <NumberComponent className={className1} number={number} />
        <p className={className2}>
            {phrase}
        </p>
        </>
    );
  }
  
  export default Question;