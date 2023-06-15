import React from 'react';

import styles from './index.module.css';

export default function Tabs(props: {
  tabs: {value: string, element: string}[],
  activeTab: string,
  onChange(value: string): void,

  tabsWrapperClassName?: string,
  tabClassName?: string
}) {

  // Render
  return (
    <div className={[styles.Tabs, props.tabsWrapperClassName].filter(Boolean).join(' ')}>
      {props.tabs.map((tab) => (
        <div
          key={tab.value}
          className={[
            styles.tab,
            ...(props.tabClassName ? [props.tabClassName] : []),
            ...(tab.value === props.activeTab ? ['_isActive'] : [])
          ].join(' ')}
          onClick={() => props.onChange(tab.value)}
        >
          {tab.element}
        </div>
      ))}
    </div>
  );
}
