import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, stockSuccess } from "../features/stockSlice";
import axios from "axios";
import { useSelector } from "react-redux";
import useAxios from "./useAxios";

const useStockCall = () => {
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { token } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();
  /* -------------------------------------------------------------------------- */
  // const getFirms=async()=>{
  //     dispatch(fetchStart())
  //     try {
  //         const {data} = await axios(`${BASE_URL}firms`,
  //             {
  //                 headers: {
  //                   Authorization:`Token ${token}`,
  //                 },
  //               }
  //         )
  //         console.log(data)
  //         dispatch(firmSuccess(data))
  //     } catch (error) {
  //     dispatch(fetchFail())
  //     }

  // }

  // AxioswithTken yardımıyla veri çekme

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken.get("firms")
  //       dispatch(firmSuccess(data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };
  // const getBrands= async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken.get("brands")
  //       dispatch(firmSuccess(data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };

  /* -------------------------------------------------------------------------- */
  /*                                  GET DATA                                  */
  /* -------------------------------------------------------------------------- */
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`${url}`);
      dispatch(stockSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  /* -------------------------------------------------------------------------- */
  /*                                 DELETE DATA                                */
  /* -------------------------------------------------------------------------- */
  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.delete(`${url}/${id}`);

      console.log(data);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };


  /* -------------------------------------------------------------------------- */
  /*                                  CREATE DATA                                  */
  /* -------------------------------------------------------------------------- */
  const createStockData = async (url,info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(url,info);

      console.log(data);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getStockData, deleteStockData ,createStockData};
};

export default useStockCall;
