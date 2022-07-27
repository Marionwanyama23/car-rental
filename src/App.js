import Layout from "./components/Layout/Layout";


function App() {
  return <Layout />;
}

export default App;

if ('geolocation' in navigator){
    console.log ('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
    });
}else {
    console.log ('geolocation not available');
}

const sucessfulLookup = (position) =>{
    const {lattitude ,longitude}= position.coords;
    const self= this;
    fetch ('https://api.opencagedata.com/geocode/v1/json?q=${lattitude}+{longitude}&key=0e4d7d46374b4894a7d31af02107372d')
    .then (response => response.json())
    .then (console.log);
};

