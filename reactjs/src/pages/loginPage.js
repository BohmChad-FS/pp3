import Spotify from "../images/spotifyLogo.png"

const loginPage = () => {
    
    return (
        <div>
            <div>
                <section>
                    <form style={headerStyle}>
                        <input type="text" placeholder="Search for a song or artist..." style={search} />
                        <button type="submit" style={button}><img src={Spotify} alt="spotify logo" style={logo} /></button>
                    </form>
                </section>
            </div>
            <div style={page}>
                <h1>You are not logged in.</h1>
                <h2>You must be logged in to access this site.</h2>
                <h3>Log in here: <a href="http://localhost:3001/spotify/v0/login" style={link}>Spotify Login</a></h3>
            </div>
        </div>
    )
}

export default loginPage;

const page = {
    backgroundColor: '#191414',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingTop: '15%'
}

const link = {
    color: '#1DB954'
}

const headerStyle = {
    backgroundColor: '#1DB954',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%'
}


const search = {
    width: '450px',
    height: '50px',
    fontSize: '2rem',
    borderRadius: '25px',
    paddingLeft: '10px'
}

const button = {
    backgroundColor: 'transparent',
    border: 'none'
}

const logo = {
    height: '80px',
}