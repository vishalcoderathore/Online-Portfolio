import React from 'react';

class SuccessPopup extends React.Component {
    render() {
        return (
            <div className="form__success">
                <h5>
                    Success
                </h5>
                <p>Your message has been delivered!</p>
            </div>
        )
    }
}

export default SuccessPopup;