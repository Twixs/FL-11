import './spinner.scss';

export const Spinner = () => {
    const root = document.getElementById("root");
    const spinnerBlock = document.createElement("div");
    spinnerBlock.className = "spinner";
    const innerSpinner = document.createElement("div");
    innerSpinner.className = "animation";
    const circle1 = document.createElement("div");
    circle1.className = "circle1";
    const circle2 = document.createElement("div");
    circle2.className = "circle2";

    innerSpinner.appendChild(circle1);
    innerSpinner.appendChild(circle2);
    spinnerBlock.appendChild(innerSpinner);
    root.appendChild(spinnerBlock);

    return spinnerBlock;
}