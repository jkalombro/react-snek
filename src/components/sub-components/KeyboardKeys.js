import React, { useContext } from 'react';
import GameContext from "../../helpers/GameContext";

import { KeyboardButton, ArrowTableWrapper } from '../../styled-components/Buttons.styled';
import { IoMdArrowDropup, IoMdArrowDropdown, IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

const KeyboardKeys = props => {
    const { screenmode } = useContext(GameContext);

    return (
        <ArrowTableWrapper screenmode={screenmode}>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <KeyboardButton 
                            screenmode={screenmode}
                            isClicked={props.keypressed===38}
                            onClick={() => props.setDirection({keyCode: 38})}>
                            <IoMdArrowDropup />
                        </KeyboardButton>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <KeyboardButton 
                            screenmode={screenmode}
                            isClicked={props.keypressed===37}
                            onClick={() => props.setDirection({keyCode: 37})}>
                            <IoMdArrowDropleft />
                        </KeyboardButton>
                    </td>
                    <td>
                        <KeyboardButton 
                            screenmode={screenmode}
                            isClicked={props.keypressed===40}
                            onClick={() => props.setDirection({keyCode: 40})}>
                            <IoMdArrowDropdown />
                        </KeyboardButton>
                    </td>
                    <td>
                        <KeyboardButton 
                            screenmode={screenmode}
                            isClicked={props.keypressed===39}
                            onClick={() => props.setDirection({keyCode: 39})}>
                            <IoMdArrowDropright />
                        </KeyboardButton>
                    </td>
                </tr>
            </tbody>
        </ArrowTableWrapper>
    )
};

export default KeyboardKeys;
