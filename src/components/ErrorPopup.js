import React from 'react';

class ErrorPopup extends React.Component {
    render() {
        return (
            <div className="form__error">
                <h5>
                    Error
                </h5>
                <p>First Name, Last Name and Email are required fields</p>
            </div>
        )
    }
}

export default ErrorPopup;