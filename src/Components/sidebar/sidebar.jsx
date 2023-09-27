import React,{useState} from 'react'
import './sidebar.css'
import Logo from '../../images/logo.png'
import { SidebarData } from '../../Data/Data';
import { UilSignOutAlt } from '@iconscout/react-unicons';
export const Sidebar = () => {

    const[selected, setSelected]=useState(0)
    return (
        <div className="Sidebar">
            {/* logo */}
            <div className="logo">
                <img src={Logo} alt=""></img>
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
            {/*menu*/}
            <div className="menu">
                    {SidebarData.map((item, index) => {
                        return (
                            <div className={selected === index ? 'menuItem active' : 'menuItem'}
                                key={index}
                                onClick={() => setSelected(index)}
                            >
                                <item.icon /> 
                                <span>
                                    {item.heading}
                                </span>
                            </div>
                        )
                    })}
                    
                
                <div className="menuItem">
                    <UilSignOutAlt/>
                    </div>
            </div>
        </div>

    )
}
export default Sidebar
