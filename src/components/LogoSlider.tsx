import { useState } from 'react';
import Logo from '../assets/logo.png';	
import LogoItem from './LogoItem';

function LogoSlider()
{
    const [focusLogo, setFocusLogo] = useState(0);

    const handleLeftClick = () =>
    {
        if (focusLogo > 0)
        {
            setFocusLogo(focusLogo - 1);
            return;
        }
        setFocusLogo(4);
    }

    const handleRightClick = () =>
    {
        if (focusLogo < 4)
        {
            setFocusLogo(focusLogo + 1);
            return;
        }
        setFocusLogo(0);
    }

    return (
        <div className="logo-slider">
            <button className='default-btn' onClick={handleLeftClick}>←</button>
            {
                [...Array(5)].map((item, index) =>
                {
                    return <LogoItem logoImage={Logo} status={focusLogo === index} key={index}/>
                })
            }
            <button className='default-btn' onClick={handleRightClick}>→</button>
        </div>)
}

export default LogoSlider;
