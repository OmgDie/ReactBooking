import Auth from "./pages/Auth";
import Booking from "./pages/Booking";
import { AUTH_ROUTE, BOOKING_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    }
    
]

export const authRoutes = [
    {
        path: BOOKING_ROUTE,
        Component: Booking
    }
]

