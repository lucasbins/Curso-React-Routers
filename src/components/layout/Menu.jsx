import React from 'react';
import './Menu.css'

import { Link } from 'react-router-dom';

const Menu = props => (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Param/123">Param #1</Link>
          </li>
          <li>
            <Link to="/Param/legal">Param #2</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/naoExiste">Nao Existe</Link>
          </li>
        </ul>
      </nav>
    </aside>
)

export default Menu;