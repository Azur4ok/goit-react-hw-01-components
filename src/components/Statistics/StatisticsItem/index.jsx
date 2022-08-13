import React from 'react';
import PropTypes from 'prop-types';

import styles from './StatisticsItem.module.css';

const randomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const StatisticsItem = ({ statsItem }) => {
  return (
    <li className={styles.item} style={{ background: randomColor() }}>
      <span className={styles.label}>{statsItem.label}</span>
      <span className={styles.percentage}>{statsItem.percentage}</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  statsItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
