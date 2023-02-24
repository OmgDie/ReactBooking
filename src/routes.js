import Auth from "./pages/Auth";
import Booking from "./pages/Booking";
import { AUTH_ROUTE, BOOKING_ROUTE } from "./utils/consts";

export const routes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: BOOKING_ROUTE,
        Component: Booking
    }
]

