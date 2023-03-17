import React, {useState} from 'react';
import {database} from '../firebase';
import {ref,push,child,update} from "firebase/database";
import './style.css'
function RegistrationForm() {
    
    const [Amazina, setAmazina] = useState(null);
    const [Telephone , setTelephone ] = useState(null);
    const [email, setEmail] = useState(null);
    const [Ahoaherereye,setAhoaherereye] = useState(null);
    const [Igitsina,setIgitsina] = useState(null);
    const [Igiheyavukiye,setIgiheyavukiye] = useState(null);
    const [NumeroIndangamuntu,setNumeroIndangamuntu] = useState(null);
    const [Amazinayikigo, setAmazinayikigo] = useState(null);
    const [Ahogikorera, setAhogikorera] = useState(null);
    const [Visionyikigo, setVisionyikigo] = useState(null);
    const [Missionyikigo, setMissionyikigo] = useState(null);
    const [Igihecyatangiriyegukora , setIgihecyatangiriyegukora] = useState(null);
    const [Amazinayusabamuzinaryikigo, setAmazinayusabamuzinaryikigo] = useState(null);
    const [Icyoashinzwemukigo, setIcyoashinzwemukigo] = useState(null);
    const [Telephonezusabiraikigo, setTelephonezusabiraikigo] = useState(null);
    const [Ahoherereye, setAhoherereye] = useState(null);
    const [NumeroyIndangamuntuyusabiraikigo, setNumeroyIndangamuntuyusabiraikigo] = useState(null);
    const [Emailyusabiraikigo, setEmailyusabiraikigo] = useState(null);
    const [Igitsinacye, setIgitsinacye] = useState(null);
    const [Igiheyavukiy, setIgiheyavukiy] = useState(null);
    const [Kuribose, setKuribose] = useState(null);
    const [Umwiharikowumushinga, setUmwiharikowumushinga] = useState(null);
    const [IcyatumyeyitabiraishimweryIndatwa, setIcyatumyeyitabiraishimweryIndatwa] = useState(null);
    const [IcyoyitezeUmusaruroyiteze, setIcyoyitezeUmusaruroyiteze] = useState(null);
    const [Icyoumushingaweumariyeabaturage, setIcyoumushingaweumariyeabaturage] = useState(null);
    const [Uruharerwurubyirukomumushingawe, setUruharerwurubyirukomumushingawe] = useState(null);
    const [Ukoawuhuzanatekinoloji, setUkoawuhuzanatekinoloji] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Amazina"){
            setAmazina(value);
        }
        if(id === "Telephone "){
            setTelephone (value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "Ahoaherereye"){
            setAhoaherereye(value);
        }
        if(id === "Igitsina"){
            setIgitsina(value);
        }
        if(id === "Igiheyavukiye"){
            setIgiheyavukiye(value);
        }
        if(id === "NumeroIndangamuntu"){
            setNumeroIndangamuntu(value);
        }
        if(id === "Amazinayikigo"){
            setAmazinayikigo(value);
        }
        if(id === "Ahogikorera"){
            setAhogikorera(value);
        }
        if(id === "Visionyikigo"){
            setVisionyikigo(value);
        }
        if(id === "Missionyikigo"){
            setMissionyikigo(value);
        }
        if(id === "Igihecyatangiriyegukora"){
            setIgihecyatangiriyegukora(value);
        }
        if(id === "Amazinayusabamuzinaryikigo"){
            setAmazinayusabamuzinaryikigo(value);
        }
        if(id === "Icyoashinzwemukigo"){
            setIcyoashinzwemukigo(value);
        }
        if(id === "Telephonezusabiraikigo"){
            setTelephonezusabiraikigo(value);
        }
        if(id === "Ahoherereye"){
            setAhoherereye(value);
        }
        if(id === "NumeroyIndangamuntuyusabiraikigo"){
            setNumeroyIndangamuntuyusabiraikigo(value);
        }
        if(id === "Emailyusabiraikigo"){
            setEmailyusabiraikigo(value);
        }
        if(id === "Igitsinacye"){
            setIgitsinacye(value);
        }
        if(id === "Igiheyavukiy"){
            setIgiheyavukiy(value);
        }
        if(id === "Kuribose"){
            setKuribose(value);
        }
        if(id === "Umwiharikowumushinga"){
            setUmwiharikowumushinga(value);
        }
        if(id === "IcyatumyeyitabiraishimweryIndatwa"){
            setIcyatumyeyitabiraishimweryIndatwa(value);
        }
        if(id === "IcyoyitezeUmusaruroyiteze"){
            setIcyoyitezeUmusaruroyiteze(value);
        }
        if(id === "Icyoumushingaweumariyeabaturage"){
            setIcyoumushingaweumariyeabaturage(value);
        }
        if(id === "Uruharerwurubyirukomumushingawe"){
            setUruharerwurubyirukomumushingawe(value);
        }
        if(id === "Ukoawuhuzanatekinoloji"){
            setUkoawuhuzanatekinoloji(value);
        }

    }

    const handleSubmit  = () => {
        console.log(Amazina,Telephone,email,Ahoaherereye,Igitsina,Igiheyavukiye,NumeroIndangamuntu,Amazinayikigo,Ahogikorera,Visionyikigo,Missionyikigo,Igihecyatangiriyegukora,Amazinayusabamuzinaryikigo,Icyoashinzwemukigo,Telephonezusabiraikigo,Ahoherereye,NumeroyIndangamuntuyusabiraikigo,Emailyusabiraikigo,Igitsinacye,Igiheyavukiy,Kuribose,Umwiharikowumushinga,IcyatumyeyitabiraishimweryIndatwa,IcyoyitezeUmusaruroyiteze,Icyoumushingaweumariyeabaturage,Uruharerwurubyirukomumushingawe,Ukoawuhuzanatekinoloji  );
        let obj = {
            Amazina : Amazina,
            Telephone :Telephone,
            email:email,
            Ahoaherereye:Ahoaherereye,
            Igitsina:Igitsina,
            Igiheyavukiye:Igiheyavukiye,
            NumeroIndangamuntu:NumeroIndangamuntu,
            Amazinayikigo: Amazinayikigo,
            Ahogikorera:Ahogikorera,
            Visionyikigo:Visionyikigo,
            Missionyikigo:Missionyikigo,
            Igihecyatangiriyegukora:Igihecyatangiriyegukora,
            Amazinayusabamuzinaryikigo:Amazinayusabamuzinaryikigo,
            Icyoashinzwemukigo:Icyoashinzwemukigo,
            Telephonezusabiraikigo:Telephonezusabiraikigo,
            Ahoherereye:Ahoherereye,
            NumeroyIndangamuntuyusabiraikigo:NumeroyIndangamuntuyusabiraikigo,
            Emailyusabiraikigo:Emailyusabiraikigo,
            Igitsinacye:Igitsinacye,
            Igiheyavukiy:Igiheyavukiy,
            Kuribose:Kuribose,
            Umwiharikowumushinga:Umwiharikowumushinga,
            IcyatumyeyitabiraishimweryIndatwa:IcyatumyeyitabiraishimweryIndatwa,
            IcyoyitezeUmusaruroyiteze:IcyoyitezeUmusaruroyiteze,
            Icyoumushingaweumariyeabaturage:Icyoumushingaweumariyeabaturage,
            Uruharerwurubyirukomumushingawe:Uruharerwurubyirukomumushingawe,
            Ukoawuhuzanatekinoloji:Ukoawuhuzanatekinoloji,
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);
    }

    return(
        
        <div className="form">
            <h4>INSTRUCTIONS FOR REQUESTION </h4>
            <h5>KUZUZA UMWIRONDORO</h5>
            <div className="form-body">
            <h8>a.Umwiro w’usaba kugiti cye cyangwa umunyamakuru , umurinzi gakondo ugizwe n’ibi bikurikira</h8>
                <div className="username">
                    <label className="form__label" for="Amazina">1.Amazina y’usaba </label>
                    <input className="form__input" type="text" value={Amazina} onChange = {(e) => handleInputChange(e)} id="Amazina" placeholder="Amazina"/>
                </div>
                <div className="Telephone">
                    <label className="form__label" for="Telephone">2.Telephone y’usaba</label>
                    <input  type="Telephone" name="" id="Telephone" value={Telephone}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Telephone"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">3.E-mail</label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="Ahoaherereye">
                    <label className="form__label" for="Ahoaherereye">4.Aho aherereye/ Akarere, Umurenge,Akagari</label>
                    <input className="form__input" type="text"  id="Ahoaherereye" value={Ahoaherereye} onChange = {(e) => handleInputChange(e)} placeholder="Aho aherereye"/>
                </div>
                    <div className="Igitsina">
                    <label className="form__label" for="Igitsina">5.Igitsina</label>
                    <input className="form__input" type="Igitsina" id="Igitsina" value={Igitsina} onChange = {(e) => handleInputChange(e)} placeholder="Igitsina"/>
                </div>
                <div className="Igiheyavukiye">
                    <label className="form__label" for="Igiheyavukiye">6.Igihe yavukiye</label>
                    <input className="form__input" type="Igiheyavukiye" id="Igiheyavukiye" value={Igiheyavukiye} onChange = {(e) => handleInputChange(e)} placeholder="Igihe yavukiye"/>
                </div>
                <div className="NumeroIndangamuntu">
                    <label className="form__label" for="NumeroIndangamuntu">7.Numero y'Indangamuntu</label>
                    <input className="form__input" type="NumeroIndangamuntu" id="NumeroIndangamuntu" value={NumeroIndangamuntu} onChange = {(e) => handleInputChange(e)} placeholder="Numero Indangamuntu"/>
                </div>
            </div>
            <div className="form-body">
            <h8>b.Umwirondo w’uwusaba nk’ikigo</h8>
            <div className="Amazinayikigo">
                    <label className="form__label" for="Amazinayikigo">1.Amazina y’ikigo</label>
                    <input className="form__input" type="text" value={Amazinayikigo} onChange = {(e) => handleInputChange(e)} id="Amazinayikigo" placeholder="Amazinayikigo"/>
                </div>
                <div className="Ahogikorera ">
                    <label className="form__label" for="Ahogikorera">2.Aho gikorera(Akarere, Umujyi / Umurenge , Akagari)</label>
                    <input className="form__input" type="text" value={Ahogikorera} onChange = {(e) => handleInputChange(e)} id="Ahogikorera" placeholder="Ahogikorera"/>
                </div>
                <div className="Visionyikigo">
                    <label className="form__label" for="Visionyikigo">3.Vision y’ikigo</label>
                    <input className="form__input" type="text" value={Visionyikigo} onChange = {(e) => handleInputChange(e)} id="Visionyikigo" placeholder="Vision yikigo"/>
                </div>
                <div className="Missionyikigo">
                    <label className="form__label" for="Missionyikigo">4.Mission y’ikigo</label>
                    <input className="form__input" type="text" value={Missionyikigo} onChange = {(e) => handleInputChange(e)} id="Missionyikigo" placeholder="Mission yikigo"/>
                </div>
                <div className="Igihecyatangiriyegukora">
                    <label className="form__label" for="Igihecyatangiriyegukora">5.Igihe cyatangiriye gukora </label>
                    <input className="form__input" type="text" value={Igihecyatangiriyegukora} onChange = {(e) => handleInputChange(e)} id="Igihecyatangiriyegukora" placeholder="Igihe cyatangiri yegukora"/>
                </div>
                <div className="Amazinayusabamuzinaryikigo">
                    <label className="form__label" for="Amazinayusabamuzinaryikigo">6.Amazina y’usaba muzina ry’ikigo</label>
                    <input className="form__input" type="text" value={Amazinayusabamuzinaryikigo} onChange = {(e) => handleInputChange(e)} id="Amazinayusabamuzinaryikigo" placeholder="AAmazina yusaba muzina ryikigo"/>
                </div>
                <div className="Icyoashinzwemukigo">
                    <label className="form__label" for="Icyoashinzwemukigo">7.Icyo ashinzwe mu kigo</label>
                    <input className="form__input" type="text" value={Icyoashinzwemukigo} onChange = {(e) => handleInputChange(e)} id="Icyoashinzwemukigo" placeholder="Icyo ashinzwe mukigo"/>
                </div>
                <div className="Telephonezusabiraikigo">
                    <label className="form__label" for="Telephonezusabiraikigo">8.Telephone z’usabira ikigo</label>
                    <input className="form__input" type="text" value={Telephonezusabiraikigo} onChange = {(e) => handleInputChange(e)} id="Telephonezusabiraikigo" placeholder="Telephone zusabira ikigo"/>
                </div>
                <div className="Ahoherereye">
                    <label className="form__label" for="Ahoherereye">9.Aho aherereye</label>
                    <input className="form__input" type="text" value={Ahoherereye} onChange = {(e) => handleInputChange(e)} id="Ahoherereye" placeholder="Ahoherereye"/>
                </div>
                <div className="NumeroyIndangamuntuyusabiraikigo">
                    <label className="form__label" for="NumeroyIndangamuntuyusabiraikigo">10.Numero y’ Indangamuntu y’usabira ikigo</label>
                    <input className="form__input" type="text" value={NumeroyIndangamuntuyusabiraikigo} onChange = {(e) => handleInputChange(e)} id="NumeroyIndangamuntuyusabiraikigo" placeholder="Numero yIndangamuntu yusabira ikigo"/>
                </div>
                <div className="Emailyusabiraikigo">
                    <label className="form__label" for="Emailyusabiraikigo">11.E-mail y’usabira ikigo</label>
                    <input className="form__input" type="text" value={Emailyusabiraikigo} onChange = {(e) => handleInputChange(e)} id="Emailyusabiraikigo" placeholder="Email yusabira ikigo"/>
                </div>
                <div className="Igitsinacye">
                    <label className="form__label" for="Igitsinacye">12.Igitsina cye </label>
                    <input className="form__input" type="text" value={Igitsinacye} onChange = {(e) => handleInputChange(e)} id="Igitsinacye" placeholder="Igitsina cye"/>
                </div>
                <div className="Igiheyavukiy">
                    <label className="form__label" for="Igiheyavukiy">13.Igihe yavukiye</label>
                    <input className="form__input" type="text" value={Igiheyavukiy} onChange = {(e) => handleInputChange(e)} id="Igiheyavukiy" placeholder="Igihe yavukiye"/>
                </div>

                </div>  

                <div className="form-body">
                <h5>INSHAMAKE K’UBYO UKORA </h5>
                    <div className="Kuribose">
                    <label className="form__label" for="Kuribose">1.Kuri bose (ku byiciro byose uko ari 5)</label>
                    <input className="form__input" type="text" value={Kuribose} onChange = {(e) => handleInputChange(e)} id="Kuribose" placeholder="Kuribose"/>
                </div>
                <div className="Umwiharikowumushinga">
                    <label className="form__label" for="Umwiharikowumushinga">2.Umwihariko w’umushinga</label>
                    <input className="form__input" type="text" value={Umwiharikowumushinga} onChange = {(e) => handleInputChange(e)} id="Umwiharikowumushinga" placeholder="Umwihariko wumushinga"/>
                </div>
                <div className="IcyatumyeyitabiraishimweryIndatwa">
                    <label className="form__label" for="IcyatumyeyitabiraishimweryIndatwa">3.Icyatumye yitabira ishimwe ry’Indatwa</label>
                    <input className="form__input" type="text" value={IcyatumyeyitabiraishimweryIndatwa} onChange = {(e) => handleInputChange(e)} id="IcyatumyeyitabiraishimweryIndatwa" placeholder="Icyatumye yitabira ishimwe ryIndatwa"/>
                </div>
                <div className="IcyoyitezeUmusaruroyiteze">
                    <label className="form__label" for="IcyoyitezeUmusaruroyiteze">4.Icyo yiteze/ Umusaruro yiteze</label>
                    <input className="form__input" type="text" value={IcyoyitezeUmusaruroyiteze} onChange = {(e) => handleInputChange(e)} id="IcyoyitezeUmusaruroyiteze" placeholder="Icyo yiteze/Umusaruro yiteze"/>
                </div>
                <div className="Icyoumushingaweumariyeabaturage">
                    <label className="form__label" for="Icyoumushingaweumariyeabaturage">5.Icyo umushingawe umariye abaturage</label>
                    <input className="form__input" type="text" value={Icyoumushingaweumariyeabaturage} onChange = {(e) => handleInputChange(e)} id="Icyoumushingaweumariyeabaturage" placeholder="Icyo umushinga we umariye abaturage"/>
                </div>
                <div className="Uruharerwurubyirukomumushingawe">
                    <label className="form__label" for="Uruharerwurubyirukomumushingawe">6.Uruhare rw’urubyiruko mu mushingawe </label>
                    <input className="form__input" type="text" value={Uruharerwurubyirukomumushingawe} onChange = {(e) => handleInputChange(e)} id="Uruharerwurubyirukomumushingawe" placeholder="Uruhare rwurubyiruko  mumushinga we"/>
                </div>
                <div className="Ukoawuhuzanatekinoloji">
                    <label className="form__label" for="Ukoawuhuzanatekinoloji">7.Uko awuhuza na tekinoloji</label>
                    <input className="form__input" type="text" value={Ukoawuhuzanatekinoloji} onChange = {(e) => handleInputChange(e)} id="Ukoawuhuzanatekinoloji" placeholder="Uko awuhuza na tekino loji"/>
                </div>

                </div>  
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm;