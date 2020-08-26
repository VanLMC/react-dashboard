import React from 'react';
import {Link} from 'react-router-dom';
import './sidebar.css';
import homeIcon from '../../assets/home-solid.svg';
import DolarIcon from '../../assets/money-bill.svg';
import PigIcon from '../../assets/pig.svg';
export default function sidebar() {
    return (
        <div className="sidebar">
            <nav className="nav">
                <Link to={"/home"}><img className="icon" src={homeIcon} alt=""/>Home</Link>
                <Link to={"/financeiro"}><img className="icon" src={DolarIcon} alt=""/>Financeiro</Link>
                <Link to={"/contabilidade"}><img className="icon" src={PigIcon} alt=""/>Contábil</Link>
            </nav>
        </div>
    )
}
