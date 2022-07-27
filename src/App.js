import Layout from "./components/Layout/Layout";
import axios from "axios";


function App() {
  return <Layout />;
}

export default App;



const options = {
  method: 'GET',
  url: 'https://cars17.p.rapidapi.com/generations/8FBB0EEA-3702-407F-8A28-CA99D9E076EE',
  headers: {
    'X-RapidAPI-Key': 'b15d9faccdmsh243170f892ee393p1bc715jsna6a5e130085f',
    'X-RapidAPI-Host': 'cars17.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});