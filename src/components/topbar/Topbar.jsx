import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
//import { NotificationsNone } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
              <span className="logo">shrutiadmin</span>
            </div>
            <div className="topRight">
              <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
              <Settings />
              </div>
              <img src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="topAvatar"/>
            </div>
        </div>
    </div>
  )
}
