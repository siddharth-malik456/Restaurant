import { Link } from "react-router-dom";
import "../App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Nav() {
  return (
    <nav class="navbar">
      <Link to="/home" class="navbar-link">
        {" "}
        Restaurant{" "}
      </Link>
      <Link to="/create-customer" class="navbar-link">
        {" "}
        Create Customer{" "}
      </Link>
      <Link to="/customer-list" class="navbar-link">
        {" "}
        Customer List{" "}
      </Link>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
