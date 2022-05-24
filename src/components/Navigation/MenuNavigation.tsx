import { FC, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import CampaingIcon from '@mui/icons-material/Campaign';
import UserIcon from '@mui/icons-material/Person';
import FormIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import ImageIcon from '@mui/icons-material/Image';
import { Link } from 'react-router-dom';

const MenuNavigation:FC = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <Link to="/cms/">
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItemButton>
      </Link>
      <Link to="/cms/usuarios">
        <ListItemButton>
          <ListItemIcon>
            <UserIcon />
          </ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItemButton>
      </Link>
      <Link to="/cms/forms">
        <ListItemButton>
          <ListItemIcon>
            <FormIcon />
          </ListItemIcon>
          <ListItemText primary="Formularios" />
        </ListItemButton>
      </Link>
      <Link to="/cms/images">
        <ListItemButton>
          <ListItemIcon>
            <ImageIcon />
          </ListItemIcon>
          <ListItemText primary="Imagenes" />
        </ListItemButton>
      </Link>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CampaingIcon />
        </ListItemIcon>
        <ListItemText primary="Campañas" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/cms/campaing/rainbow">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Rainbow" />
            </ListItemButton>
          </Link>
          <Link to="/cms/campaing/acceso-total">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Acceso Total" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </List>
  );
}

export default MenuNavigation