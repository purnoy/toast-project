const buttons = document.querySelectorAll(".buttons .btn");
const notifications = document.querySelector(".notifications");
const toastDetails = {
    timer: 5000,
    success:{
        icon: "fa-circle-check",
        text: "Success: This is a success toast"
    },
    error:{
        icon: "fa-circle-xmark",
        text: "Error: This is an errortoast"
    },
    warning:{
        icon: "fa-triangle-exclamation",
        text: "Warning: This is a warning toast"
    },
    info:{
        icon: "fa-circle-info",
        text: "Info: This is an information toast"
    }
}
const removeNot = () =>{
    notifications.innerHTML = '';
}
const removeText = (toast,id) =>{
    toast.className=`toast ${id} hide`;
    setTimeout(()=>toast.remove(),800);
} 
const createToast = (id) =>{
    const {icon, text} = toastDetails[id];
    let toast = document.createElement("li"); 
    toast.className = `toast ${id}`;
    toast.innerHTML = `
        <div class="column">
            <i class="fa-solid ${icon}"></i>
            <span>${text}</span>
        </div>
        <i class="fa-solid fa-xmark" onclick="removeText(this.parentElement, id);"></i>
    `;
    notifications.appendChild(toast);
    setTimeout(() => removeText(toast,id), toastDetails.timer);
}
buttons.forEach(btn =>{
    btn.addEventListener("click", () => createToast(btn.id));
});