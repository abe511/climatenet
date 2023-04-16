import React, { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import menu from 'assets/images/menu.svg';

interface MenuProps {
  items: { label: string; to: string }[];
}

export interface MenuLink {
  name: string;
  href: string;
}

const Menu: React.FC<MenuProps> = ({ items }): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {isOpen && (
        <ul>
          {items.map((item, idx) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={idx}>
                <NavLink to={item.to} end>
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
      <button type="button" onClick={handleClick}>
        <img className="menu icon" src={menu} alt={menu} />
      </button>
    </nav>
  );
};

export default Menu;
