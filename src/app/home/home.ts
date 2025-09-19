import { Component } from '@angular/core';
import { ProjectsContainer } from "./containers/projects.container/projects.container";
import { AboutContainer } from "./containers/about.container/about.container";
import { TechsContainer } from "./containers/techs.container/techs.container";
import { ChatbotContainer } from "./containers/chatbot.container/chatbot.container";

@Component({
  selector: 'app-home',
  imports: [ProjectsContainer, AboutContainer, TechsContainer, ChatbotContainer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
