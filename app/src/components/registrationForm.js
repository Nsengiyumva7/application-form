import React, {useState} from 'react';
import './style.css'
function RegistrationForm({ backendData }) {
    
    const [amazina, setAmazina] = useState("");
    const [telephone , setTelephone ] = useState("");
    const [email, setEmail] = useState("");
    const [ahoaherereye,setAhoaherereye] = useState("");
    const [igitsina,setIgitsina] = useState("");
    const [igiheyavukiye,setIgiheyavukiye] = useState("");
    const [numeroIndangamuntu,setNumeroIndangamuntu] = useState("");
    const [amazinayikigo, setAmazinayikigo] = useState("");
    const [ahogikorera, setAhogikorera] = useState("");
    const [visionyikigo, setVisionyikigo] = useState("");
    const [missionyikigo, setMissionyikigo] = useState("");
    const [igihecyatangiriyegukora , setIgihecyatangiriyegukora] = useState("");
    const [amazinayusabamuzinaryikigo, setAmazinayusabamuzinaryikigo] = useState("");
    const [icyoashinzwemukigo, setIcyoashinzwemukigo] = useState("");
    const [telephonezusabiraikigo, setTelephonezusabiraikigo] = useState("");
    const [ahoahererey, setAhoahererey] = useState("");
    const [numeroyIndangamuntuyusabiraikigo, setNumeroyIndangamuntuyusabiraikigo] = useState("");
    const [emailyusabiraikigo, setEmailyusabiraikigo] = useState("");
    const [igitsinacye, setIgitsinacye] = useState("");
    const [igiheyavukiy, setIgiheyavukiy] = useState("");
    const [kuribose, setKuribose] = useState("");
    
    const [icyoyitezeUmusaruroyiteze, setIcyoyitezeUmusaruroyiteze] = useState("");
    const [icyoumushingaweumariyeabaturage, setIcyoumushingaweumariyeabaturage] = useState("");
    const [uruharerwurubyirukomumushingawe, setUruharerwurubyirukomumushingawe] = useState("");
    const [ukoawuhuzanatekinoloji, setUkoawuhuzanatekinoloji] = useState("");
    const [umwiharikowumushinga, setUmwiharikowumushinga] = useState("");
    const [icyatumyeyitabiraishimweryIndatwa, setIcyatumyeyitabiraishimweryIndatwa] = useState("");

    function handleAmazina (e) {
            setAmazina(e.target.value);
        }
        
        function handleTelephone (e) {
            setTelephone(e.target.value);
        }
       function handleEmail (e) {
            setEmail(e.target.value);
        }
        function handleAhoaherereye (e) {
            setAhoaherereye(e.target.value);
        }
        function handleIgitsina (e) {
            setIgitsina(e.target.value);
        }
        function handleIgiheyavukiye (e) {
            setIgiheyavukiye(e.target.value);
        }
        function handleNumeroIndangamuntu (e) {
            setNumeroIndangamuntu(e.target.value);
        }
        function handleAmazinayikigo (e) {
            setAmazinayikigo(e.target.value);
        }
        function handleAhogikorera (e) {
            setAhogikorera(e.target.value);
        }
        function handleVisionyikigo (e) {
            setVisionyikigo(e.target.value);
        }
        function handleMissionyikigo (e) {
            setMissionyikigo(e.target.value);
        }
        function handleIgihecyatangiriyegukora (e) {
            setIgihecyatangiriyegukora(e.target.value);
        }
        function handleAmazinayusabamuzinaryikigo (e) {
            setAmazinayusabamuzinaryikigo(e.target.value);
        }
        function handleIcyoashinzwemukigo (e) {
            setIcyoashinzwemukigo(e.target.value);
        }
        function handleTelephonezusabiraikigo (e) {
            setTelephonezusabiraikigo(e.target.value);
        }
        function handleAhoahererey (e) {
            setAhoahererey(e.target.value);
        }
       function handleNumeroIndangamuntuyusabiraikigo (e) {
            setNumeroyIndangamuntuyusabiraikigo(e.target.value);
        }
        function handleEmailyusabiraikigo (e) {
            setEmailyusabiraikigo(e.target.value);
        }
        function handleIgitsinacye (e) {
            setIgitsinacye(e.target.value);
        }
        function handleIgiheyavukiy (e) {
            setIgiheyavukiy(e.target.value);
        }
        function handleKuribose (e) {
            setKuribose(e.target.value);
        }
        
        function handleIcyoyitezeUmusaruroyiteze (e) {
            setIcyoyitezeUmusaruroyiteze(e.target.value);
        }
        function handleIcyoumushingaweumariyeabaturage (e) {
            setIcyoumushingaweumariyeabaturage(e.target.value);
        }
        function handleUruharerwurubyirukomumushingawe (e) {
            setUruharerwurubyirukomumushingawe(e.target.value);
        }
        function handleUkoawuhuzanatekinoloji (e) {
            setUkoawuhuzanatekinoloji(e.target.value);
        }
        function handleUmwiharikowumushinga (e) {
            setUmwiharikowumushinga(e.target.value);
        }
         function handleIcyatumyeyitabiraishimweryIndatwa (e) {
            setIcyatumyeyitabiraishimweryIndatwa(e.target.value);
        }

    

    function submitHandler(e) {
        e.preventDefault();
        postData();
            setAmazina('');
            setTelephone('');
            setEmail('');
            setAhoaherereye('');
            setIgitsina('');
            setIgiheyavukiye('');
            setNumeroIndangamuntu('');
            setAmazinayikigo('');
            setAhogikorera('');
            setVisionyikigo('');
            setMissionyikigo('');
            setIgihecyatangiriyegukora('');
            setAmazinayusabamuzinaryikigo('');
            setIcyoashinzwemukigo('');
            setTelephonezusabiraikigo('');
            setAhoahererey('');
            setNumeroyIndangamuntuyusabiraikigo('');
            setEmailyusabiraikigo('');
            setIgitsinacye('');
            setIgiheyavukiy('');
            setKuribose('');
            setIcyoyitezeUmusaruroyiteze('');
            setIcyoumushingaweumariyeabaturage('');
            setUruharerwurubyirukomumushingawe('');
            setUkoawuhuzanatekinoloji('');
             setUmwiharikowumushinga('');
             setIcyatumyeyitabiraishimweryIndatwa('');
        }       
    
    //postdata
  const postData = async () => {
    try {
      console.log(amazina,telephone,email,ahoaherereye,igitsina,igiheyavukiye,numeroIndangamuntu,
        amazinayikigo,ahogikorera,visionyikigo,missionyikigo,igihecyatangiriyegukora,amazinayusabamuzinaryikigo,
        icyoashinzwemukigo,telephonezusabiraikigo,ahoahererey,numeroyIndangamuntuyusabiraikigo,emailyusabiraikigo,
        igitsinacye,igiheyavukiy,kuribose,icyoyitezeUmusaruroyiteze,icyoumushingaweumariyeabaturage,uruharerwurubyirukomumushingawe,
        ukoawuhuzanatekinoloji,umwiharikowumushinga,icyatumyeyitabiraishimweryIndatwa)
      const response = await fetch("/", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          name: amazina,
          telephone: telephone,
          email: email,
          place:ahoaherereye,
          sex:igitsina,
          date_of_birth:igiheyavukiye,
          id_number:numeroIndangamuntu,
          name_of_company:amazinayikigo,
          place_of_company:ahogikorera,
          visino_of_company:visionyikigo,
          mission_of_company:missionyikigo,
          date_of_start_working:igihecyatangiriyegukora,
          name_request_company:amazinayusabamuzinaryikigo,
          title_person:icyoashinzwemukigo,
          telephone_person_company:telephonezusabiraikigo,
          place_of_person_company:ahoahererey,
          id_number_person_company:numeroyIndangamuntuyusabiraikigo,
          email_person_company:emailyusabiraikigo,
          sex_person_company:igitsinacye,
          date_of_birth_company_person:igiheyavukiy,
          forall:kuribose,
          havestings_project:icyoyitezeUmusaruroyiteze,
          role_of_project:icyoumushingaweumariyeabaturage,
          contribution_youth_project:uruharerwurubyirukomumushingawe,
          connection_teckinolog:ukoawuhuzanatekinoloji,
          uniqueness_project:umwiharikowumushinga,
          cause_presence:icyatumyeyitabiraishimweryIndatwa,

          }),
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };


    return(
        
        <>
      <form className="form" onSubmit={(e) => submitHandler(e)}>
            <h4>INSTRUCTIONS FOR REQUESTION </h4>
            <h5>KUZUZA UMWIRONDORO</h5>

             {/* {backendData.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <h3>{item.telephone}</h3>
                <h3>{item.email}</h3>
                <h3>{item.place}</h3>
                <h3>{item.sex}</h3>
                <h3>{item.date_of_birth}</h3>
                <h3>{item.id_number}</h3>
                <h3>{item.name_of_company}</h3>
                <h3>{item.place_of_company}</h3>
                <h3>{item.visino_of_company}</h3>
                <h3>{item.mission_of_company}</h3>
                <h3>{item.date_of_start_working}</h3>
                <h3>{item.name_request_company}</h3>
                <h3>{item.title_person}</h3>
                <h3>{item.telephone_person_company}</h3>
                <h3>{item.place_of_person_company}</h3>
                <h3>{item.id_number_person_company}</h3>
                <h3>{item.email_person_company}</h3>
                <h3>{item.sex_person_company}</h3>
                <h3>{item.date_of_birth_company_person}</h3>
                <h3>{item.forall}</h3>
                <h3>{item.havestings_project}</h3>
                <h3>{item.role_of_project}</h3>
                <h3>{item.contribution_youth_project}</h3>
                <h3>{item.connection_teckinolog}</h3>
                <h3>{item.uniqueness_project}</h3>
                <h3>{item.cause_presence}</h3>

              </div>
            );
          })} */}

            <div className="form-body">
            <h8>a.Umwiro w’usaba kugiti cye cyangwa umunyamakuru , umurinzi gakondo ugizwe n’ibi bikurikira</h8>
                 <div className="Name">
            <label className="form__label" htmlFor="Amazina">
              1.Amazina y’usaba{" "}
            </label>
            <input
              className="form__input"
              type="text"
              value={amazina}
              onChange={(e) => handleAmazina(e)}
              id="Amazina"
              placeholder="Amazina"
            />
          </div>
                <div className="Telephone">
                    <label className="form__label" htmlfor="Telephone">2.Telephone y’usaba</label>
                    <input  type="Telephone"  id="Telephone" value={telephone}  className="form__input" onChange = {(e) => handleTelephone(e)} placeholder="Telephone"/>
                </div>
                <div className="email">
                    <label className="form__label" htmlfor="email">3.E-mail</label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleEmail(e)} placeholder="Email"/>
                </div>
                <div className="Ahoaherereye">
                    <label className="form__label" htmlfor="Ahoaherereye">4.Aho aherereye/ Akarere, Umurenge,Akagari</label>
                    <input className="form__input" type="text"  id="Ahoaherereye" value={ahoaherereye} onChange = {(e) => handleAhoaherereye(e)} placeholder="Aho aherereye"/>
                </div>
                    <div className="Igitsina">
                    <label className="form__label" htmlfor="Igitsina">5.Igitsina</label>
                    <input className="form__input" type="Igitsina" id="Igitsina" value={igitsina} onChange = {(e) => handleIgitsina(e)} placeholder="Igitsina"/>
                </div>
                <div className="Igiheyavukiye">
                    <label className="form__label" htmlfor="Igiheyavukiye">6.Igihe yavukiye</label>
                    <input className="form__input" type="Igiheyavukiye" id="Igiheyavukiye" value={igiheyavukiye} onChange = {(e) => handleIgiheyavukiye(e)} placeholder="Igihe yavukiye"/>
                </div>
                <div className="NumeroIndangamuntu">
                    <label className="form__label" htmlfor="NumeroIndangamuntu">7.Numero y'Indangamuntu</label>
                    <input className="form__input" type="NumeroIndangamuntu" id="NumeroIndangamuntu" value={numeroIndangamuntu} onChange = {(e) => handleNumeroIndangamuntu(e)} placeholder="Numero Indangamuntu"/>
                </div>
            </div>
            <div className="form-body">
            <h8>b.Umwirondo w’uwusaba nk’ikigo</h8>
            <div className="Amazinayikigo">
                    <label className="form__label" htmlfor="Amazinayikigo">1.Amazina y’ikigo</label>
                    <input className="form__input" type="text" value={amazinayikigo} onChange = {(e) => handleAmazinayikigo(e)} id="Amazinayikigo" placeholder="Amazinayikigo"/>
                </div>
                <div className="Ahogikorera ">
                    <label className="form__label" htmlfor="Ahogikorera">2.Aho gikorera(Akarere, Umujyi / Umurenge , Akagari)</label>
                    <input className="form__input" type="text" value={ahogikorera} onChange = {(e) => handleAhogikorera(e)} id="Ahogikorera" placeholder="Ahogikorera"/>
                </div>
                <div className="Visionyikigo">
                    <label className="form__label" htmlfor="Visionyikigo">3.Vision y’ikigo</label>
                    <input className="form__input" type="text" value={visionyikigo} onChange = {(e) => handleVisionyikigo(e)} id="Visionyikigo" placeholder="Vision yikigo"/>
                </div>
                <div className="Missionyikigo">
                    <label className="form__label" htmlfor="Missionyikigo">4.Mission y’ikigo</label>
                    <input className="form__input" type="text" value={missionyikigo} onChange = {(e) => handleMissionyikigo(e)} id="Missionyikigo" placeholder="Mission yikigo"/>
                </div>
                <div className="Igihecyatangiriyegukora">
                    <label className="form__label" htmlfor="Igihecyatangiriyegukora">5.Igihe cyatangiriye gukora </label>
                    <input className="form__input" type="text" value={igihecyatangiriyegukora} onChange = {(e) => handleIgihecyatangiriyegukora(e)} id="Igihecyatangiriyegukora" placeholder="Igihe cyatangiri yegukora"/>
                </div>
                <div className="Amazinayusabamuzinaryikigo">
                    <label className="form__label" htmlfor="Amazinayusabamuzinaryikigo">6.Amazina y’usaba muzina ry’ikigo</label>
                    <input className="form__input" type="text" value={amazinayusabamuzinaryikigo} onChange = {(e) => handleAmazinayusabamuzinaryikigo(e)} id="Amazinayusabamuzinaryikigo" placeholder="AAmazina yusaba muzina ryikigo"/>
                </div>
                <div className="Icyoashinzwemukigo">
                    <label className="form__label" htmlfor="Icyoashinzwemukigo">7.Icyo ashinzwe mu kigo</label>
                    <input className="form__input" type="text" value={icyoashinzwemukigo} onChange = {(e) => handleIcyoashinzwemukigo(e)} id="Icyoashinzwemukigo" placeholder="Icyo ashinzwe mukigo"/>
                </div>
                <div className="Telephonezusabiraikigo">
                    <label className="form__label" htmlfor="Telephonezusabiraikigo">8.Telephone z’usabira ikigo</label>
                    <input className="form__input" type="text" value={telephonezusabiraikigo} onChange = {(e) => handleTelephonezusabiraikigo(e)} id="Telephonezusabiraikigo" placeholder="Telephone zusabira ikigo"/>
                </div>
                <div className="Ahoaherereye">
                    <label className="form__label" htmlfor="Ahoaherereye">9.Aho aherereye</label>
                    <input className="form__input" type="text" value={ahoahererey} onChange = {(e) => handleAhoahererey(e)} id="Ahoherereye" placeholder="Ahoherereye"/>
                </div>
                <div className="NumeroyIndangamuntuyusabiraikigo">
                    <label className="form__label" htmlfor="NumeroyIndangamuntuyusabiraikigo">10.Numero y’ Indangamuntu y’usabira ikigo</label>
                    <input className="form__input" type="text" value={numeroyIndangamuntuyusabiraikigo} onChange = {(e) => handleNumeroIndangamuntuyusabiraikigo(e)} id="NumeroyIndangamuntuyusabiraikigo" placeholder="Numero yIndangamuntu yusabira ikigo"/>
                </div>
                <div className="Emailyusabiraikigo">
                    <label className="form__label" htmlfor="Emailyusabiraikigo">11.E-mail y’usabira ikigo</label>
                    <input className="form__input" type="text" value={emailyusabiraikigo} onChange = {(e) => handleEmailyusabiraikigo(e)} id="Emailyusabiraikigo" placeholder="Email yusabira ikigo"/>
                </div>
                <div className="Igitsinacye">
                    <label className="form__label" htmlfor="Igitsinacye">12.Igitsina cye </label>
                    <input className="form__input" type="text" value={igitsinacye} onChange = {(e) => handleIgitsinacye(e)} id="Igitsinacye" placeholder="Igitsina cye"/>
                </div>
                <div className="Igiheyavukiy">
                    <label className="form__label" htmlfor="Igiheyavukiy">13.Igihe yavukiye</label>
                    <input className="form__input" type="text" value={igiheyavukiy} onChange = {(e) => handleIgiheyavukiy(e)} id="Igiheyavukiy" placeholder="Igihe yavukiye"/>
                </div>

                </div>  

                <div className="form-body">
                <h5>INSHAMAKE K’UBYO UKORA </h5>
                    <div className="Kuribose">
                    <label className="form__label" htmlfor="Kuribose">1.Kuri bose (ku byiciro byose uko ari 5)</label>
                    <input className="form__input" type="text" value={kuribose} onChange = {(e) => handleKuribose(e)} id="Kuribose" placeholder="Kuribose"/>
                </div>
                
                <div className="IcyoyitezeUmusaruroyiteze">
                    <label className="form__label" htmlfor="IcyoyitezeUmusaruroyiteze">2.Icyo yiteze/ Umusaruro yiteze</label>
                    <input className="form__input" type="text" value={icyoyitezeUmusaruroyiteze} onChange = {(e) => handleIcyoyitezeUmusaruroyiteze(e)} id="IcyoyitezeUmusaruroyiteze" placeholder="Icyo yiteze/Umusaruro yiteze"/>
                </div>
                <div className="Icyoumushingaweumariyeabaturage">
                    <label className="form__label" htmlfor="Icyoumushingaweumariyeabaturage">3.Icyo umushingawe umariye abaturage</label>
                    <input className="form__input" type="text" value={icyoumushingaweumariyeabaturage} onChange = {(e) => handleIcyoumushingaweumariyeabaturage(e)} id="Icyoumushingaweumariyeabaturage" placeholder="Icyo umushinga we umariye abaturage"/>
                </div>
                <div className="Uruharerwurubyirukomumushingawe">
                    <label className="form__label" htmlfor="Uruharerwurubyirukomumushingawe">4.Uruhare rw’urubyiruko mu mushingawe </label>
                    <input className="form__input" type="text" value={uruharerwurubyirukomumushingawe} onChange = {(e) => handleUruharerwurubyirukomumushingawe(e)} id="Uruharerwurubyirukomumushingawe" placeholder="Uruhare rwurubyiruko  mumushinga we"/>
                </div>
                <div className="Ukoawuhuzanatekinoloji">
                    <label className="form__label" htmlfor="Ukoawuhuzanatekinoloji">5.Uko awuhuza na tekinoloji</label>
                    <input className="form__input" type="text" value={ukoawuhuzanatekinoloji} onChange = {(e) => handleUkoawuhuzanatekinoloji(e)} id="Ukoawuhuzanatekinoloji" placeholder="Uko awuhuza na tekino loji"/>
                </div>
                <div className="Umwiharikowumushinga">
                    <label className="form__label" htmlfor="Umwiharikowumushinga">6.Umwihariko w’umushinga</label>
                    <input className="form__input" type="text" value={umwiharikowumushinga} onChange = {(e) => handleUmwiharikowumushinga(e)} id="Umwiharikowumushinga" placeholder="Umwihariko wumushinga"/>
                </div>
                <div className="IcyatumyeyitabiraishimweryIndatwa">
                    <label className="form__label" htmlfor="IcyatumyeyitabiraishimweryIndatwa">7.Icyatumye yitabira ishimwe ry’Indatwa</label>
                    <input className="form__input" type="text" value={icyatumyeyitabiraishimweryIndatwa} onChange = {(e) => handleIcyatumyeyitabiraishimweryIndatwa(e)} id="IcyatumyeyitabiraishimweryIndatwa" placeholder="Icyatumye yitabira ishimwe ryIndatwa"/>
                </div>

                </div>  
            <div className="footer">
          <button type="submit" className="btn">
            Register
          </button>
        </div>
            </form>
        </>
       
    )       

    }

export default RegistrationForm;