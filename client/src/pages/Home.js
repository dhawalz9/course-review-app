import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import '../styles/home.css'
import axios from 'axios'

const Home = () => {

    const [categories, setCategories] = useState([])

    const [user, setUser] = useState(null)
    const getUser = async () => {
        try {
        const response = await axios.get('/login/sucess', { withCredentials: true });
        console.log("response",response.data.user)
        setUser(response.data.user)
        } catch (error) {
        console.log("error : login with google",error)
        }
    }

    const getData = async () => {
        try {
            const response = await axios.get('/test')
            setCategories(response.data.categories)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
        getUser()
    }, [])

  return (
    <Layout>
        <div className='home-body'>


        <div className="grid">
            <div className="main">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore sint minus deleniti, cupiditate aspernatur incidunt. Earum, tempora cum dicta possimus repudiandae numquam, placeat rem qui provident blanditiis ratione sint officia iste ex rerum et, autem velit mollitia temporibus explicabo perferendis harum. Ex dolores rem reiciendis dicta quas repellendus asperiores exercitationem. Odit dolores sapiente quibusdam soluta, aspernatur ex nisi accusantium sed? Beatae asperiores dignissimos nostrum, autem natus sequi est reprehenderit quam magni sapiente amet architecto maxime quis veniam libero commodi quo, temporibus error porro culpa! Nesciunt iusto accusamus nemo! Fugiat ratione ad optio aliquam, eaque laboriosam. Voluptate architecto, quisquam eum hic ipsa aspernatur possimus sit? Odit, voluptatibus dicta. Explicabo iure labore suscipit deserunt similique corrupti et, dolore voluptas eum aut est eveniet enim praesentium sit laudantium perferendis adipisci veritatis fugit. Dolorem necessitatibus reiciendis exercitationem commodi nostrum sapiente illum tempore id, voluptatibus labore aperiam laboriosam quibusdam! Explicabo non maiores consequatur vero debitis provident error dolor animi aut amet. Ad soluta odio, consequuntur perspiciatis rerum velit est obcaecati nesciunt eaque id ex dolore eligendi quaerat sit ducimus. Voluptatem cupiditate ullam pariatur modi laborum at vel sunt unde excepturi dolor! Non adipisci ut exercitationem facere quae quia at, rerum, delectus qui numquam illo.
                </p>
                <p>
                    {categories[0]}
                </p>
                {user && (
                    <div>
                    <h1>Welcome {user.name}</h1>
                    <p>Email : {user.email}</p>
                    </div>

                )}
            </div>


            <section className="side">
                <h1 className='lead-heading'>LEADERBORAD</h1>
                <div id="leaderboard">
                    <table>
                        <tbody>
                            <tr>
                                <td className="number">1</td>
                                <td className="name">Lee Taeyong</td>
                                <td className="points">258</td>
                            </tr>
                            <tr>
                                <td className="number">2</td>
                                <td className="name">Mark Lee</td>
                                <td className="points">258</td>
                            </tr>
                            <tr>
                                <td className="number">3</td>
                                <td className="name">Xiao Dejun</td>
                                <td className="points">258</td>
                            </tr>
                            <tr>
                                <td className="number">4</td>
                                <td className="name">Qian Kun</td>
                                <td className="points">258.212</td>
                            </tr>
                            <tr>
                                <td className="number">5</td>
                                <td className="name">Johnny Suh</td>
                                <td className="points">258.208</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

        </div>

        </div>

    </Layout>
  )
}

export default Home
