const service = document.querySelector("#input_service");
const serviceList = document.querySelector("#service_to_avail");

service.addEventListener("hover", () => {
    serviceList.classList.toggle("active");
});