//https://fkhadra.github.io/react-toastify/introduction

import { toast } from "react-toastify"


export const toastSuccess = (msg) => {
    toast.success(msg, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const toastWarn = (msg) => {
    toast.warn(msg, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};
export const toastError = (msg) => {
    toast.error(msg, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};