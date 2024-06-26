import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img style={{height:"50px"}} src="https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Kerala_State_Road_Transport_Corporation_logo.png/200px-Kerala_State_Road_Transport_Corporation_logo.png" alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/search">Search</a>
                            <a class="nav-link active" aria-current="page" href="/add">Add</a>
                            <a class="nav-link active" aria-current="page" href="/delete">Delete</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar