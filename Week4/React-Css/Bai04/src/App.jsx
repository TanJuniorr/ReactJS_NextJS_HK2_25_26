import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [data, setdata] = useState([]);

  const [dataFilter, setdataFilter] = useState([]);

  const [searchValue, setsearchValue] = useState('');

  var url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    async function fetchdata(){
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
      setdata(data);
      setdataFilter(data);
    }
    fetchdata();
  }, [])

  function handleSearch(e) {
    setsearchValue(e.target.value);

    var filter = data.filter((item) => {
      return item.title.includes(e.target.value);
    });
    setdataFilter(filter)

    // console.log(searchValue);
  }

  return (
    <>
    <input type="text" placeholder='Search' onChange={handleSearch} />
      {
        dataFilter.map((item) => {
          return <div key={item.id}>
            <h2>{item.title}</h2>
            <h2>{item.body}</h2>
          </div>
        })
      }
    </>
  )
}

export default App
