import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={styles.transactionHistory}>
        <thead className={styles.tableTitle}>
          <tr>
            <th className={styles.tableHeading}>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map(item => (
              <tr key={item.id} className={styles.tableRow}>
                <td className={styles.tableItem}>{item.type}</td>
                <td className={styles.tableItem}>{item.amount}</td>
                <td className={styles.tableItem}>{item.currency}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
