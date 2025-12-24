export const scrollToBottom = (element: HTMLDivElement | null) => {
  if (element) {
    element.scrollTop = element.scrollHeight;
  }
};
