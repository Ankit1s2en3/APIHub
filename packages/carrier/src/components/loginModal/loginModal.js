import React, { useState, useMemo, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import network from "../../networkLayer/network";
import { useAuth } from "../../context/authContext";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function LoginModal(props) {
  const classes = useStyles();
  const {setUser} = useAuth();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [userId,setUserId] = useState('')
  const [password,setPassword] = useState('')
  const [status,setStatus] = useState('')
  const [values, setValues] = React.useState({
    password: '',
    userId:'',
    status:'',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Login</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl>
         <InputLabel htmlFor="user-input">User ID</InputLabel>
         <Input 
          id="user-input" 
          type="text"
          values = {values.userId}
          onChange={handleChange('userId')}
         />
        </FormControl>
        <FormControl >
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {values.status !== '' && <p>{values.status}</p>}
        <Button variant="contained" color="primary" onClick={async ()=>{
            const response = await network.login(values.userId, values.password);
            console.log(response)
            if(values.userId==="ankit12"&& values.password==="abcd1234"){
              console.log('correct password!')
              setValues({ ...values, 'status': '','password':'' });
              setUser(true)
              props.handleClose()
            }else{
              console.log('incorrect password!')
              setValues({ ...values, 'status': 'Incorrect Password' });

            }
          }}>
            Login
        </Button>
        </form>
    
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}