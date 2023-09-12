import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/download.jpeg'
import logo2 from '../images/RN.jpg'
import axios from 'axios'
function Login() {
    const [Username, setUsername] = useState()
    const [password, setpassword] = useState()
    const [logininfo, setlogininfo] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchdata() {
            const data = await axios.get('http://localhost:9000/login');
            setlogininfo(data.data)
        }
        fetchdata()
    }, [])
    console.log(logininfo, Username, password);

    const handlesubmit = () => {
        if (logininfo[0].uname == Username && logininfo[0].password == password) {
            navigate('/dashboard')
        } else {
            alert("wrong...")
        }
    }
    return (
        <div className='container'>
            <div className='child1'>
                <img src={logo2} style={{
                    position: 'absolute',
                    width:'-webkit-fill-available',
                    height: '100vh',
                }}></img>
            </div>
            <div className='child2'>
                <div>
                    <img src={logo} style={{
                        width: "100px",
                        position: "relative",
                        top: "-35px"
                    }}></img>
                </div>

                <form style={{ width: "14vw" }} onSubmit={(e) => handlesubmit(e.preventDefault())}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Username
                        </label>
                        <input
                            type='text'
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => setUsername(e.target.value)}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Login
