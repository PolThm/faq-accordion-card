const activeQnA = (QnANumber) => {
    let QnA = document.querySelector(`#QnA-${QnANumber}`);

    QnA.classList.contains("active") ? QnA.classList.remove("active") : QnA.classList.add("active");
}