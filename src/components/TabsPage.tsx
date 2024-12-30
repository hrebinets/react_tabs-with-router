import React from 'react';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabId || null;
  const tabContent = tabs.find(tab => tab.id === selectedTab);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      {/* Tabs Navigation */}
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': selectedTab === tab.id })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="block" data-cy="TabContent">
        {tabContent ? tabContent.content : 'Please select a tab'}
      </div>
    </>
  );
};
