import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import '../../styles/dashboard.css'
import axios from 'axios'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const getUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/login/sucess`, { withCredentials: true });
      console.log("response",response)
      setUser(response.data.user)
    } catch (error) {
      console.log("error : login with google",error)
    }
  }
  const loginwithgoogle = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/google/callback`,"_self");
	};

  useEffect(() => {
    getUser()
  }, [])

  return (
    <Layout>
      <div className="home-body">
        <div className="grid">


          <div className="main">
          {!user ? (
              <button className="google_btn" onClick={loginwithgoogle}>
                <img src="./images/google.png" alt="google icon" />
                <span>Sing in with Google</span>
              </button>
          ):(
            <div>
              <h1>Welcome {user.name}</h1>
              <p>Email : {user.email}</p>
            </div>
          )}
          </div>


          <section className="side">
              <h3>Our Cources</h3>
              <p>Our Cources are the best in the world. We have the best professors and the best students. We have the best labs and the best facilities</p>
          </section>


        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
