import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function About() {
    return (
        <div className='aboutpg'>
            <h2 className=''>About Page</h2>
            <div className='side'>
                <Link className='sidebar text-decoration-none text-dark fw-bold d-block' to={"employer"}>Staff About</Link>
                <Link className='sidebar text-decoration-none text-dark fw-bold d-block' to={"corp"}>Corp About</Link>
                <Outlet />
            </div>
        </div>
    )
}

export default About;
