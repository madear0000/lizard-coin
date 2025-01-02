import React from "react";

export const useAnimations = () => {
  const plusOneAnimation = (
    event: React.MouseEvent<HTMLDivElement>,
    parentElement: HTMLDivElement,
  ) => {
    const plusOne = document.createElement("div");
    plusOne.classList.add("plus-one");
    plusOne.textContent = "+1";

    const rect = parentElement.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    plusOne.style.left = `${offsetX}px`;
    plusOne.style.top = `${offsetY}px`;

    parentElement.appendChild(plusOne);

    setTimeout(() => {
      plusOne.remove();
    }, 300);
  };

  const tapAnimation = (
    event: React.MouseEvent<HTMLDivElement>,
    setPositionX: React.Dispatch<React.SetStateAction<number>>,
    setPositionY: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.width / 2;

    const DEG = 20;
    const tiltX = (offsetX / DEG) * DEG * 0.25;
    const tiltY = (offsetY / DEG) * -DEG * 0.25;

    setPositionX(tiltX);
    setPositionY(tiltY);

    setTimeout(() => {
      setPositionX(0);
      setPositionY(0);
    }, 300);
  };

  return { plusOneAnimation, tapAnimation };
};
