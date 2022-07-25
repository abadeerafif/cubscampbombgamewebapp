import './App.css';
import Clock from './components/clock';
import React , {useState,useEffect}from 'react';
import { useCookies  } from "react-cookie";

var one=false;
  var two=false;
  var three=false;
  var four=false;
  var right=false;
  var countdate=new Date("july 30,2022").getTime();
function App() {
  const [timeday,setday]=useState();
  const [timehour,sethour]=useState();
  const [timemin,setmin]=useState();
  const [timesecinds,setseconds]=useState();
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
 
  let interval;
  
  const handlecookies = () => {
    if(cookies["date"]!=null)
    {
      countdate=parseInt(cookies["date"]);
      console.log("data retre");

    }
    else
    {
      setCookie('date', new Date("july 30,2022").getTime(), { path: '/' });
      console.log("data intilized");

    }
    

    
    
 };
 function changecokie  (x)  {
  console.log("sssssss",x);
     
     
  countdate+=x;
  setCookie('date', countdate, { path: '/' });





};
 
 const setpass=(a)=>{
  if(right==true)
  {
    if(a==1)
    {
     
      console.log(countdate);
      
      changecokie(60*30000)
      console.log("increazed");

    }
    else if (a==2)
    {
      console.log(countdate);
      
      changecokie(60*60000)
      console.log("increazed");

    }
    else if(a==4)
    {
      console.log(countdate);
      
      changecokie(-(60*60000))
      console.log("increazed");
    }
    else if(a==3)
    {
      console.log(countdate);
      
      changecokie(-(60*30000))
      console.log("increazed");
    }
    else if(a=='x')
    {
      
        one=false;
        two=false;
        three=false;
        four=false;
        right=false;
        console.log("rest");
        
      
    }

  }
  else if(a==1)
  {
    one=true;
    console.log("right");

  }
  else if(a==2)
  {
    if(one==true && three==false&&four==false)
    {
      two=true;
      console.log("right");

    }
    else
    {
      one=false;
      two=false;
      three=false;
      four=false;
      right=false;
      console.log("wrong");


    }
  }
  else if(a==3)
  {
    if(one==true && two==true && four==false)
    {
      three=true;
      console.log("right");

    }
    else
    {
      one=false;
      two=false;
      three=false;
      four=false;
      right=false;
      console.log("wrong");


    }
  }
  else if(a==4)
  {
    if(one==true && two==true && three==true)
    {
      four=true;
      right=true;
      console.log("right done");

    }
    else
    {
      one=false;
      two=false;
      three=false;
      four=false;
      right=false;
      console.log("wrong");


    }
  }
  else if(a=='x')
  {
    
      one=false;
      two=false;
      three=false;
      four=false;
      right=false;
      console.log("rest");
      
    
  }
 }
  const starttimer=()=>{
   
    interval=setInterval(() => {
      const now=new Date().getTime();
      const distance=countdate-now;
      const days=Math.floor(distance/(24*60*60*1000));
      const Hours=Math.floor(distance%(24*60*60*1000)/(1000*60*60));
      const min=Math.floor(distance%(60*60*1000)/(1000*60));
      const second=Math.floor(distance%(60*1000)/(1000));
      if(distance<0)
      {
        //stop logic
      }
      else
      {
        setday(days);
        sethour(Hours);
        setmin(min);
        setseconds(second);



      }
      
    });
  }
  useEffect(()=>{
    starttimer();
    handlecookies()
    

  },[])
  return (
    <div className="App">
      <h1>الغلطه لحظه و الندم سنين</h1>
      <div className="passcontainer">
        <p>Warning Danger area <br/>Don't touch it may explode</p>
        
        
        <div className="pass" onClick={() => setpass(1)}>

        </div>
        <div className="pass" onClick={() => setpass(2)}>

        </div>
        <div className="pass" onClick={() => setpass("x")}>

        </div>
        <div className="pass" onClick={() => setpass(4)}>

        </div>
        <div className="pass" onClick={() => setpass(3)}>

        </div>

      </div>
      <Clock
      timeday={timeday}
      timehour={timehour}
      timemin={timemin}
      timesecinds={timesecinds}/>

    </div>

  );
}

export default App;
