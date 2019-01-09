import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: any;
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  getConfig() {
    if (JSON.parse(localStorage.getItem('config'))) {
      this.config = JSON.parse(localStorage.getItem('config'));
    } else {
      this.config = {
        order: ['Make School', 'Hacker News', 'Y Combinator'],
        class: [
          { className: 'light', active: true },
          { className: 'dark', active: false },
          { className: 'red', active: false }
        ],
        users: [
          { name: 'MakeSchool', posts: 30, hidden: false },
          { name: 'newsycombinator', posts: 30, hidden: false },
          { name: 'ycombinator', posts: 30, hidden: false }
        ]
      };
      localStorage.setItem('config', JSON.stringify(this.config));
    }
    const active = this.config.class.filter(obj => {
      return obj.active === true;
    });
    this.changeColor(active[0].className);
  }

  resetConfig() {
    localStorage.removeItem('config');
    this.getConfig();
  }

  changeColor(color) {
    this.renderer.removeClass(document.body, 'red');
    this.renderer.removeClass(document.body, 'light');
    this.renderer.removeClass(document.body, 'dark');

    this.config.class.forEach(bClass => {
      bClass.active = false;
      if (bClass.className === color) {
        bClass.active = true;
      }
    });
    this.renderer.addClass(document.body, color);
    this.saveConfig();
  }

  changeOrder(newOrd) {
    this.config.order = newOrd;
    this.saveConfig();
  }

  private saveConfig() {
    localStorage.setItem('config', JSON.stringify(this.config));
  }

}
