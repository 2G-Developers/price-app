import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <>
            <section className="login" id="login">
                <div className="container">
                    <div className="row" style={{justifyContent: "center"}}>
                        <form className="login__form">
                            <input type="email" className="login__form-control" name="email" id="email" placeholder="email" />
                            <input type="password" placeholder="password" className="login__form-control" name="password" id="password"/>
                            <Link to="/" className="login__button">Login</Link>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginPage
