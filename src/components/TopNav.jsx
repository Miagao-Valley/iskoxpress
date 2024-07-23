
import { TbSquareRoundedPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import { auth } from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const TopNav = () => {

  const [user, loading, error] = useAuthState(auth);
    
  return (
    <>
      <nav>
        <ul className="relative flex items-center justify-between">
          <li className="font-mono font-bold text-lg">IskoXpress</li>
          <li>
            <Link to= "/create-post">
              <button type="button">
                <TbSquareRoundedPlus size={25} className="cursor-pointer" />
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
