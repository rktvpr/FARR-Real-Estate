import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/WhiteLogo.png'

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
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = `/searchresult?term=${searchQuery}`;
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
                <form onSubmit={handleSubmit} action={`/search/${searchQuery}`} method="get">
                    <input type="text"
                        value={searchQuery}
                        onChange={onSearchChange}
                        placeholder="Search..."
                        style={{
                            border: 'none',
                            outline: 'none',
                            width: '1300px',
                            marginLeft: 45
                        }} />
                    <button type="submit">Go</button>
                </form>
            </Menu>

        </div>
    );
};

export default Header;