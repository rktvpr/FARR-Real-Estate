import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
  
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  
  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      {items.map(item => (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.link}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
    
  );
};

export default Header;