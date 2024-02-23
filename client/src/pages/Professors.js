import React from 'react'
import Layout from '../components/Layout'
// import { Link } from 'react-router-dom'
import "../styles/professor.css"

const Professors = () => {
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

export default Professors
