import Main from "../main"
import Home from "../Home"
import CustomPaper from '../components/reuzable-components/Card/BaseCard'
import { routeUrls } from "./routeUrls"

export const routes=[
    {
        exact:true,
        component:<Main />,
        path:routeUrls.Main
    },
    {
        exact:true,
        component:<Home />,
        path:routeUrls.Home
    },
    {
        component:<CustomPaper />,
        path:routeUrls.Posts
    }
]