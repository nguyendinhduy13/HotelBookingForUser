import { LOCAL_API_URL } from "../../api";

export const GetHotelByID = async (id) => {
        const API = `${LOCAL_API_URL}/hotels/getbyid/${id}`;
        try {
        } catch (error) {
          return {
            status: 401,
            message:
              'An error occurred while getting all hotels. Please try again later.',
            error: error,
          };
        }
      };