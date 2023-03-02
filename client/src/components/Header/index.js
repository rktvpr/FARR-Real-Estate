import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import logo from '../../images/WhiteLogo.png'

const logout = (event) => {
    event.preventDefault();
    Auth.logout();
};

const items = [
    {
        label: 'Home',
        key: 'home',
        link: '/'
    },
    {
        label: 'Login',
        key: 'login',
        link: '/login'
    },
    {
        label: 'Sign Up',
        key: 'signup',
        link: '/signup'
    },
    {
        label: 'Contact a Realtor!',
        key: 'contactrealtor',
        link: '/contactrealtor'
    },
    {
        label: 'Sign out',
        key: 'signout',
        onClick: { logout }
    },
    {
        label: 'Profile',
        key: 'profile',
        link: '/profile'
    },
];

const Header = () => {
    const [current, setCurrent] = useState('home');
    const [searchQuery, setSearchQuery] = useState('');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const onSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = `/searchresult/${searchQuery}`;
    };

    return (
        <div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
            <img src={logo} alt="Logo" style={{
                  width: '50px',
                  height: '50px'
            }} />
                {items.map(item => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.link}>{item.label}</Link>
                    </Menu.Item>
                ))}
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        value={searchQuery || ''}
                        onChange={onSearchChange}
                        placeholder="Input a zip code! "
                        style={{
                            border: 'none',
                            outline: 'none',
                            width: '1250px',
                            marginLeft: 45
                        }} />
                    <button type="submit">Go</button>
                </form>
            </Menu>

        </div>
    );
};

export default Header;