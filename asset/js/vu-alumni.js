const mobileMenuCloseBtn = document.querySelector('#mobile-menu-btn-close');
const mobileMenuToolBar = document.querySelector('#mobile-toolbar');

const featureSpeakerDesktop = document.querySelector('.feature-speaker-bio');
const featureSpeakerMobile = document.querySelector('.feature-speaker-bio-mobile');

// menu close button
mobileMenuCloseBtn.addEventListener('click', () => {
  mobileMenuToolBar.style.display = 'none';
});

const speakerDesktop = [
  {
    id: 1,
    speakerImg: './asset/images/imgSpeaker-1.png',
    speakerName: 'Kamal Brade ',
    speakerPosition: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speakerBio: ' Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 2,
    speakerImg: './asset/images/imgSpker2.png',
    speakerName: 'Anatloli Emanuel ',
    speakerPosition: 'director of open web and digital',
    speakerBio: ' Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',

  },
  {
    id: 3,
    speakerImg: './asset/images/imgspeaker3.png',
    speakerName: 'Herriye zewie',
    speakerPosition: 'Director of Art Centre Nabi and a board member of CC Korea',
    speakerBio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',

  },
  {
    id: 4,
    speakerImg: './asset/images/imgspeaker-4.png',
    speakerName: 'Bana Teame',
    speakerPosition: 'President of Young Pirates of Europe',
    speakerBio: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    id: 5,
    speakerImg: './asset/images/speaker-5.png',
    speakerName: 'Makada Tekile',
    speakerPosition: 'Executive Director of the Wikimedia Foundation',
    speakerBio: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',

  },
  {
    id: 6,
    speakerImg: './asset/images/speaker6.png',
    speakerName: 'Yonatan Tesfay',
    speakerPosition: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    speakerBio: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },

];

const speakerMobile = [
  {

    Img: './asset/images/imgSpeaker-1.png',
    Name: 'Kamal Brade ',
    Position: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    Bio: ' Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {

    Img: './asset/images/imgSpker2.png',
    Name: 'Anatloli Emanuel ',
    Position: 'director of open web and digital',
    Bio: ' Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',

  },
];

let content = '';

speakerDesktop.forEach((speaker) => {
  content += `
 <div id="feature-speaker-hidden">
 <div class="d-flex p-1 speaker-adjust">
   <img
     class="speaker-img"
     src=${speaker.speakerImg}
     alt=${speaker.speakerName} />
   <div>
     <h2>${speaker.speakerName}</h2>
     <p class="text-danger h5">
     ${speaker.speakerPosition}
      
     </p>
     <p>
     ${speaker.speakerBio}
     </p>
   </div>
 </div>
</div>

 `;
});

featureSpeakerDesktop.innerHTML = content;

speakerMobile.forEach((speaker) => {
  content += `
    <div class="feature-speaker-mobile-content">
    <img class="speaker-img"
      src="${speaker.Img}"
      alt=${speaker.speakerName} />
    <div>
      <h4 class="p-1">${speaker.Name}</h4>
      <p class="text-danger speaker-typo-size">
      ${speaker.Position}
      </p>
      <p class="speaker-typo-size">
      ${speaker.Bio}
      </p>
    </div>
  </div>
  `;
});
featureSpeakerMobile.innerHTML = content;