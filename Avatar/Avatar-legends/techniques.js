const waterB = document.getElementById("waterB");
const waterList = document.getElementById("waterList");

const airB = document.getElementById("airB");
const airList = document.getElementById("airList");

const earthB = document.getElementById("earthB");
const earthList = document.getElementById("earthList");

const fireB = document.getElementById("fireB");
const fireList = document.getElementById("fireList");

const groupB = document.getElementById("groupB");
const groupList = document.getElementById("groupList");

const weaponsB = document.getElementById("weaponsB");
const weaponsList = document.getElementById("weaponsList");

const techB = document.getElementById("techB");
const technologyList = document.getElementById("technologyList");

const universalB = document.getElementById("universalB");
const universalList = document.getElementById("universalList");

const allButton = document.getElementById("allB");

allButton.addEventListener("click", function() {
  const allVisible = !universalList.classList.contains('d-none')
                    && !groupList.classList.contains('d-none')
                    && !waterList.classList.contains('d-none')
                    && !earthList.classList.contains('d-none')
                    && !fireList.classList.contains('d-none')
                    && !airList.classList.contains('d-none')
                    && !weaponsList.classList.contains('d-none')
                    && !technologyList.classList.contains('d-none');
  if (allVisible) {
    universalList.classList.add('d-none');
    groupList.classList.add('d-none');
    waterList.classList.add('d-none');
    earthList.classList.add('d-none');
    fireList.classList.add('d-none');
    airList.classList.add('d-none');
    weaponsList.classList.add('d-none');
    technologyList.classList.add('d-none');
  } else {
    universalList.classList.remove('d-none');
    groupList.classList.remove('d-none');
    waterList.classList.remove('d-none');
    earthList.classList.remove('d-none');
    fireList.classList.remove('d-none');
    airList.classList.remove('d-none');
    weaponsList.classList.remove('d-none');
    technologyList.classList.remove('d-none');
  }
});


waterB.addEventListener("click", () => {
  waterList.classList.toggle("d-none");
});

airB.addEventListener("click", () => {
  airList.classList.toggle("d-none");
});

earthB.addEventListener("click", () => {
  earthList.classList.toggle("d-none");
});

fireB.addEventListener("click", () => {
  fireList.classList.toggle("d-none");
});

groupB.addEventListener("click", () => {
  groupList.classList.toggle("d-none");
});

techB.addEventListener("click", () => {
  technologyList.classList.toggle("d-none");
});

weaponsB.addEventListener("click", () => {
  weaponsList.classList.toggle("d-none");
});

universalB.addEventListener("click", () => {
  universalList.classList.toggle("d-none");
});



