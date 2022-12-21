import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class GetCanalesService {

  constructor(private sanitizer: DomSanitizer) { }

  public html: SafeHtml = '<p>Some default HTML</p>';
  public data: string[] = [];
  public view: string = "";
  public safeHtml: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.view);
  

  public onButtonClick(html: string): void {
    if(html!==undefined){
        this.view = `
                    <div class='channel'>                         
                        <div class='video'> 
                            <iframe class='frameVideo' scrolling='no' src='${html}'></iframe>                                                                              
                        </div>                                               
                    </div> 
                `;
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.view);
    this.html = this.safeHtml;
    }
  }

  public jsonCanales: any = [
        {
            "name":"ABC",
            "logo":"https://assets-cdn.watchdisneyfe.com/delta/assets/abc/abc-nav.png",
            "url":"https://ustvgo.tv/abc-live-streaming-free/"
        },
        {
            "name":"AMC",
            "logo":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22f46595-99fa-4e9f-8222-a2ed64891468/d768guf-e20122e5-cbde-477c-9476-94c372f967ae.png/v1/fill/w_313,h_144,strp/amc_logo_by_gamerwarrior2345_d768guf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ0IiwicGF0aCI6IlwvZlwvMjJmNDY1OTUtOTlmYS00ZTlmLTgyMjItYTJlZDY0ODkxNDY4XC9kNzY4Z3VmLWUyMDEyMmU1LWNiZGUtNDc3Yy05NDc2LTk0YzM3MmY5NjdhZS5wbmciLCJ3aWR0aCI6Ijw9MzEzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.kPBk_7l0W1x2x2BFA9T2Mh_NF0RG5kAieM4FEhVqlFM",
            "url":"https://ustvgo.tv/amc-live/"
        },
        {
            "name":"Animal Planet",
            "logo":"https://upload.wikimedia.org/wikipedia/commons/0/07/Animal_Planet_logo.svg",
            "url":"https://ustvgo.tv/animal-planet-live/"
        },
        {
            "name":"Boomerang",
            "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Boomerang_2014_logo.svg/1200px-Boomerang_2014_logo.svg.png",
            "url":"https://ustvgo.tv/boomerang/"
        },
        {
            "name":"BBC America",
            "logo":"https://i.postimg.cc/L4CdWmXv/bbc-america.png",
            "url":"https://ustvgo.tv/bbc-america-live/"
        },
        {
            "name":"CBS",
            "logo":"https://i.postimg.cc/44vwSPx5/Cbs-logo-black-and-white.png",
            "url":"https://ustvgo.tv/cbs-live-streaming-free/"
        },
        {
            "name":"Cinemax",
            "logo":"https://images-ext-1.discordapp.net/external/bHjzWI5gVzxUUJbwWSmZanXyGmfyKvk-dzKHxldchNM/https/upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cinemax_%2528Yellow%2529.svg/1200px-Cinemax_%2528Yellow%2529.svg.png",
            "url":"https://ustvgo.tv/cinemax/"
        },
        {
            "name":"Cartoon Network",
            "logo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORqfCcxsM0tkDF1b7fM4ICN7n2IHXcrs2vlXvdx3fZQjvyQ8UI_GeOa_xttXmPTFn7w&usqp=CAU",
            "url":"https://ustvgo.tv/cartoon-network/"
        },
        {
            "name":"CNN",
            "logo":"https://images-ext-2.discordapp.net/external/KjWZrhT3Fw8d8tewmdZEjo1cK55XDqxjczqQbLwVvL4/https/upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/1200px-CNN_International_logo.svg.png?width=663&height=663",
            "url":"https://ustvgo.tv/cnn-live-streaming-free/"
        },
        {
            "name":"Comedy Central",
            "logo":"https://i.postimg.cc/nr7PMf49/comedy-central.png",
            "url":"https://ustvgo.tv/comedy-central-live-free/"
        },
        {
            "name":"CW",
            "logo":"https://static.tumblr.com/9ef77d95160ff5878612093b3f2f818e/hpncd5n/BUXp3i1a2/tumblr_static_7i06wx4wbxoog80o80cckkskk.png",
            "url":"https://ustvgo.tv/the-cw-live-streaming-free/"
        },
        {
            "name":"Disney",
            "logo":"https://i.postimg.cc/9MYTJxYw/DISNEY-LOGO-WHITE-520x160-1.png",
            "url":"https://ustvgo.tv/disney-channel-live-streaming-free/"
        },
        {
            "name":"Disney XD",
            "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Logo_Disney_XD.svg/1200px-Logo_Disney_XD.svg.png",
            "url":"https://ustvgo.tv/disneyxd/"
        },
        {
            "name":"ESPN 2",
            "logo":"https://secure.espncdn.com/watchespn/images/channels/017f41a2-ef4f-39d3-9f45-f680b88cd23b.png",
            "url":"https://ustvgo.tv/espn2-live/"
        },
        {
            "name":"FOX",
            "logo":"https://companieslogo.com/img/orig/FOX.D-d3e194f3.png?t=1648883931",
            "url":"https://ustvgo.tv/fox-hd-live-streaming/"
        },
        {
            "name":"FX",
            "logo":"https://www.seekpng.com/png/full/302-3027403_fx-logo-fx-logo-white-png.png",
            "url":"https://ustvgo.tv/fx-channel-live/"
        },
        {
            "name":"HBO",
            "logo":"https://www.seekpng.com/png/full/233-2333147_design-template-by-hbo-white-logo-png.png",
            "url":"https://ustvgo.tv/hbo/"
        },
        {
            "name":"Lifetime",
            "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lifetime_tv_logo.svg/1200px-Lifetime_tv_logo.svg.png",
            "url":"https://ustvgo.tv/lifetime-channel-live/"
        },
        {
            "name":"MTV",
            "logo":"https://1000marcas.net/wp-content/uploads/2021/10/MTV-logo.png",
            "url":"https://ustvgo.tv/mtv/"
        },
        {
            "name":"National Geographic",
            "logo":"https://i.natgeofe.com/n/4da26b5c-18ee-413f-96dd-4cf3fb4a68a0/2fl-white.png",
            "url":"https://ustvgo.tv/national-geographic-live/"
        },
        {
            "name":"NBC",
            "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/NBC_Peacock_1986.svg/1200px-NBC_Peacock_1986.svg.png",
            "url":"https://ustvgo.tv/nbc/"
        },
        {
            "name":"Nickelodeon",
            "logo":"https://1000marcas.net/wp-content/uploads/2020/03/logo-Nickelodeon.png",
            "url":"https://ustvgo.tv/nickelodeon-live-streaming-free/"
        },
        {
            "name":"Nicktoons",
            "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Nicktoons_Network_logo_2009.svg/2560px-Nicktoons_Network_logo_2009.svg.png",
            "url":"https://ustvgo.tv/nicktoons/"
        },
        {
            "name":"Science",
            "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Science_Channel_logo.svg/1200px-Science_Channel_logo.svg.png",
            "url":"https://ustvgo.tv/science/"
        }
    ];
    

}
