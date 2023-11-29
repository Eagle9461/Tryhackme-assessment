import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../store";

export const useTaskModalHook = () => {
    const modalStatus = useAppSelector(state => state.modalStatus.modalStatus);

    const dispatch = useAppDispatch();

    const isOpen = modalStatus === "open" || modalStatus === "edit" ? true : false;

    const validationSchema = z.object({
        title: z.string().min(5, {message: "Title must be at least 5 letters."}),
        desc: z.string().min(5, {message: "Description must be at least 5 letters."}),
        taskStatus: z.boolean(),
    });

    type ValidationSchema = z.infer<typeof validationSchema>;

    const {register, handleSubmit, formState: {errors}} = useForm<ValidationSchema>({
        defaultValues: {
            title: "",
            desc: "",
            taskStatus: false
        },
        resolver: zodResolver(validationSchema)
    });

    const onSubmit: SubmitHandler<ValidationSchema> = async (data: ValidationSchema) => {
        console.log(data);
    };

    return {isOpen, register, handleSubmit, onSubmit, dispatch, errors}
}