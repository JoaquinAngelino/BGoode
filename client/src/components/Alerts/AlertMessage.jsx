import React from 'react';
import Alert from 'react-bootstrap/Alert';
import {useDispatch} from 'react-redux'
import {showAlert} from "../../redux/actions";

function AlertMessage({displayAlert, alertVariant, alertTitle, alertText}) { //Source: https://react-bootstrap.github.io/components/alerts/

    const dispatch = useDispatch()
    function closeAlert() {
        dispatch(showAlert({
            displayAlert: false
        }))
    }

    if (displayAlert) {
        setTimeout(() => {
            closeAlert();
        }, 5000)
        return (
            <Alert variant={alertVariant}
                    onClose={() => closeAlert()}
                    dismissible>
                <Alert.Heading>{alertTitle}</Alert.Heading>
                <p>
                    {alertText}
                </p>
            </Alert>
        );
    }
}

export default AlertMessage;
