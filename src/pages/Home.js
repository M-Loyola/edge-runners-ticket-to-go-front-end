import { useEffect } from "react";
import * as apiConfig from "../api/apiConfig"
export const Home = () => {
    // const dispatch = useDispatch();
    useEffect(() => {
        // const fetchData = async () => {
        //     const response = await apiConfig.getMovies();
        //     // const response = await api.getTodoTasks();
        //     // dispatch(resetTodoList(response.data));
        // }
        // fetchData();
        // console.log(fetchData);
    }, [])
    return (
        <>
            <div>This is a home page test tes test</div>
        </>
    );
}