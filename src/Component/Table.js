import React from "react";
import '../CSS/project.css';



var dataOfTable=[];


const Table = () => {
   
  const [limit,setLimit]=React.useState(10);
  const [number,setNumber]=React.useState(2);
  const [showBox,setShowBox]=React.useState(false);
  const [tableValue,setTableValue]=React.useState([]);
  const [displayData,setDisplayData]=React.useState("");
 

  const table=()=>{
    dataOfTable=[];
    for(var i=1;i<=limit;i++) dataOfTable.push(number*i);
    
    setTableValue(dataOfTable);
  }

  




  const limitOnChange=(ev)=>{
    setShowBox(false);
    setLimit(ev.target.value);

  }
  const numberOnChange=(ev)=>
  {
    setShowBox(false);
    setNumber(ev.target.value);
  }

  const onSubmitClickHandller=(ev)=>{
     var cId1=document.getElementById('checkBox1').checked;
     var cId2=document.getElementById('checkBox2').checked;
     var num3=null;num3=(document.getElementById('checkBox3').value)*number;
     var num1=Math.pow(number,2);
     var num2=Math.pow(number,3);
     //alert(num3);
    
     table();
     if(cId1==true)
     {
      let arr=dataOfTable.filter((value)=>value!=num1);
      dataOfTable=arr;
      setTableValue(arr);
    }
     if(cId2==true)
     {
      let arr=dataOfTable.filter((value)=>value!=num2);
      dataOfTable=arr;
      setTableValue(arr);
     }
     if(num3)
     {
      let arr=dataOfTable.filter((value)=>value!=num3);
      dataOfTable=arr;
      setTableValue(arr);
     }

     
    




     




    
    
    
    
    

     setShowBox(true);
   
     
     
    
     

   


    

  }

  const onDisableBtn=(ev)=>{ 
  document.getElementById('checkBox3').disabled=(ev.target.checked)?false:true;
  if(!ev.target.checked) document.getElementById('checkBox3').value="";
  }


  return (
    <>
      <div className="container">
        <div className="card">
        <label htmlFor="">Enter a Number : </label>
        <input type="text"  placeholder="Entter a Number " className="inpputField" value={number} onChange={numberOnChange} />

        <label htmlFor="">Enter a limits : </label>
        &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="Enter a limits" className="inpputField" value={limit} onChange={limitOnChange}  />
         
        <label htmlFor="">Filters : </label>
       
        <div className="grid-container">

        <input type="checkbox" id="checkBox1"  style={{width: 20, height: 20}}/>n^2

        <input type="checkbox" id="checkBox2"   style={{width: 20, height: 20}} />&nbsp;n^3&nbsp;&nbsp;
        <input type="checkbox" id="checkBox4"  onClick={onDisableBtn} style={{width: 20, height: 20}} />



        <input type="text" id="checkBox3"placeholder="Enter n*x" disabled style={{width: 80, height: 19}} />


      
        </div>

        <input type="button" value="Submit" onClick={onSubmitClickHandller} className="button-25" />

        </div>
       
       { showBox && <div className="card1">
       
       <div className="card2">
       <ul>
       {
        
        tableValue.map((value)=>{
       return(
        
        <li>{value}</li>


       )
        })


       }
      </ul>




       </div>

       </div>}


      </div>




    </>
  );
}

export default Table;