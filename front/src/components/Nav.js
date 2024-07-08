import {Link} from "react-router-dom"


export default function Nav(){
    return(
        <nav class="navbar">
            <Link to="/home" class="navbar-brand"> Restaurant </Link>
            <div class="nav">
                <Link to="/create-customer" class="nav-link"> Create Customer </Link>
                <Link to="/customer-list" class="nav-link"> Customer List </Link>
            </div>
        </nav>
    )
}
