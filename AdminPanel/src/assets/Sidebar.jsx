import React from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill
} from 'react-icons/bs';
import {
  FaMapMarkedAlt,
  FaUserAlt,
  FaTable,
  FaBullhorn,
  FaInfoCircle,
  FaRocket
} from 'react-icons/fa';
import {
  MdSettings
} from 'react-icons/md';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='title'>DASHBOARD</div>
        <div className='sidebar-brand'>
          < FaRocket className='icon_header' />CREATIVE TIM
        </div>

      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon' /> DASHBOARD
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillArchiveFill className='icon' /> ICONS
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <FaMapMarkedAlt className='icon' /> MAP
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <FaBullhorn className='icon' /> NOTIFICATION
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <FaUserAlt className='icon' /> USER PROFILE
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <FaTable className='icon' /> TABLE LIST
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <MdSettings className='icon' /> TYPOGRAPHY
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <MdSettings className='icon' /> RTL SUPPORT
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <FaInfoCircle className='icon' /> UPGRADE TO PRO
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
