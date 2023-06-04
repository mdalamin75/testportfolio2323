import { WorkHistory } from "@mui/icons-material";
import { ContactPage } from "@mui/icons-material";
import { Reviews } from "@mui/icons-material";
import { Code } from "@mui/icons-material";
import { House, Article } from "@mui/icons-material";

const MenuItems = [
    {
        text: 'Home',
        icon: <House/>,
        path: '/'
    },
    {
        text: 'About',
        icon: <Article/>,
        path: '/about'
    },
    {
        text: 'Service',
        icon: <Code/>,
        path: '/service'
    },
    {
        text: 'Portfolio',
        icon: <WorkHistory/>,
        path: '/portfolio'
    },
    {
        text: 'Testimonial',
        icon: <Reviews/>,
        path: '/testimonial'
    },
    {
        text: 'Contact',
        icon: <ContactPage/>,
        path: '/contact'
    },
]

export default MenuItems;