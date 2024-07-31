const Form = () => {
    return (
        <div className="form">
            <div className="form-content">
                <input type="text" placeholder="Entrer le titre de votre film" />
                <label htmlFor="">Rechercher</label>
                <div className="btns">
                    <button>Top<span>&#8593;</span></button>
                    <button>Flop<span>&#8595;</span></button>
                </div>
            </div>
        </div>
    );
}

export default Form;