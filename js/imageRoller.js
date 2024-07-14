const EXTENSION = ".jpg";
const IMAGES_URLS = [
  "https://thumb.tildacdn.com/tild3539-3461-4139-b631-646562313466/-/cover/400x312/center/center/-/format/webp/1_1",
  "https://thumb.tildacdn.com/tild3961-6564-4435-b435-396566646464/-/cover/400x312/center/center/-/format/webp/__",
  "https://thumb.tildacdn.com/tild3732-6166-4261-a339-306563383962/-/cover/400x312/center/center/-/format/webp/1_3",
  "https://thumb.tildacdn.com/tild3132-3835-4062-a163-363835656362/-/cover/400x312/center/center/-/format/webp/1_4",
  "https://thumb.tildacdn.com/tild6164-3538-4566-a639-343433656465/-/cover/400x312/center/center/-/format/webp/1",
  "https://thumb.tildacdn.com/tild3164-6664-4134-a661-653038323639/-/cover/400x312/center/center/-/format/webp/0_5_1",
  "https://thumb.tildacdn.com/tild6335-6635-4432-a333-323232626664/-/cover/400x312/center/center/-/format/webp/1_2",
  "https://thumb.tildacdn.com/tild6364-6235-4833-b662-663431346237/-/cover/400x312/center/center/-/format/webp/1_3",
  "https://thumb.tildacdn.com/tild6432-3965-4165-a237-613238313832/-/cover/400x312/center/center/-/format/webp/0_41",
  "https://thumb.tildacdn.com/tild3861-3335-4164-b965-383233666563/-/cover/400x312/center/center/-/format/webp/1",
  "https://thumb.tildacdn.com/tild6137-3964-4234-a231-616465653961/-/cover/400x312/center/center/-/format/webp/1_6",
  "https://thumb.tildacdn.com/tild6539-3931-4466-b039-393862313230/-/cover/400x312/center/center/-/format/webp/hTwbVGXzZgU_1",
  "https://thumb.tildacdn.com/tild6530-6136-4562-a361-386161663536/-/cover/400x312/center/center/-/format/webp/3_52",
  "https://thumb.tildacdn.com/tild6132-6330-4964-b433-323531386566/-/cover/400x312/center/center/-/format/webp/z9nxZkamzyvyJpfQ2jtU",
  "https://thumb.tildacdn.com/tild6238-6132-4463-b036-653364366534/-/cover/400x312/center/center/-/format/webp/1_5",
];

let currentIndex = 0;

const getImgContainer = () => document.getElementById("imgContainer");
const getCounterContainer = () => document.getElementById("counter");

window.onload = () => {
  getCounterContainer().textContent = `${currentIndex + 1} из ${IMAGES_URLS.length}`;
};

const updateImageSrc = () => {
  const imgContainer = getImgContainer();
  imgContainer.src = `${IMAGES_URLS[currentIndex]}${EXTENSION}`;
};

const updateCounter = () => {
  const counter = getCounterContainer();
  counter.textContent = `${currentIndex + 1} из ${IMAGES_URLS.length}`;
};

const handlePrevButtonClick = () => {
  if (currentIndex === 0) {
    currentIndex = IMAGES_URLS.length - 1;
  } else {
    currentIndex -= 1;
  }
  updateImageSrc();
  updateCounter();
};

const handleNextButtonClick = () => {
  if (currentIndex === IMAGES_URLS.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  updateImageSrc();
  updateCounter();
};
