import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import Particles from 'react-particles-js';

const SignIn = ({auth}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    if(email === 'nithyananda@kailaasa.org' && password === 'ranjitha') {
      auth(true)
    }
    else {
      alert('password eh correct ah podu da mutta payale');
    }
  }
  return (
    <>
      <div style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: '#222'}} >
        <Particles
          params={{
      	    "particles": {
      	        "number": {
      	            "value": 50
      	        },
      	        "size": {
      	            "value": 3
      	        }
      	    },
      	    "interactivity": {
      	        "events": {
      	            "onhover": {
      	                "enable": true,
      	                "mode": "repulse"
      	            }
      	        }
      	    }
          }} />
      </div>
      <div style={{zIndex: '100', color: "#FFF", position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}} >
        <div>
          <h1 className="appHeading" >Clavis</h1>
          <div className="signin-container" >
            <div>Please Sign In to Continue</div>
            <form autocomplete="nope" >
              <input onChange={evt => setEmail(evt.target.value)} class="signIn-input" type="text" name="Do Not Fill This shit with Auto Complete" placeholder="Email" autocomplete="chrome-off" />
              <input onChange={evt => setPassword(evt.target.value)} class="signIn-input" type="password" name="Do Not Fill This shit with Auto Complete" placeholder="Master Password" autocomplete="chrome-off" />
              <div>
                <Button variant="dark" onClick={onSubmit} >Confirm</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn;
