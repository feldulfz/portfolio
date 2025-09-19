import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Message } from '../../../services/chatbot-service/chatbot.service';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css'
})
export class Chatbot {
  // @Input() messages: Message[] = [];
  // @Input() isOpen = false;
  // @Input() isLoading = false;
  // @Input() error: string | null = null;
  // @Input() userInput = '';
  // @Input() isSendDisabled = false;
  // @Input() contextAvailable = true;

  // @Output() toggleChat = new EventEmitter<void>();
  // @Output() userInputChange = new EventEmitter<string>();
  // @Output() sendMessage = new EventEmitter<void>();
  // @Output() handleKeyPress = new EventEmitter<KeyboardEvent>();

  messages = input<Message[]>([]);
  isOpen = input<boolean>(false);
  isLoading = input<boolean>(false);
  error = input<string | null>(null);
  userInput = input<string>('');
  isSendDisabled = input<boolean>(false);
  contextAvailable = input<boolean>(false);

  toggleChat = output<void>();
  userInputChange = output<string>();
  sendMessage = output<void>();
  handleKeyPress = output<KeyboardEvent>();
}
