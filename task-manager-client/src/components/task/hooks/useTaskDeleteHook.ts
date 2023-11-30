import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../../../services";
import { toast } from "react-toastify";

const useTaskDeleteHook = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            toast.success('Task deleted.', {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
            });
            queryClient.invalidateQueries({queryKey: ['getAllTasks']});
        },
        onError: (error:any) => {
            toast.error(`Error: ${error?.response?.data?.message}`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "error",
                position: "top-right",
            });
        },
    });

    return mutation;
}

export default useTaskDeleteHook;