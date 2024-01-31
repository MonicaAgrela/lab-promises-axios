import axios from "axios";
import "./App.css";

function App() {
  axios.get("https://swapi.dev/api/people/4").then((result) => {
    console.log(result.data);
  });

  axios.get("https://restcountries.com/v3.1/name/france").then((france) => {
    console.log(france.data[0].name);
  })

  axios.get("https://restcountries.com/v3.1/all").then((result) => {
    console.log(result.data.slice(0,10));
  })
  .catch((error)=>{
    console.log(error)
  })


  async function getLabPromises(){
    try{
      const it1 = await axios.get("https://swapi.dev/api/people/4")
      const it2 = await axios.get("https://restcountries.com/v3.1/name/france")
      const it3 = await  axios.get("https://restcountries.com/v3.1/all")
      console.log(it1.data)
      console.log(it2.data[0].name)
      console.log(it3.data.slice(0,10))  
    }
    catch(error){
      console.log(error)
    }

  }

  getLabPromises()




  return <></>;
}

export default App;
