import GRYFFINDOR_CREST_LOGO from "../Assets/Logos/gryffindorCrest.svg";
import GRYFFINDOR_HOUSE_PRIDE from "../Assets/Banners/gryffindorPride.png";
import GRYFFINDOR_CREST_BANNER from "../Assets/Banners/gryffindorBanner.png";

import HUFFLEPUFF_CREST_LOGO from "../Assets/Logos/hufflepuffCrest.svg";
import HUFFLEPUFF_HOUSE_PRIDE from "../Assets/Banners/hufflepuffPride.png";
import HUFFLEPUFF_CREST_BANNER from "../Assets/Banners/hufflepuffBanner.png";

import SLYTHERIN_CREST_LOGO from "../Assets/Logos/slytherinCrest.svg";
import SLYTHERIN_HOUSE_PRIDE from "../Assets/Banners/slytherinPride.png";
import SLYTHERIN_CREST_BANNER from "../Assets/Banners/slytherinBanner.png";

import RAVENCLAW_CREST_LOGO from "../Assets/Logos/ravenclawCrest.svg";
import RAVENCLAW_HOUSE_PRIDE from "../Assets/Banners/ravenclawPride.png";
import RAVENCLAW_CREST_BANNER from "../Assets/Banners/ravenclawBanner.png";

import PATRONUS_IMAGE from "../Assets/Images/mypatronus.png";
import WAND_IMAGE from "../Assets/Images/mywand.png";

import HORNED_SERPENT_IMAGE from "../Assets/Images/hornedserpent.jpg";

export const gryffindorInfo = {
  name: "gryffindor",
  tagline: "courage, bravery, determination",
  desc: "Gryffindor is one of the four Houses of Hogwarts School of Witchcraft and Wizardry, founded by Godric Gryffindor. The particular characteristics of students Sorted into Gryffindor are courage, chivalry, and determination. The emblematic animal is a lion, and its colours are red and gold.",
  crestLogo: GRYFFINDOR_CREST_LOGO,
  housePrideBanner: GRYFFINDOR_HOUSE_PRIDE,
  crestBanner: GRYFFINDOR_CREST_BANNER,
};

export const hufflepuffInfo = {
  name: "hufflepuff",
  tagline: "dedication, patience, loyalty",
  desc: "Hufflepuff is the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its students. Hufflepuffs were known to have a strong moral code, and a sense of right and wrong.",
  crestLogo: HUFFLEPUFF_CREST_LOGO,
  housePrideBanner: HUFFLEPUFF_HOUSE_PRIDE,
  crestBanner: HUFFLEPUFF_CREST_BANNER,
};

export const slytherinInfo = {
  name: "slytherin",
  tagline: "pride, ambition, cunning",
  desc: "Slytherins tend to be ambitious, shrewd, cunning, strong leaders, and achievement-oriented. They also have highly developed senses of self-preservation. This means that Slytherins tend to hesitate before acting, so as to weigh all possible outcomes before deciding exactly what should be done.",
  crestLogo: SLYTHERIN_CREST_LOGO,
  housePrideBanner: SLYTHERIN_HOUSE_PRIDE,
  crestBanner: SLYTHERIN_CREST_BANNER,
};

const ravenclawInfo = {
  name: "ravenclaw",
  tagline: "wit, learning, wisdom",
  desc: "Ravenclaw is one of the four Houses of Hogwarts School of Witchcraft and Wizardry. ... Ravenclaws are known for their wisdom, cleverness, and wit. Ravenclaw roughly corresponds to the element of air.",
  crestLogo: RAVENCLAW_CREST_LOGO,
  housePrideBanner: RAVENCLAW_HOUSE_PRIDE,
  crestBanner: RAVENCLAW_CREST_BANNER,
};

export const wizardProfile = {
  house: gryffindorInfo,
  sortedOnDate : "September 1, 2011",
  patronus: {
    name: "Bay Mare",
    image: PATRONUS_IMAGE,
  },
  wand: {
    desc: "Rowan wood with a unicorn hair core, 14 ½ and slightly yielding flexibility",
    image: WAND_IMAGE,
  },
  beast : {
    name: "Horned Serpent",
    image: HORNED_SERPENT_IMAGE
  }
};
