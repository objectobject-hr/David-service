import React from 'react';
import styled from 'styled-components';

const StyledAssemblyBox = styled.div`
cursor: pointer;
padding: 0.5rem 0;
background-color: #fff;
text-align: left;
width: 100%;
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
:hover {
    background-color: #F8F8F8;
  }
`

const StyledImage = styled.img`
width: 2.2em; 
margin-right:0.25em; 
margin-left: 0.4em;
`

const StyledSvg = styled.svg`
margin-left: 0.2em;
margin-right: .5rem; 
focusable: false;
viewBox: 0 0 16 16;
width: 1rem;
    height: 1rem;
    vertical-align: middle;
`

const StyledWhitePath = styled.path`
fill-Rule:nonzero;
fill: #fff;
`

const StyledATag = styled.a`
font-size: 0.9em;
margin-top: .5rem;
background-color: transparent;
    color: #0058a3;
    position: relative;
    background: transparent;
    text-decoration: underline;
`

class AvailableOptions extends React.Component {
    constructor() {
        super()

        this.state = {
            checkDelivery: false
        }
    }

    render() {
        return (
            <div>
                <div >
                    <StyledAssemblyBox>
                        <div className="range-mini-stock__header">
                            <span className="range-mini-stock__icons">
                                <StyledImage src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA4MzYuMyA3NjAuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgODM2LjMgNzYwLjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNTRBRjM1O30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzA4LjIsMzIxLjRjLTU5LjQtOTguNi03NC45LTI0LjItMTMwLjctMTE3LjljLTM5LjItNjYuMS0xMjcuNy0xNTItMTgwLjMtMTE1LjZsLTEyLjUsOC45CgkJYy0xMC4zLTMuMi0yMC4yLTIuOS0yOC42LDMuNWMtNi4yLDUuMy05LjEsMTMuNS03LjcsMjEuNWMzLDEzLjYsOS42LDI4LjYsMzQuNyw1MS44Yy04MC0xNC41LTE2MS44LDE2LjMtMjEyLjMsODAuMQoJCWMtNTEuNiwwLTY2LjcsNTAuNC00MC4zLDgwLjJjLTM4LjEsMTQxLjQsNzAuNiwyNzcuNSwyMTIuNiwyNzcuNWM4MC40LDAsMTU0LjYtNDQsMTkzLjItMTE0LjVjNjYuMSwzLjcsNzItNDkuMywyMy40LTY1LjIKCQljNi4xLTMyLjItOS42LTEuNSw3My44LTkuNEM3MDIuNiw0MTguMiw3NDMuNywzNzkuMiw3MDguMiwzMjEuNEw3MDguMiwzMjEuNHoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02OTUsMzMwLjJjLTU0LjQtOTAuNC03My4yLTI1LjItMTMxLjMtMTE4LjRDNDk0LjYsOTguOSw0MTAsODMuMSw0MTAsMTAwLjdjMCwwLDk1LjUsNTEuMiwxNDEuMiwxMzkKCQljMSwxLjYtMS41LDMuMS0yLjUsMS41Yy0zOS40LTQ5LjgtMTYxLTE0NC4yLTE4MS45LTEyNy42Yy0xNy4yLDEzLjcsNzQuMywxMDAuNSwxNDguOCwxMzguNGM2LjQsMy4xLTQuNywyMC4yLTMyLjksMTkuMgoJCWMtMzkuNCwwLTc2LjktNTguMS0xNjItNTkuMmMtNTIuMy0wLjctMTAyLjMsMjEuOC0xMzYuNCw2MS41Yy0wLjYsMC41LTEuNSwwLjUtMi4yLDBjLTM2LjEtMTktNjcuNCwzMi0zMy43LDU0LjYKCQljMS4zLDAuOCwxLjksMi40LDEuNCwzLjhDOTYuNyw0OTguMiwyNzguMiw2MjguMSw0MTIuNCw1NDAuN2M2NS41LTM5LjUsNTcuMS05MC45LTMxLjgtNTYuMWMtMC4yLDAuMS0wLjQsMC4xLTAuNiwwLjEKCQljLTEuOCwwLTIuOS0yLjItMS42LTMuNmM2Mi41LTY0LjksMTUuNS0xNzMuMS03My43LTE3My4xYzAsMC0wLjEsMC0wLjEsMGMtNDEuNy0yLjUtODAuNSwyMi41LTk1LjUsNjEuNWMtMC4zLDEuMS0xLjMsMS45LTIuNCwxLjkKCQljLTEuNCwwLTIuNS0xLjEtMi41LTIuNWMwLTAuMiwwLTAuNCwwLjEtMC42YzEwLjYtNDguNyw1My04NC40LDEwMi43LTg2LjdjODguOC01LjMsMTQ4LjYsOTIuMiwxMDEuNSwxNjkuMQoJCWMtMiwyLjgsMS4zLDYuNCw0LjMsNC42YzE4LjctMTAuNCwzMy4xLTI3LjEsMzMuMS0yNy4xYzAuNCwwLDAuOSwwLjIsMS4xLDAuNWM1NS4zLDYwLjYsMTI2LjIsNjEuNSwxMjguMSwzOC4xCgkJYzIuMi0yNi43LTY2LjMtOS40LTcwLjYtNzUuOGMwLTEuMywxLjUtMiwyLjUtMS4yYzguOSw3LjMsMjIuMiwxLjgsMjMuNS05LjVjMC4yLTEuMSwxLjYtMS42LDIuNS0wLjkKCQljMjkuNSwyOC44LDU5LjUsMzAuOCwxMDAuNCwyNy43QzY5MS45LDQwMy43LDcxOS4xLDM3MS42LDY5NSwzMzAuMkw2OTUsMzMwLjJ6IE02NDEuOSwzMzAuMmMtNi42LTAuOS0xNC45LTYtMTYuOC0xMy44CgkJYy0wLjItMC45LTAuMy0xLjgtMC4zLTIuOGMwLTYuNSw1LjMtMTEuOCwxMS44LTExLjhjMC4yLDAsMC4zLDAsMC41LDBjOC4zLDAuMywxNS40LDYuNCwxNy4xLDE0LjZjMC4yLDAuOSwwLjIsMS45LDAuMywyLjgKCQlDNjU1LjMsMzI2LjEsNjQ4LjMsMzMxLjEsNjQxLjksMzMwLjJMNjQxLjksMzMwLjJ6Ii8+CjwvZz4KPC9zdmc+Cg==" />
                                <StyledSvg >
                                    <g fill="none" fill-rule="evenodd">
                                        <path fill="#0058A3" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                        <StyledWhitePath d="M9 12H7V7h2v5zM7 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0z">
                                        </StyledWhitePath>
                                    </g>
                                </StyledSvg>
                            </span>
                            <StyledATag>Assembly</StyledATag>
                        </div>
                    </StyledAssemblyBox>
                </div>
                {/* <div class="range-accordion range-accordion--collapsed">
                    <button class="range-accordion__header" aria-expanded="false" aria-controls="range-accordion-mini-delivery">
                        <span class="range-mini-delivery__header">
                            <span class="range-mini-delivery__icons">
                                <svg focusable="false" viewBox="0 0 24 24" class="range-svg-icon range-mini-delivery__icon range-mini-delivery__icon-delivery range-svg-icon--200" aria-hidden="true">
                                    <path d="M20,12,17,9H14V7H2V17H4a2,2,0,0,0,4,0h8a2,2,0,0,0,4,0h2V12.82ZM8,16H7.72A2,2,0,0,0,5,15.26a2,2,0,0,0-.74.74H3V8H13v8Zm13,0H19.72a2,2,0,0,0-2.7-.74,2,2,0,0,0-.74.74H14V10h2.59l2.7,2.71.15.14.18.08,1.38.56Z">
                                    </path>
                                </svg>
                                <span class="range-svg-icon range-svg-icon--100 range-stock-icon__online-available range-mini-delivery__icon">
                                </span>
                            </span>Available for delivery
                            </span>
                        <svg focusable="false" viewBox="0 0 24 24" class="range-svg-icon range-accordion__arrow range-svg-icon--150" aria-hidden="true">
                            <path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z">
                            </path>
                        </svg>
                    </button>
                    <div id="range-accordion-mini-delivery" class="range-accordion__content" aria-hidden="true">
                        <span>Add to cart for delivery details.</span></div></div>
                <div class="range-accordion ">
                    <div class="range-accordion__header">
                        <div class="range-mini-stock__header">
                            <span class="range-mini-stock__icons">
                                <svg focusable="false" viewBox="0 0 24 24" class="range-svg-icon range-mini-stock__icon range-mini-stock__icon-store range-svg-icon--200" aria-hidden="true">
                                    <path d="M2,6V19H21V6Zm9,12H7V13h4Zm5,0H12V13h4Zm1,0V12H6v6H3V7H20V18Z"></path>
                                </svg>
                                <svg focusable="false" viewBox="0 0 16 16" class="range-svg-icon range-mini-stock__icon range-mini-stock__icon-info range-svg-icon--100" aria-hidden="true">
                                    <g fill="none" fill-rule="evenodd"><path fill="#0058A3" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                        <path class="white" fill-rule="nonzero" d="M9 12H7V7h2v5zM7 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"></path>
                                    </g>
                                </svg>
                            </span>
                            <a class="range-mini-stock__link" href="#pip-product-availability">Check at your local store</a>
                        </div>
                    </div>
                </div> */}
            </div >
        )
    }
}

export default AvailableOptions;