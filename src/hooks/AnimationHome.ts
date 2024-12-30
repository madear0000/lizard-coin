export const plusOneCoin = (event: React.MouseEvent<HTMLDivElement>) => {
  const plusOne = document.createElement("div");
  plusOne.classList.add("plus-one");
  plusOne.textContent = "+1";

  const rect = event.currentTarget.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;

  plusOne.style.left = `${offsetX}px`;
  plusOne.style.top = `${offsetY}px`;

  event.currentTarget.appendChild(plusOne);

  setTimeout(() => {
    plusOne.remove();
  }, 300);
};

export const animationTap = (
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

export const handleClick = (
  event: React.MouseEvent<HTMLDivElement>,
  setScore: React.Dispatch<React.SetStateAction<number>>,
  setPositionX: React.Dispatch<React.SetStateAction<number>>,
  setPositionY: React.Dispatch<React.SetStateAction<number>>,
) => {
  animationTap(event, setPositionX, setPositionY);
  plusOneCoin(event);
  setScore((a) => a + 1);
};
