import React from 'react';

import SideBar from '../../components/SideBar';
import './styles/Purchases.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'


const Purchases: React.FC = () => {
  return (
    <>
      <div className="frame"> 
        <div className="toggle-menu">
          <div className="tempura"> Tempura</div>
          <div><FontAwesomeIcon icon={faBars} className="toggle-icon"/></div>
        </div>
        <div className="row h-100">
          <div className="left-side col-md-2">
              <SideBar coreview="purchases"/>
          </div>
          <div className="right-side col-md-10">
            PURCHASES: All the other content should be placed here
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchases;
