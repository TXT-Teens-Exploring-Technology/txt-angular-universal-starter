import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  public items = [
    {
      name: 'Anthony Ramirez',
      desc: 'Sophomore Laces High School',
      src: "assets/pages/home/testimonials/anthony.jpg",
      altText: 'Anthony',
      caption: 'TXT gave me an opportunity to fully explore my capabilities as a leader, a tech innovator, and a brother. I found a group of fellow intellectuals to express myself with and learn from. Together, we are striving for a better future. I first came to TXT hungry for knowledge and opportunity. I went from being a typical high school student to becoming a startup innovator, creating meaningful products to serve my neighborhood and comfortably pitching my work to hundreds of tech and community leaders. My first TXT startup, SafeZone, is a mobile app that allows teenagers to ask sexual health questions to doctors and find local clinics to get contraception privately, using their phones. My second startup, Zealio, uses artificial intelligence to monitor attendance at schools. TXT taught me to constantly push for self-improvement. Now, as a community leader and tech disruptor, I approach every obstacle as a learning opportunity and strive to spread my knowledge with my community.'
    },
    {
      name: 'Elmer Vasquez',
      desc: 'Sophomore Laces High School',
      src: "assets/pages/home/testimonials/elmer.jpg",
      altText: 'Elmer',
      caption: 'Growing up, I always knew that I had the mind of an inventor, but I never had an opportunity to put my abilities to the test. Through TXT’s programs, I have learned to leverage my strengths and identify and work on my weaknesses. By giving me resources, strategies, and support to seek self-improvement, TXT has helped me push myself to become the best community leader, programmer, and entrepreneur I can be. I learned that I should never be hesitant to share my ideas, as they can help improve the way my peers and mentors think. As an organization, TXT has inspired me to be the architect of my own future, working hard to help myself, my family, and my community.'
    },
    {
      name: 'Nabil Khalil',
      desc: 'Sophomore Laces High School',
      src: "assets/pages/home/testimonials/nabil.jpg",
      altText: 'Nabil',
      caption: 'TXT has taught me how to become a better community leader and programmer. Through TXT,  I’ve developed my programming skills immensely. I went from building basic websites in HTML to developing my own game using Python in a matter of months. Before joining the program, I was shy. Now, I am a leader, and I feel more confident sharing my ideas while still remaining considerate of others and what they might have to say. '
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
