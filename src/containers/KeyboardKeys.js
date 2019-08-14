import React from 'react';
import { ArrowButton, ArrowTableWrapper } from '../components/Buttons.component';

const KeyboardKeys = props => {

    const setDirection = keyCode => {
        props.setDirection(keyCode);
    }

    return (
        <ArrowTableWrapper>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <ArrowButton 
                            direction="up" 
                            setDirection={setDirection} />
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ArrowButton 
                            direction="left" 
                            setDirection={setDirection} />
                    </td>
                    <td>
                        <ArrowButton 
                            direction="down" 
                            setDirection={setDirection} />
                    </td>
                    <td>
                        <ArrowButton 
                            direction="right" 
                            setDirection={setDirection} />
                    </td>
                </tr>
            </tbody>
        </ArrowTableWrapper>
    )
}

export default KeyboardKeys;
