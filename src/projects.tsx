import type { IProjectCard } from "./components/ProjectCard";
import brawl from "../public/bladebralw.png";

const projects: IProjectCard[] = [
  {
    header: "BladeBrawl.io",
    description: `BladeBrawl.io is my first mobile game project. The game is a fake "multiplayer" game and it is about hitting hitting enemies with your weapon and eliminating them to earn in-game money and score. This game also has a leaderboard and a simple achievement system!. I've completed BladeBrawl in about 2 weeks and released to the Google PlayStore. I've used the Godot Game Engine for this project and also implemented the admob system.`,
    bodyDivKey: "bladebrawl-div",
    descriptionKey: "bladebrawl-description-p",
    headerDivKey: "bladebrawl-header-div",
    links: [
      {
        linkText: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.bladebrawl.io",
      },
    ],
  },
  {
    header: "Notal",
    description:
      "Notal was an experimental project of mine to create a markdown editor that has some kind of a dictionary system able to store meaning of words and show them to the user when they hover over the word in a markdown file. It was intended for students and everyone who want to keep their notes while keeping a dictionary aswell. The main selling point for me was this feature. Keeping an offline dictionary for the words that you don't know is a great integration for people who like to keep notes. It is still an ongoing project which is being developed in the Rust programming language. I'm currently using Tauri-rs to create a simple webview and for the frontend, I'm using HTML and Vanilla Javascript. ",
    bodyDivKey: "notal-div",
    descriptionKey: "notal-desc-p",
    headerDivKey: "notal-header-div",
    links: [
      {
        linkText: "Source Code",
        link: "https://github.com/oguzBatur/notal",
      },
    ],
  },
  {
    header: 'Dapp Forum',
    description: `Dapp Forum is a final case project I've made for the "Akbank Web3 Practicum". It is a simple forum which was inspired from a Turkish forum called "ekşisözlük". It is build into the blockchain and of course it is made with Solidity and Hardhat. It has simple functionalities like creating an account and posting messages. This project really helped me delve deeper into the Web3 world.`,
    links: [{link: "https://github.com/oguzBatur/dapp_forum", linkText: "Source Code"}],
    bodyDivKey: "dapp-div",
    descriptionKey: "dapp-desc-p",
    headerDivKey: "dapp-header-div",
  },
  {
    header: "RezervPark",
    description: "RezervPark is a car reservation project prototype I've made with my university friends for an Enterpreneurship Contest that was help in Turkey, Istanbul. Me and my friends were able to win this contest.",
    links: [
      {link: "http://rezervpark.vercel.app/", linkText: "Live Website"}
    ],
    bodyDivKey: "rezerv-div",
    descriptionKey: "rezerv-desc-p",
    headerDivKey: "rezerv-header-div"

  },
  {
    header: "Covid Tracker",
    description: "Covid Tracker is one of my first projects. I was interested in web scraping and fronend, so that's why I've created this website. I've created a function that scrapes a covid information website and then I extract the information to the frontend of my website. It is created with react and axios.",
    links: [
      {
        link: "https://github.com/oguzBatur/covidinfo",
        linkText: "Source Code"
      }

    ]
  }
];

export default projects;
