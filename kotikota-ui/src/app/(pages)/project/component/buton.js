import "../component/buton.css"

const Buton = ({ className,phrase }) => {
    return (
        <>
        <button className={className}>{phrase}</button>
        </>
    );
  }
  
  export default Buton;


