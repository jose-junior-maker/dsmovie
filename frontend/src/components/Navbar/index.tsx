import GithubIcon from '../../assets/img/github.svg'
import './styles.css'

export default function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/jose-junior-maker">
                        <div className='dsmovie-contact-container'>
                            {/*<img src={githubIcon} alt="github" />*/}
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/jose-junior-maker</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}