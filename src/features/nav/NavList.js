import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import "./Nav.css";

export const MainListItems = ({ open }) => {
  return (
    <div>
      {open && (
        <ListSubheader style={{ color: "white" }} className="listItem" inset>
          Metrix
        </ListSubheader>
      )}

      <ListItem className="listItem" button>
        <ListItemIcon style={{ paddingLeft: 7 }}>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </div>
  );
};

export const SecondaryListItems = ({ open }) => {
  return (
    <div>
      {open && (
        <ListSubheader style={{ color: "white" }} inset>
          Tracker
        </ListSubheader>
      )}

      <ListItem className="listItem" button>
        <ListItemIcon style={{ paddingLeft: 7 }}>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Loan Assignment" />
      </ListItem>
      <ListItem className="listItem" button>
        <ListItemIcon style={{ paddingLeft: 7 }}>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Workflow Setup" />
      </ListItem>
      <ListItem className="listItem" button>
        <ListItemIcon style={{ paddingLeft: 7 }}>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Reporting" />
      </ListItem>
      <ListItem className="listItem" button>
        <ListItemIcon style={{ paddingLeft: 7 }}>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
    </div>
  );
};
