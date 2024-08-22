import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
        const err = error.response;
        if (Array.isArray(err?.data?.errors)) {
            for (let val of err.data.errors) {
                toast.warning(val.description);
            }
        } else if (typeof err?.data?.errors === 'object' && err?.data?.errors !== null) {
            for (let e in err.data.errors) {
                if (Array.isArray(err.data.errors[e])) {
                    toast.warning(err.data.errors[e][0]);
                } else {
                    toast.warning(err.data.errors[e]);
                }
            }
        } else if (err?.data) {
            toast.warning(err.data);
        } else if (err?.status === 401) {
            toast.warning("Please login.");
            window.history.pushState({}, "LoginPage", "/login");
        } else if (err) {
            toast.warning("An unexpected error occurred.");
        }
    } else {
        toast.warning("An unknown error occurred.");
    }
};
