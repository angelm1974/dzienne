import React,{useState} from 'react';

function Formularz(props) {
    const [imie, setImie] = useState("");
    const [nazwisko, setNazwisko] = useState("");
    const [wiek, setWiek] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({ imie, nazwisko, wiek, email });
        setImie("");
        setNazwisko("");
        setWiek("");
        setEmail("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label htmlFor="imie">Imię</label>
                <input type="text" className="form-control" id="imie" value={imie} onChange={(e) => setImie(e.target.value)} />
            </div>
            <div class="form-group pt-2">
                <label htmlFor="nazwisko">Nazwisko</label> 
                <input type="text" className="form-control" id="nazwisko" value={nazwisko} onChange={(e) => setNazwisko(e.target.value)} />
            </div>
            <div class="form-group pt-2">
                <label htmlFor="wiek">Wiek</label>
                <input type="number" className="form-control" id="wiek" value={wiek} onChange={(e) => setWiek(e.target.value)} />
            </div>
            <div class="form-group pt-2">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit" class="btn btn-primary mt-3">Dodaj</button>
        </form>
    )
}

export default Formularz;