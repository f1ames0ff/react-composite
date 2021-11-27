import {List, ListItem, ListItemButton, ListItemText} from "@mui/material"
import { Link } from "react-router-dom";
import { ContactModel } from "../../../../types/models/contact.model";
import {ContactsDbAdapter} from "../../../../adapters/contacts-db.adapter";

interface MenuItem {
    text: string;
    route: string;
    action?: () => void;
}

export const SideMenuComponent = function () {
    const search = (contact: ContactModel) => {
        ContactsDbAdapter.findContact(contact);
    }

    const items: MenuItem[] = [
        {
            text: 'Home',
            route: '/'
        },
        {
            text: 'Search',
            route: '/search',
            action: () => {
                // search()
            }
        }
    ];

    return <List className="side-menu">
        <ListItem disablePadding>
            {
                items.map(item =>
                    <ListItemButton onClick={item.action}>
                        <Link to={item.route}>
                            <ListItemText primary={item.text}/>
                        </Link>
                    </ListItemButton>
                )
            }
        </ListItem>
    </List>
}
