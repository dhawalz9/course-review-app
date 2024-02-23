import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import '../styles/courses.css'
import axios from 'axios'
import anonymous from '../images/anonymous.png'
// import { Link } from 'react-router-dom'

const Cources = () => {

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
  useEffect(() => {
    getUser()
  }, [])

  return (
    <Layout>
      <div className="home-body">
          <div className="grid">
              <div className="main">


                <div className="input-box">
                    <input type="text" placeholder="enter course"/>
                    <button className="button">Search</button>
                </div>



                <div className="course-card">
                    <div className="card-grid">
                        <div className="card-main">
                            <h2>AB1234</h2>
                            <h3>Course Name</h3>

                            <button className="card-button">Button</button>
                        </div>
                        <div className="card-side">
                            <p>R1</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa aliquid quas quaeratColumn 2 content goes here</p>
                            <p>R1</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa aliquid quas quaeratColumn 2 content goes here</p>
                        </div>
                    </div>
                </div>

                  {user && (
                      <div>
                      <h1>Welcome {user.name}</h1>
                      <p>Email : {user.email}</p>
                    </div>
                  )}


              </div>

              <section className="side">

                  <h1>Write review</h1>
                  <form action="" className='form-box'>

                    <select name="oddEven" className='form-course-dropdown'>
                        <option value="" disabled>course code</option>
                        <option value="odd">AB2345</option>
                        <option value="even">AB1234</option>
                    </select>
                    
                    <input type="text" name="code" placeholder='course name' className='form-input' required />
                    <input type="text" name="instructor" placeholder=' instructor name' className='form-input' required />

                    <div className='sem-year'>
                      <button type='button' className='anonym-button'>
                        <img src={anonymous} className='anonym-image' alt='-' />
                        <p></p> 
                      </button>
                      <select name="oddEven" className='form-sem-dropdown' defaultValue="semester">
                          <option value="" disabled>Semester</option>
                          <option value="odd">Odd</option>
                          <option value="even">Even</option>
                      </select>
                      <select name="oddEven" className='form-sem-dropdown' defaultValue="semester">
                          <option value="" disabled>year</option>
                          <option value="odd">2022</option>
                          <option value="even">2023</option>
                          <option value="even">2024</option>
                          <option value="even">2020</option>
                          <option value="even">2021</option>
                      </select>
                      
                    </div>
                    <textarea name="review" placeholder='Write a review...' className='form-textarea' required></textarea>

                    <button type="submit" className='review-button'>Submit</button>


           
                  </form>

              </section>
          </div>
      </div>
    </Layout>
  )
}

export default Cources
