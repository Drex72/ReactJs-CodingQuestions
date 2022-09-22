import {useState, useEffect} from 'react'


const Fetch = () =>{
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const [userData, setUserData] = useState({});
  /**
   * @params {String} url- The Url that the function fetches from
   * @returns {Object} Json - The Json Object that contains the values
   */
  const fetchData = async () => {
      try{
        const response =await fetch(url)
        const resJson = await response.json()
        setUserData(resJson)
      }catch(error){
          setUserData(error)
      }
  }
  useEffect(() => {
      fetchData()
  }, [])

  return (
    <div className="App">
      <h2>User Data</h2>
      <p>
        <strong>Name: </strong>{" "}
        {userData.name || "(Need to populate name here)"}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || "(Need to populate website here)"}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || "(Need to populate email here)"}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || "(Need to populate phone here)"}
      </p>
    </div>
  );
}
export default Fetch
