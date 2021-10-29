
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Toggle from './Toggle';
const Header =() => {
    const [openToggle, setOpenToggle] = useState(false);
    const getToggle = () => {
        setOpenToggle(!openToggle);
    }
    return (
        <div className='header'>
            <div className='container pr h-100'>
                <div className='header__content'>
                <Toggle getOpen={getToggle} />
                <div className='header__logo'>
                    What happend
                </div>
                <div className={openToggle ? "header__nav header__nav--open" : "header__nav header__nav--close"}>
                    <ul>
                <li>
						<Link to='#'>Introduction</Link>
					</li>
					<li>
						<Link to='#'>Solution</Link>
					</li>
					<li>
						<Link to='#'>Rate plan</Link>
					</li>
					
					<li>
						<Link to='#'>Login</Link>
					</li>
					
					<li>
						<Link to='#'>Apply for free user</Link>
					</li>
                    </ul>
                </div>
            </div></div>
        </div>
    )
}

export default Header
