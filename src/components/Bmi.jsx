import React, { useState } from 'react';
import './Bmi.css'


const Bmi = () => {
    const[info,setInfo] = useState({id:'',name:'',email:'',age:'',water:''});
    const[gender,setGender] = useState("");
    const [cal,setCal]=useState(0);
  
  
    const updateHandler = (e) =>{
      setInfo({...info,[e.target.name]:[e.target.value]})
    }

    let {id,name,email,age,water} = info;
  
    function chng(){
      setCal(parseFloat((Math.round((email/newHeight**2) * 100) / 100).toFixed(2)));
  }

  function rst(){
    setCal(0);
}

  function sbmt(event){
  event.preventDefault();
}
  
  const newHeight = parseFloat(name)/100;

  const renderText = () => {
    if (cal===0) {
      return <h2></h2>;
    } else if (cal <= 16 && cal > 0) {
        return (<> <h2 className='combo' style={{backgroundColor: "#2A58F4",color: "#fff"}}>Severe Thinness</h2> <span>Hi {id}- {name}cm|{email}kg|{age}years|{gender}|{water}ltr/day </span> </>);
    } else if (cal > 16 && cal <= 17) {
        return (<> <h2 className='combo' style={{backgroundColor: "#237FEE",color: "#fff"}}>Moderate Thinness</h2> <span>Hi {id}- {name}cm|{email}kg|{age}years|{gender}|{water}ltr/day </span> </>);
    } else if (cal > 17 && cal <= 18.5) {
        return (<> <h2 className='combo' style={{backgroundColor: "#36ACF9",color: "#fff"}}>Mild Thinness</h2> <span>Hi {id}- {name}cm|{email}kg|{age}years|{gender}|{water}ltr/day </span> </>);
    } else if (cal > 18.5 && cal <= 25) {
        return (<> <h2 className='combo' style={{backgroundColor: "#24BD5E",color: "#fff"}}>Normal</h2> <span>Hi {id}- {name}cm|{email}kg|{age}years|{gender}|{water}ltr/day </span> </>);
    } else if (cal > 25 && cal <= 30) {
        return (<> <h2 className='combo' style={{backgroundColor: "#D7B402",color: "#000"}}>Overweight</h2> <span>Hi {id}- {name}cm|{email}kg|{age}years|{gender}|{water}ltr/day </span> </>);
    } else if (cal > 30 && cal <= 35) {
        return (<> <h2 className='combo' style={{backgroundColor: "#D78302",color: "#fff"}}>Obese Class I</h2> <span>Hi {id}- {name}cm|{email}kg|{age}years|{gender}|{water}ltr/day </span> </>);
    } else if (cal > 35 && cal <= 40) {
        return (<> <h2 className='combo' style={{backgroundColor: "#D75D02",color: "#fff"}}>Obese Class II</h2> <span>Hi {id}- {name}cm|{email}kg|{age}years|{gender}|{water}ltr/day </span> </>);
    } else if (cal > 40) {
        return (<> <h2 className='combo' style={{backgroundColor: "#E81C00",color: "#fff"}}>Obese Class III</h2> <span>Hi {id}- {name}cm|{email}kg|{age}years|{gender}|{water}ltr/day </span> </>);
    }else {
        return <h2></h2>
    }
  }

    return ( 
        <>
        <div class="main-content">
<form class="form-basic" id='one' onSubmit={sbmt}>

    <div class="form-title-row">
        <h1>Calculate Your BMI</h1>
    </div>
    <div class="form-row">
        <label>
            <span>Name</span>
            <input type="text" name="id" onChange={updateHandler} placeholder='Input your name'/>
        </label>
    </div>

    <div class="form-row">
        <label>
            <span>Height</span>
            <input type="number" name="name" onChange={updateHandler} placeholder='Input height in cm'/>
        </label>
    </div>

    <div class="form-row">
        <label>
            <span>Weight</span>
            <input type="number" name="email" onChange={updateHandler} placeholder='Input height in kg'/>
        </label>
    </div>

    <div class="form-row">
        <label>
            <span>Age</span>
            <input type="number" name="age" onChange={updateHandler} placeholder='Input your age'/>
        </label>
    </div>

    <div class="form-row">
        <label>
            <span>Water Drink/Day</span>
            <input type="number" name="water" onChange={updateHandler} placeholder='Input in Ltr'/>
        </label>
    </div>

    <div class="form-row">
     <span>Gender</span>
        <div class="form-radio-buttons">
         <label for="male">
             <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Male</span>
             <input type="radio" name="gender"  onClick={() => setGender('male')} value='male' id='male'/>
         </label>
        </div>
        <div class="form-radio-buttons">
          <label>
             <span>Female</span>
             <input type="radio" name="gender"  onClick={() => setGender('female')} value='female' id='female'/>
         </label>
        </div>
    </div>

    <div class="form-row">
        <h2> BMI = {cal}&nbsp;kg/m<sup>2</sup></h2>
    </div> 
        {renderText()}
        <br /><br />

    <div class="billi">
        <button onClick={chng}>Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={rst} type='reset'>&nbsp;Reset&nbsp;&nbsp;</button>
    </div>

</form>

    <table border={1}  class="cinfoT" align="center">
	<tbody><tr><td align="center" class="cinfoHd">Classification</td><td align="center" class="cinfoHdL">BMI range - kg/m<sup>2</sup></td></tr>
	<tr><td align="center">Severe Thinness</td><td align="center">&lt; 16</td></tr>
	<tr><td align="center">Moderate Thinness</td><td align="center">16 - 17</td></tr>
	<tr><td align="center">Mild Thinness</td><td align="center">17 - 18.5</td></tr>
	<tr><td align="center">Normal</td><td align="center">18.5 - 25</td></tr>
	<tr><td align="center">Overweight</td><td align="center">25 - 30</td></tr>
	<tr><td align="center">Obese Class I</td><td align="center">30 - 35</td></tr>
	<tr><td align="center">Obese Class II</td><td align="center">35 - 40</td></tr>
	<tr><td align="center">Obese Class III</td><td align="center">&gt; 40</td></tr>
</tbody>
</table><br /><br /><br /><br />

</div>
        </>
     );
}

export default Bmi;