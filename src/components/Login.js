import React from 'react'
import {
  Avatar,
  Button,
  Typography,
  makeStyles,
  Container
} from "@material-ui/core";
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase';
import googleLogo from '../download.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser,addUserData } from '../features/Slice';
const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    justifyContent: "center"
  },
  button: {
    textTransform: "none",
    marginTop: theme.spacing(10),
    display: "flex",
    alignItems: "center",
    boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    transition: "background-color 0.5s",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      transition: "background-color 0.5s",
      cursor: "pointer"
    }
  },
  avatar: {
    margin: `0 ${theme.spacing(0.5)}px`
  },
  text: {
    flexGrow: 1,
    textAlign: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));


function Login() {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const provider=new GoogleAuthProvider()
  const signInWithGoogle=async()=>{
    signInWithPopup(auth,provider).then((result)=>{
      console.log(result)
      dispatch(addUser())
      dispatch(addUserData(result.user))
      navigate('/')
    }).catch((err)=>{
        console.log(err)
    })
}
  const classes = useStyles();

  return (
    <div className='loginSection'>
    <Container component="section" className={classes.center}>
    <Button className={classes.button}  onClick={signInWithGoogle}>
      <Avatar src={googleLogo} className={classes.avatar} />
      <Typography component="p" variant="h6" className={classes.text}>
        Sign in with Google
      </Typography>
    </Button>
  </Container>
  </div>
  )
}

export default Login