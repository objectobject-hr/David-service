import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    color: white;
    height: 30px;
    width: 30px;
`
const StyledQuantity = styled.div`
border: 1px solid #959595;
border-radius: 2px;
height: 48px;
width: 144px;
`
class OptionButtons extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div><label>Quantity </label>
                <StyledQuantity>

                    <StyledButton>
                        <svg>
                            <path d="M7,11H17v2H7Z" />
                        </svg>
                    </StyledButton>
                    <input />
                    <StyledButton>
                        <svg>
                            <path d="M13,11V7H11v4H7v2h4v4h2V13h4V11Z" />
                        </svg>
                    </StyledButton>
                </StyledQuantity>
            </div >
        )
    }
}

export default OptionButtons;