const Form = () => {
    return ( 
        <div className="form">
           <div className="form-content">
           <input type="text" placeholder="Entrer le titre de votre film"/>
           <label htmlFor="">Rechercher</label>
           </div>
           <div className="btns">
            <button><span>+</span></button>
            <button><span>-</span></button>
           </div>
        </div>
     );
}
 
export default Form;