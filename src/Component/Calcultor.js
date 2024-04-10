import React from "react";
import { Button, Divider, Grid, Paper, TextField, withStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import shape from "@material-ui/core/styles/shape";
import RestoreIcon from '@material-ui/icons/Restore';


const lookAndFeel = () => {
  return ({
    mainContainer: {
      // flexGrow: 1,
      // border: "3px solid  gray",
      // marginRight: "1210px",
      margin: "0px",
      alignItems: 'center',
      borderRadius:30



    },
    button: {
      fontSize: "25px",
      backgroundColor: 'lightgray',
      margin: "2px",
      borderRadius:30
     
    },
    button1: {
      fontSize: "25px",
      backgroundColor: '#ccccff',
      margin: "2px",
      borderRadius:30,
      color:'#000099'
    },
    button2: {
      fontSize: "25px",
      backgroundColor: '#ccccff',
      margin: "2px",
      borderRadius:30
    }




  })
}




const Calculator = withStyles(lookAndFeel)(({ classes }) => {

  const [text, setText] = React.useState("0");
  const allClear = () => {
    setText("");
  }

  const buttonNumber = (ev) => {

    var operation = ev.target.textContent;
   
    

    
    if (operation != "=") {
      var str = text != 0 ? text + ev.target.textContent :  ev.target.textContent;
      setText(str);
    }
    if (operation == "AC") allClear();
    if (operation == "=") {
      setText(String(eval(text)));
    }



    //setText(String(ev.target.textConten)+text);

  }

   const justDoIt=(ev)=>{
    var data=text[text.length-1];
    data="(-"+data+")";
    setText(text.substring(0, text.length - 1)+data);

   }

  const cancleText = () => {
    

    setText(text.substring(0, text.length - 1));
  }

  const textInputData=(ev)=>{
   setText(ev.target.value); 
  }

  return (
    <div className={classes.mainContainer}>
      <center style={{ marginTop: "110px" }}>
        <h1>Calculator</h1>
        <div style={{
          // flexGrow: "1",
          border: "3px solid  black",
          width: "272px",

        }}>


          <TextField style={{ width: 273
           }} value={text}  variant="outlined" onChange={textInputData}></TextField>

        
          <Grid container spacing={0} direction="column" >


            <Grid item  >
              <Button  color="primary" onClick={buttonNumber} className={classes.button2} >AC</Button>
              <Button onClick={cancleText} className={classes.button2} ><HighlightOffIcon  color='primary' style={{ height: 45 }} /></Button>
              <Button  color="primary" onClick={buttonNumber} className={classes.button2} >%</Button>
              <Button onClick={buttonNumber} className={classes.button1} >/</Button>

            </Grid>

            <Grid item  >
              <Button onClick={buttonNumber} className={classes.button} >7</Button>
              <Button onClick={buttonNumber} className={classes.button} >8</Button>
              <Button onClick={buttonNumber} className={classes.button} >9</Button>
              <Button onClick={buttonNumber} className={classes.button1} >*</Button>

            </Grid>

            <Grid item >
              <Button onClick={buttonNumber} className={classes.button} >4</Button>
              <Button onClick={buttonNumber} className={classes.button} >5</Button>
              <Button onClick={buttonNumber} className={classes.button} >6</Button>
              <Button onClick={buttonNumber} className={classes.button1} >-</Button>

            </Grid>

            <Grid item >
              <Button onClick={buttonNumber} className={classes.button} >1</Button>
              <Button onClick={buttonNumber} className={classes.button} >2</Button>
              <Button onClick={buttonNumber} className={classes.button} >3</Button>
              <Button onClick={buttonNumber} className={classes.button1} >+</Button>
            </Grid>

            <Grid item >
              <Button onClick={buttonNumber} className={classes.button} >0</Button>
              <Button onClick={buttonNumber} className={classes.button} >.</Button>
              <Button onClick={justDoIt} className={classes.button} >+/-</Button>
              <Button onClick={buttonNumber} className={classes.button1} >=</Button>

            </Grid>

          </Grid>
        </div>


      </center>








    </div>
  )
});
export default Calculator;