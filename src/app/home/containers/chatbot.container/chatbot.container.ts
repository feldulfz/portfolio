import { Component, computed, inject, signal, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chatbot } from "../../components/chatbot/chatbot";
import { ChatbotService } from '../../../services/chatbot-service/chatbot.service';
import { PortfolioContentService } from '../../../services/portfolio-content-service/portfolio-content.service';

@Component({
  selector: 'app-chatbot-container',
  imports: [Chatbot, CommonModule],
  templateUrl: './chatbot.container.html',
  styleUrl: './chatbot.container.css'
})
export class ChatbotContainer {
  userInput = signal('');
  isOpen = signal(false);

  chatbotService = inject(ChatbotService);

  portfolioContent = inject(PortfolioContentService);
  
  constructor() {
    effect(() => {
      const about = this.portfolioContent.about();
      const webProjects = this.portfolioContent.webProjectsSignal();
      const appProjects = this.portfolioContent.appProjectsSignal();
      const otherProjects = this.portfolioContent.otherProjectsSignal();
      const techs = this.portfolioContent.logoTechsSignal();
      const tools = this.portfolioContent.logoToolsSignal();

      const context = `
        About Me: ${about.aboutMe}

        Web Projects: ${webProjects.map(t => t.title).join(', ')}
        Web Projects Details: ${webProjects.map(t => t.description).join(', ')}

        App Projects: ${appProjects.map(t => t.title).join(', ')}
        App Projects Details: ${appProjects.map(t => t.description).join(', ')}
        
        Other Projects: ${otherProjects.map(t => t.title).join(', ')}
        Other Projects Details: ${otherProjects.map(t => t.description).join(', ')}

        Technologies: ${techs.map(t => t.title).join(', ')}
        Tools: ${tools.map(t => t.title).join(', ')}
      `;

      this.chatbotService.setContext(context);
    });
  }

  // Computed signal to check if send button should be disabled
  isSendDisabled = computed(() =>
    !this.userInput().trim() ||
    this.chatbotService.isLoading() ||
    !this.chatbotService.context()
  );

  contextAvailable = computed(() => this.chatbotService.context() != null);

  async sendMessage(): Promise<void> {
    const message = this.userInput().trim();
    if (message && !this.chatbotService.isLoading()) {
      this.userInput.set('');
      await this.chatbotService.sendMessage(message);
    }
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  toggleChat(): void {
    this.isOpen.update(open => !open);
  }
}
