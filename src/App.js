import Layout from "./components/Layout/Layout";


function App() {
  return <Layout />;
}

export default App;

fetch('https://cars17.p.rapidapi.com/generations/8FBB0EEA-3702-407F-8A28-CA99D9E076EE')
	.then(response => response.json())
	.then(response => console.log(response))
