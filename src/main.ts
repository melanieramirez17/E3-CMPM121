const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

function buildFace() {
  // The prototype grew inline. Keep it this way until the refactoring checkpoint.
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute(
    "aria-label",
    "A purple and blue gradient color face making a :D expression",
  );

  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const gradient = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "linearGradient",
  );
  gradient.setAttribute("id", "cheek-shade");
  gradient.setAttribute("x1", "0%");
  gradient.setAttribute("y1", "0%");
  gradient.setAttribute("x2", "100%");
  gradient.setAttribute("y2", "0%");

  const stopOne = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  stopOne.setAttribute("offset", "0%");
  stopOne.setAttribute("stop-color", "#9D00FF");
  gradient.append(stopOne);

  const stopTwo = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  stopTwo.setAttribute("offset", "100%");
  stopTwo.setAttribute("stop-color", "#1E90FF");
  gradient.append(stopTwo);

  defs.append(gradient);
  face.append(defs);
  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "url(#cheek-shade)");
  head.setAttribute("stroke", "#302c29");
  head.setAttribute("stroke-width", "4");
  face.append(head);

  const leftEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  leftEye.setAttribute("cx", "72");
  leftEye.setAttribute("cy", "82");
  leftEye.setAttribute("rx", "6");
  leftEye.setAttribute("ry", "9");
  leftEye.setAttribute("fill", "#302c29");
  face.append(leftEye);

  const rightEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  rightEye.setAttribute("cx", "128");
  rightEye.setAttribute("cy", "82");
  rightEye.setAttribute("rx", "6");
  rightEye.setAttribute("ry", "9");
  rightEye.setAttribute("fill", "#302c29");
  face.append(rightEye);

  const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
  nose.setAttribute("x1", "100");
  nose.setAttribute("y1", "96");
  nose.setAttribute("x2", "96");
  nose.setAttribute("y2", "112");
  nose.setAttribute("stroke", "#302c29");
  nose.setAttribute("stroke-width", "4");
  nose.setAttribute("stroke-linecap", "round");
  face.append(nose);

  const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
  mouth.setAttribute("x1", "70");
  mouth.setAttribute("y1", "130");
  mouth.setAttribute("x2", "130");
  mouth.setAttribute("y2", "130");
  mouth.setAttribute("stroke", "#302c29");
  mouth.setAttribute("stroke-width", "4");
  mouth.setAttribute("stroke-linecap", "round");
  face.append(mouth);

  const mouthSegment = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  mouthSegment.setAttribute("d", "M 70 130 Q 100 190 130 130");
  mouthSegment.setAttribute("fill", "none");
  mouthSegment.setAttribute("stroke", "#302c29");
  mouthSegment.setAttribute("stroke-width", "4");
  face.append(mouthSegment);

  return face;
}

const face = buildFace();
portrait.append(face);
spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
