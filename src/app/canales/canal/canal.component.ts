import { AppComponent } from './../../app.component';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html'
})
export class CanalComponent {

  constructor(private sanitizer: DomSanitizer) {

  }

  public html: SafeHtml = '<p>Some default HTML</p>';
  public view: string = "<div> <iframe scrolling='no' src='https://ustvgo.tv/cartoon-network/' style='border: 0px none; margin-left: 30px; height: 550px; width: 680px;'> </iframe> </div> "
  public safeHtml: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.view);

  public onButtonClick(html: string): void {
    this.view = `<div> <iframe scrolling='no' src='${html}' style='border: 0px none; margin-left: 30px; height: 550px; width: 680px;'> </iframe> </div> `;
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.view);
    this.html = this.safeHtml;
  }

  public jsonCanales: any = [
    {
        "name":"ABC",
        "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ABC-2021-LOGO.svg/800px-ABC-2021-LOGO.svg.png",
        "url":"https://ustvgo.tv/abc-live-streaming-free/",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        "name":"AMC",
        "logo":"https://images-ext-2.discordapp.net/external/gyflL0UkZDJ-HTbMjT5g-bDSxfIjIR31-6SghUP5dnU/https/www.amctv.la/wp-content/themes/amc-global-redesign/assets/images/amc/placeholder_16x9.jpg",
        "url":"https://ustvgo.tv/amc-live/",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        "name":"CBS",
        "logo":"https://images-ext-1.discordapp.net/external/AwsyY850osVSofZTcqJ_cjbmSsHgC5UJXWzdsE1byNo/https/play-lh.googleusercontent.com/R-Dlb-6gMbHZuaHJqkLs5BeGJDEmBHyrsQ-r4X3IImHvdpS_7umgjOO6-7e_4AbAXQ",
        "url":"https://ustvgo.tv/cbs-live-streaming-free/",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        "name":"Cinemax",
        "logo":"https://images-ext-1.discordapp.net/external/bHjzWI5gVzxUUJbwWSmZanXyGmfyKvk-dzKHxldchNM/https/upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cinemax_%2528Yellow%2529.svg/1200px-Cinemax_%2528Yellow%2529.svg.png",
        "url":"https://ustvgo.tv/cinemax/",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        "name":"Cartoon Network",
        "logo":"https://images-ext-1.discordapp.net/external/A394uqEgXOQTYSeovbxbZWOfvy7VevP0-F4N4n3ysB8/https/upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/800px-Cartoon_Network_2010_logo.svg.png",
        "url":"https://ustvgo.tv/cartoon-network/",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        "name":"CNN",
        "logo":"https://images-ext-2.discordapp.net/external/KjWZrhT3Fw8d8tewmdZEjo1cK55XDqxjczqQbLwVvL4/https/upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/1200px-CNN_International_logo.svg.png?width=663&height=663",
        "url":"https://ustvgo.tv/cnn-live-streaming-free/",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        "name":"Discovery",
        "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Discovery_Channel_-_Logo_2019.svg/2560px-Discovery_Channel_-_Logo_2019.svg.png",
        "url":"https://ustvgo.tv/discovery-channel-live/",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        "name":"Disney",
        "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Disney_wordmark.svg/1200px-Disney_wordmark.svg.png",
        "url":"https://ustvgo.tv/disney-channel-live-streaming-free/",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
];
  


}
