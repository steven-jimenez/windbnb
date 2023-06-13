import Logo from "./img/logo.png"





export default function Nav (){
    return(

        <div className="nav">

            <div className="logo">
                <img src={Logo} />
            </div>

            <div className="buscador">
                <div class="input-group">
                    <input className="input1" type="text" aria-label="First name" class="form-control" />
                    <input className="input2" type="text" aria-label="Last name" class="form-control" placeholder="Add guests" />
                    <button className="btn search"><i clasName="lupa" class="bi bi-search"></i></button>
                    </div>

            </div>



        </div>



    )
}