interface ToastProps {
    message: string
}

const Toast: React.FC<ToastProps> = ({ message }) => {
    return (
        <div id="snackbar" className="toast">
            <div className="toast_box">
                <p>{message}</p>
                <button onClick={myFunction}className="btn-close">X</button>
            </div>
        </div>
    );
};

export default Toast;