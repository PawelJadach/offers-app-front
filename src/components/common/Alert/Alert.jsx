import React from 'react'
import { connect } from 'react-redux';
import styles from './Alert.module.scss';

const Alert = ({ alerts }) => {
  if(alerts !== null && alerts.length > 0) {
    let alertsList;

    alertsList = alerts.map(alert => {
      return (
        <div key={alert.id} className={`${styles.alert} ${styles.alert.alertType}}`}>
          {alert.text}
        </div>
      )
    });
    return alertsList;
  } else return null;
}

const mapStateToProps = state => ({
  alerts: state.alert
})

export default connect(mapStateToProps)(Alert);