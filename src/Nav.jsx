import Logo from "./img/logo.png"
import React, {useState} from "react"
import Modal from 'react-modal'



export default function Nav (){


    const [data, setData] = useState([]);
     const getData = async () => {
         try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

 

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modal2IsOpen, setModal2IsOpen] = useState(false)
    const [location, setLocation] = useState("")
    const opciones=[]

    function insertOptions(parameter) {
        setLocation(parameter)

    }


   
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  
 }
  

 const [contador, setContador] = useState(0);

  const sumarContador = () => {
    setContador(contador + 1);
  };

  const restarContador = () => {
    setContador(contador - 1);
  
 }
    
 const sumarC = count + contador
 

    
    return(

        <div className="nav">

            <div className="logo">
                <img src={Logo} />
           </div>

           <div className="buscador">
               <div class="input-group">
                   <input className="input1" type="text" aria-label="First name" class="form-control" onClick={() => setModalIsOpen(true)}/>
                   <input className="input2" type="text" aria-label="Last name" class="form-control" onClick={() => setModal2IsOpen(true)} placeholder="Add guests" />
                   <i className="lupa" class="bi bi-search"/>
                </div>
            </div>    
        
        <Modal className="modal" isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)} >  
            {
                <>
                <div className="navModal">
                
                <div className="inputLocation">    
                <p><b>LOCATION</b></p>
                <input type="text" defaultValue={location} ></input>
                </div>
                <div className="inputGuest">
                    <p><b>GUESTS</b></p>
                    <input className="input2" type="text" aria-label="Last name" class="form-control" onClick={() => setModal2IsOpen(true)} placeholder="Add guests" />
                </div>
                <button className="searchBtn"><i className="lupa" class="bi bi-search"/> Search</button>                </div>

                
                <div className="opciones">
                    
                <ul>

                <li onClick={()=> insertOptions }><i class="bi bi-geo-alt-fill"></i></li>
                <li><i class="bi bi-geo-alt-fill"></i></li>
                <li><i class="bi bi-geo-alt-fill"></i></li>
                <li><i class="bi bi-geo-alt-fill"></i></li>


                </ul>
                    


                </div>
                   

                </>
            }
            
        </Modal>
        
        
        <Modal className='modal' isOpen={modal2IsOpen}
        onRequestClose={() => setModal2IsOpen(false)}>

            {
                <>
                <div className="navModal">
                
                    <div className="inputLocation">    
                        <p><b>LOCATION</b></p>
                        <input className="input1" type="text" aria-label="First name" class="form-control" onClick={() => setModalIsOpen(true)}/>
                    </div>
                    <div className="inputGuest">
                        <p><b>GUESTS</b></p>
                        <input className="input2" type="text" aria-label="Last name" class="form-control"  placeholder="Add guests" value={sumarC}/>
                    </div>

                    <button className="searchBtn"><i className="lupa" class="bi bi-search"/> Search</button>
                </div>

                <div className="opcionesGuests">
                    <div className="info">
                        <p><b>Adults</b></p>
                        <small>Ages 13 or above</small>
                        
                    </div>
                    <div className="contador">
                       
                        <button onClick={decrementCount}>-</button>
                        <span>{count}</span>
                        <button onClick={incrementCount}>+</button>
                    </div>
                    <div className="info2">
                        <p><b>Children</b></p>
                        <small>Ages 2-12</small>
                    </div>
                    <div className="contador">
                        <button onClick={restarContador}>-</button>
                        <span>{contador}</span>
                        <button onClick={sumarContador}>+</button>
                    </div>
                </div>

                </>
            }

        </Modal>

            </div>
            



    )
}