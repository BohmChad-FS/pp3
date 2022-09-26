import {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";

import Spotify from "../images/spotifyLogo.png"

const Home = () => {

    const [artists, setArtists]=useState([]);
    const [songs, setSongs]=useState([]);

    const lookUp = useRef("");

    const query = (e) => {
        e.preventDefault();
        fetch(`http//:localhost:3001/spotify/v0/query`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setArtists(data.artists.items)
            setSongs(data.tracks.items)
          })
          .catch(error=>console.error(error))
        }

        const navigate = useNavigate();
        const spotifyPath = "/spotify/v0"
        const valid = "/valid"

        useEffect(() => {
            fetch(`http://localhost:3001${spotifyPath}${valid}`)
            .then(data=>data.url==="http://localhost:3000/" ? navigate("/"):navigate("/login"))
            .catch(error=>console.log(error))
        })

    return (
        <div>
            <div>
                <section>
                    <form style={headerStyle}>
                        <input onChange={(e)=>query(e)} type="text" placeholder="Search for a song or artist..." style={search} />
                        <button type="submit" style={button}><img src={Spotify} alt="spotify logo" style={logo} /></button>
                    </form>
                </section>
            </div>
            <div style={page}>
                <h1 style={title}>Artists & Songs</h1>
                <h3 style={sub}>Start by searching</h3>
                <div style={base}>
                    <div style={tower}>
                        <ul>
                            {
                                artists.map(artist => {
                                    return(
                                        <li>
                                            <a href={artist.external_urls.spotify} ref={lookUp} width="150" height="150" >
                                                <h3 style={info}>{artist.name}</h3>
                                                <img src={artist.image.url} alt="Artist" width="150" height="150" />
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div style={tower}>
                        <ul>
                            {
                            songs.map(song => {
                                return(
                                    <li>
                                        <a href={song.external_urls.spotify} ref={lookUp} width="150" height="150" >
                                            <h3 style={info}>{song.name}</h3>
                                            <img src={song.image.url} alt="Artist" width="150" height="150" />
                                        </a>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

const page = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const title = {
    color: 'white',
    fontSize: '4rem'
}

const sub = {
    color: 'white',
    fontSize: '1rem'
}

const base = {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '2%',
    paddingRight: '2%'
}

const tower = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px'
}

const info = {
    color: 'white',
    fontSize: '1rem'
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