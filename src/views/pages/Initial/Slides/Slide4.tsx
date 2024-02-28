import Code from "@/views/components/Code/Code";
import Slide from "@/views/components/Slide/Slide";
import Slide5 from "./Slide5";

const Slide4 = () => {
  return (
    <>
      <Slide animate>
        <h2>Now if we use react</h2>
      </Slide>
      <Slide animate id={"slide-5"}>
        <h2>But we start with JS this time</h2>
      </Slide>
      <Slide animate id={"slide-5"}>
        <h2>But we start with JS this time</h2>
        <Code id={"code"}>
          {`
        function React(){}
 `}
        </Code>
      </Slide>
      <Slide animate id={"slide-5"}>
        <h2>Let's Add the Html now</h2>
        <Code id={"code"}>
          {`
  function React(){

   return <>       
    <h1>Hlib</h1>
    <img src="./hlib.jpeg" alt="hlib" />
    <span></span>
    <button class="btn1">Tchri</button>
    <button class="btn2">Lala</button>
  </>  
 } 
 `}
        </Code>
      </Slide>
      <Slide animate id={"slide-5"}>
        <h2>Then we add the login</h2>
        <Code id={"code"}>
          {`
  function React(){
    const [hlib,setHlib] = useState(0)
    function chriHalibHandler(){
        setHlib(hlib++)
    }
    function nhaHalibHandler(){
        setHlib(hlib--)
    }
   return <>       
    <h1>Hlib</h1>
    <img src="./hlib.jpeg" alt="hlib" />
    <span></span>
    <button class="btn1">Tchri</button>
    <button class="btn2">Lala</button>
  </>  
 } 
 `}
        </Code>
      </Slide>
      <Slide animate id={"slide-5"}>
        <h2>we add it to the html</h2>
        <Code id={"code"}>
          {`
  function React(){
    const [hlib,setHlib] = useState(0)
    function chriHalibHandler(){
        setHlib(hlib++)
    }
    function nhaHalibHandler(){
        setHlib(hlib--)
    }
   return <>       
    <h1>Hlib</h1>
    <img src="./hlib.jpeg" alt="hlib" />
    <span>
     {hlib}    
    </span>
    <button class="btn1" onClick={chriHalibHandler}>Tchri</button>
    <button class="btn2"onClick={nhaHalibHandler}>Lala</button>
  </>  
 } 
 `}
        </Code>
      </Slide>
      <Slide>
        <Slide5 />
      </Slide>
    </>
  );
};

export default Slide4;
