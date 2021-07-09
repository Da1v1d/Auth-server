import Main from "./main"
import Login from "./login"
import Registration from "./registration"
import Profile from "./Profile"


export  const info=[
    {
        exact:true,
        component:<Main />,
        path:"/"
    },
    {
        exact:true,
        component:<Login />,
        path:"/login"
    },
    {
        exact:true,
        component:<Registration />,
        path:"/reg"
    },
    {
        exact:true,
        component:<Profile />,
        path:"/profile"
    }

]