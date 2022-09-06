import { useQuery } from "@tanstack/react-query";
import getDetails from "../api/getDetails";

export const useDetails = <T extends number | string>(id: T) => {
    return useQuery(['deatails', id], () => getDetails(id));
}
