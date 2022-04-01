import { toast } from 'react-toastify';

export type NotifyEnum = "success" | "error" | "warn";


const Notify = (message: string, type?: NotifyEnum) => {
    switch (type) {
        case "success":
            toast.success(message)
            break;
        case "error":
            toast.error(message)
            break;
        case "warn":
            toast.warn(message)
            break;
    
        default:
            toast(message)
            break;
    }
}


export default Notify;