"use client";
import React, { useState } from 'react';
import styles from './FilterSideBar.module.css';

const FilterSection = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.filterSection}>
      <div className={styles.sectionHeader} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </div>

      {isOpen && (
        <div className={styles.options}>
          {options.map((option, index) => (
            <label key={index} className={styles.checkboxLabel}>
              <input type="checkbox" />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default function FilterSidebar() {
  return (
    <div className={styles.sidebarWrapper}>
      <FilterSection title="CUSTOMIZABLE" options={['All']} />
      <FilterSection title="IDEAL FOR" options={['Men', 'Women', 'Baby & Kids']} />
      <FilterSection title="OCCASION" options={['All']} />
      <FilterSection title="WORK" options={['All']} />
      <FilterSection title="FABRIC" options={['All']} />
      <FilterSection title="SEGMENT" options={['All']} />
      <FilterSection title="SUITABLE FOR" options={['All']} />
      <FilterSection title="RAW MATERIALS" options={['All']} />
      <FilterSection title="PATTERN" options={['All']} />
    </div>
  );
}
