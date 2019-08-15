import React from 'react';
import './AppLogo.css';

const AnimatedText = () => {
    return (
        <svg viewBox="0 0 500 156">
            <symbol id="s-text">
                <text textAnchor="middle" x="50%" y="50%">React-Snek</text>
            </symbol>

            <g className="g-ants">
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
            </g>
        </svg>
    )
}

const AppLogo = () => {
    return (
        <div className="logo-background">
            <div className="svg-wrapper"><AnimatedText /></div>
            <div className="logo-subtext">Classic Snake Online</div>
        </div>
    )
}

export default AppLogo;