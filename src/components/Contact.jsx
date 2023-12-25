import React,{useState} from 'react';
import { Container, Grid, Typography, TextField, Button, Link } from '@mui/material';
import cv from '../images/my-cv.pdf';

const Contact = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/query",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json();
      console.log(data);
      if(response.status === 200){
        alert("Message received");
      }
      else{
        alert("Couldn't send message, try again");
      }
    } catch (error) {
      console.log(error);
      alert("Error recording query");
    }
  }

  return (
    <Container id="contact me" sx={{ padding: '50px 1rem' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} style={{
          display:"flex",
          flexDirection:"column",
          
          alignItems:"center"
        }}>
          <Typography variant="h4" component="h2" sx={{ marginBottom: '20px'}}>
            <h4>Contact Me</h4>
          </Typography>
          <Typography component="p" sx={{ marginTop: '30px', display: 'flex', alignItems: 'center' }}>
            <i className="fas fa-paper-plane" sx={{ color: '#262626', marginRight: '15px', fontSize: '25px' }}></i>
            sparshv70@gmail.com
          </Typography>
          <Typography component="p" sx={{ display: 'flex', alignItems: 'center' }}>
            <i className="fas fa-phone-square-alt" sx={{ color: '#262626', marginRight: '15px', fontSize: '25px' }}></i>
            +91-7355172416
          </Typography>
          <div className="social-icons" sx={{ marginTop: '30px'}}>
            <Link href="https://leetcode.com/Sparshv70" target="_blank" sx={{ textDecoration: 'none', fontSize: '30px', marginRight: '15px', color: '#ababab', display: 'inline-block', transition: 'transform 0.45s', '&:hover': { transform: 'translateY(-5px)' } }}>
              
                {<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor" height="24" width="24"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" id="mainIconPathAttribute" fill="black"></path></svg>}
            </Link>


            <Link href="https://github.com/focush67" target="_blank" sx={{ textDecoration: 'none', fontSize: '30px', marginRight: '15px', color: '#ababab', display: 'inline-block', transition: 'transform 0.45s', '&:hover': { transform: 'translateY(-5px)' } }}>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>
            </Link>



            <Link href="https://www.linkedin.com/in/sparsh-verma-9250741b1/" target="_blank" sx={{ textDecoration: 'none', fontSize: '30px', marginRight: '15px',  display: 'inline-block', transition: 'transform 0.45s', '&:hover': { transform: 'translateY(-5px)' } }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </Link>
          </div>
          <Link
            href={cv}
            download
            className="btn btn2"
            id="DownloadButton"
            sx={{ display: 'inline-block', background: '#000080', marginTop: '20px', color:"white" , textDecoration:"none" }}
          >
            Download CV
          </Link>
        </Grid>

        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              name="Name"
              label="Your Name"
              variant="outlined"
              fullWidth
              required
              sx={{ marginBottom: '15px' }}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              name="email"
              label="Your Email"
              variant="outlined"
              fullWidth
              required
              sx={{ marginBottom: '15px' }}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              name="Message"
              label="Your Message"
              variant="outlined"
              multiline
              rows={8}
              fullWidth
              sx={{ marginBottom: '20px' }}
              onChange={(e) => handleChange(e)}
            />
            <div style={{
              display:"flex",
              justifyContent:"center"
            }}>
            <Button
            type="submit"
            variant="contained"
            className="btn btn2"
            id="SubmitButton"
            sx={{ padding: '14px 60px', fontSize: '18px'}}
          >
            Submit
          </Button>
            </div>
            
          </form>

          <Typography id="msg"></Typography>
        </Grid>
      </Grid>
      <div
        className="copyright"
        sx={{
          width: '100%',
          textAlign: 'center',
          padding: '25px 0',
          fontWeight: '300',
          marginTop: '20px',
        }}
      >
        <p></p>
      </div>
    </Container>
  );
};

export default Contact;
