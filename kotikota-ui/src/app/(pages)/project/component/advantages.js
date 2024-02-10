const Advantages = ({ className1,src,className2, className3, phrase }) => {
    return (
        <>
        <div className={className1}>
              <img src={src} className={className2}></img>
              <label className={className3}>{phrase}</label>
          </div>
        </>
    );
  }
  
  export default Advantages;