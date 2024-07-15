/* eslint-disable no-unused-vars */
import { useState } from 'react'

import Header from './components/Header'
import Content from './components/Content'
import SearchBar from './components/SearchBar'
function App() {
  // eslint-disable-next-line no-unused-vars
  const [searchText, setSearchText] = useState('');
  const [users, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${searchText}`);
      const data = await res.json();
      console.log(data)
      if (data.status === "404") {
        alert("No User  found");
        return;
      }
      setUser(data);
      setSearchText("")
    } catch (error) {
      console.log(error);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser();
  }

  return (
    <>
      <Header setSearchText={setSearchText} searchText={searchText} fetchUser={fetchUser} users={users} handleSubmit={handleSubmit} />
      <div className='w-full flex justify-center  bg-[#f6f2f4]  items-center' style={{ height: "100vh" }}>
        {users ? <Content users={users} /> : <SearchBar setSearchText={setSearchText} searchText={searchText} fetchUser={fetchUser} handleSubmit={handleSubmit} />}
      </div>
    </>
  )
}

export default App
