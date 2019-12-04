import React from 'react';

class OptionButtons extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div><label>Quantity </label><button>-</button>
                <input />
                <button>+</button>
            </div>
        )
    }
}

export default OptionButtons;