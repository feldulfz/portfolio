import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotContainer } from './chatbot.container';

describe('ChatbotContainer', () => {
  let component: ChatbotContainer;
  let fixture: ComponentFixture<ChatbotContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
