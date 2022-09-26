import Spotify from "../images/spotifyLogo.png"

const header = () => {

    return (
        <div>
            <section>
                <form style={headerStyle}>
                    <input type="text" placeholder="Search for a song or artist..." style={search} />
                    <button type="submit" style={button}><img src={Spotify} alt="spotify logo" style={logo} /></button>
                </form>
            </section>
        </div>
    )
}

export default header;

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