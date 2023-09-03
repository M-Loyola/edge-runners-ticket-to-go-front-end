import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./css/TodoList.css";
import { api } from "../api/api";
export const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const response = await api;
            // const response = await api.getTodoTasks();
            // dispatch(resetTodoList(response.data));
        }
        fetchData();
        console.log(fetchData);
    }, [])
    return (
        <>
            <div>This is a home page test tes test</div>
        </>
    );
}