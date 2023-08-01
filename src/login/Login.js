import {Fragment, useState} from "react";
import "../css/Login.css"
import {Button} from "@mui/material";

function Login(){
    const [buttonChoice, setButtonChoice] = useState({first: true, second: false, third: false})
    const highlightedButton1 = buttonChoice.first === true? "container_login_left_item_1_clicked" : "container_login_left_item_1";
    const highlightedButton2 = buttonChoice.second === true? "container_login_left_item_2_clicked" : "container_login_left_item_2";
    const highlightedButton3 = buttonChoice.third === true? "container_login_left_item_3_clicked" : "container_login_left_item_3";

    function submitButtonChoice(e){
        e.preventDefault()
        if (e.target.classList.contains("container_login_left_item_1_clicked") || e.target.classList.contains("container_login_left_item_1")){
            setButtonChoice({first: true, second: false, third: false})
        } else if (e.target.classList.contains("container_login_left_item_2_clicked") || e.target.classList.contains("container_login_left_item_2")){
            setButtonChoice({first: false, second: true, third: false})
        } else if (e.target.classList.contains("container_login_left_item_3_clicked") || e.target.classList.contains("container_login_left_item_3")){
            setButtonChoice({first: false, second: false, third: true})
        }
    }

    function submitLogin(e){
        e.preventDefault()
    }

    return(

        <Fragment>
            <div className={"background_login"}>
                <div className={"container_login_grid"}>
                    <div className={"container_login_left"}>
                        <div onClick={submitButtonChoice} className={highlightedButton1}>Login</div>
                        <div onClick={submitButtonChoice} className={highlightedButton2}>Sing Up</div>
                        <div onClick={submitButtonChoice} className={highlightedButton3}>Reset</div>
                    </div>

                    {buttonChoice.first && <div className={"container_login_right"}>
                        <p className={"login_text"}>Login</p>
                        <form onSubmit={submitLogin} className={"form_login"}>
                        <input type={"text"} placeholder={"Username"} required={true} className={"input_login"} />
                        <br/>
                        <input type={"password"} placeholder={"Password"} required={true} className={"input_password"} />
                        <div className={"login_button"} ><Button type={"submit"} variant="contained">enter</Button></div>
                        </form>
                    </div> }

                    {buttonChoice.second && <div className={"container_login_right"}>
                        <p className={"login_text"}>Sign Up</p>
                        <form onSubmit={submitLogin} className={"form_login"}>
                            <input type={"text"} placeholder={"Username"} required={true} className={"input_login"} />
                            <br/>
                            <input type={"password"} placeholder={"Password"} required={true} className={"input_password"} />
                            <div className={"login_button"} ><Button type={"submit"} variant="contained">submit</Button></div>
                        </form>
                    </div> }


                    {buttonChoice.third && <div className={"container_login_right"}>
                        <p className={"login_text"}>Reset</p>
                        <p className={"support_text"}>Please contact the support team by the following email:</p>
                        <p className={"support_text"}>info-test@email.co.uk</p>
                    </div> }

                </div>
            </div>
        </Fragment>



    )

}

export default Login