import { NavLink } from "react-router-dom";

const Navbar = ()=> {
  const activeStyle = "underline underline-offset-4"

  return(
    <nav className="w-full flex justify-between fixed top-0 z-10 py-6 px-8 text-sm">
      {/* LADO IZQUIERDO DEL NAVBAR */}
      <ul  className="flex gap-x-3">
        <li className="font-semibold text-lg">
          <NavLink 
            to='/'      
          >
            Shopi
          </NavLink>
        </li>

        <li>
          <NavLink 
            to='/'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }          
          >
            All
          </NavLink>
        </li>

        <li>
          <NavLink 
            to='/clothes'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Clothes
          </NavLink>
        </li>

        <li>
          <NavLink 
            to='/electronics'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Electronics
          </NavLink>
        </li>

        <li>
          <NavLink 
          to='/fornitures'
          className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Fornitures
          </NavLink>
        </li>

        <li>
          <NavLink 
          to='/toys'
          className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Toys
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to='/others'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Others
          </NavLink>
        </li>

      </ul>

      {/* LADO DERECHO DEL NAVBAR */}
      <ul  className="flex gap-x-3">
        <li className="text-black/60">
          correo@ejemplo.com
        </li>

        <li>
          <NavLink 
            to='/my-orders'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            MyOrders
          </NavLink>
        </li>

        <li>
          <NavLink 
            to='/my-account'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            My Account
          </NavLink>
        </li>

        <li>
          <NavLink 
            to='/sign-in'className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }
          >
            Sign In
          </NavLink>
        </li>

        <li>
         carrito de compras
        </li>
      </ul>
    </nav>
  );
}

export default Navbar