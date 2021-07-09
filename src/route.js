import Main from "./main"
import Login from "./login"
import Registration from "./registration"
import Profile from "./Profile"


export  const info=[
    {
        exact:true,
        component:<Main />,
        path:"/main"
    },
    {
        component:<Login />,
        path:"/login"
    },
    {
        component:<Registration />,
        path:"/reg"
    },
    {
        component:<Profile />,
        path:"/profile"
    }

]