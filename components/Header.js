import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from '../routes'; // Link : moyen de naviguer dans l'app
export default () => {
return (
      // Lien qui retourne à la racine de l'application. 
      <Menu style={{ marginTop: '10px'}}>
        <Link route="/"> 
            <a className="item">
               CrowdCoin
            </a>
        </Link>
    

        <Menu.Menu position='right'>
          <Link route="/"> 
            <a className="item">
               Campaigns
            </a>
        </Link>

          
        <Link route="/campaigns/new"> 
            <a className="item">+ </a>
        </Link>
        </Menu.Menu>
      </Menu>
    )

}