import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Mainpic from "./images/illustration-sign-up-desktop.svg";
import List from "./images/icon-list.svg";
import MobPic from "./images/illustration-sign-up-mobile.svg";
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';


function Signup() {

  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e) {
    setError(null)
    setEmail(e.target.value)
  }

  function handleSubmit() {
    if (email == '') {
      setError('Value cannot be empty')
      return;
    }
    if (!email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
      setError('Valid email required')
      return;
    }

    setSuccess(true)
  }

  function reset() {
    setEmail('')
    setSuccess(false)
    setError(null)
  }




  return (
    <>

      {success ? (
        <main className="done">
        
            <img className="pic" src={List} />
            <h1>Thanks for <br />
              subscribing!</h1>
            <p>A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscribtion</p>

            <Button onClick={reset}
              sx={{
                width: "350px",
                mt: "10px",
                padding: "12px",
                borderRadius: "5px",
                backgroundColor: "hsl(234, 29%, 20%)", '&:hover': { backgroundColor: "hsl(4, 100%, 67%)" }

              }}>
              Dismiss message
            </Button>
          
        </main>
      ) : (

        <main>
          <section className="card">
        <h1> Stay updated! </h1>
                <p>Join 60,000+ product managers recieving monthly <br /> updates on: <br /></p>
                <div role="list" ><img src={List} /> Product discovery and building what matters </div>
                <div role="list"><img src={List} /> Measuring to ensure updates are a success </div>
                <div role="list"><img src={List} /> And much more </div>



                <form onSubmit={handleSubmit}>
                  <FormLabel sx={{ pt: "2rem" }}>Email address</FormLabel>
                  <Input fullWidth label="fullWidth" id="fullWidth"
                    type="email"

                    placeholder="email@company.com"
                    onChange={handleChange}
                    value={email}
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      width: "350px"
                    }}
                  />
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    variant="solid"
                    sx={{
                      width: "350px",
                      mt: "10px",
                      padding: "12px",
                      borderRadius: "5px",
                      backgroundColor: "hsl(234, 29%, 20%)", '&:hover': { backgroundColor: "hsl(4, 100%, 67%)" }

                    }}
                  >
                    Subscribe to monthly newsletter
                  </Button>
                </form>

</section>

              
              <section className="picture">
              <source srcset={MobPic} alt="phone" media="(max-width: 950px)" />
                <img src={Mainpic} alt="picture" />
                </section>
        


   
        
        </main>
      )}
    </>
  )
}



export default Signup;