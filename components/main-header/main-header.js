import NavLink from "./nav-link";
import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
export default function MainHeader() { 
    return (
    <>
    <MainHeaderBackground/>
    <header className= {classes.header}>
        <Link className = {classes.logo} href = '/'>
            <Image src = {logoImg} alt = 'A plate with food' priority/>
            Next level food
        </Link>
        <nav className= {classes.navigation}>
            <ul>
                <li>
                  <NavLink href='/meals'>Browse Meals</NavLink>
                </li>
                <li>
                    <NavLink href = '/community'>Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
    );
}