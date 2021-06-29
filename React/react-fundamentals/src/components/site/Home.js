import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>Welcome to React Fundamentals at Eleven Fifty</h1>
                <p>
                    This app is intended to be a starter/tutorial app for your upcoming prohject!
                </p>
                <hr />
                <h1>Important Notes</h1>
                <ul>
                    <li>Being component based, you can move on to the next modules</li>
                    <li>This is like a sandbox, some of the styling has been left intentionally open.</li>
                    <li>This app scratches the surface of what is possible w/ react.</li>
                    <li>
                        <Link to='/resources'>React Resources</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
    };

    export default Home;