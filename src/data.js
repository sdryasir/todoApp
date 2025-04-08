export const navItems = [
    {
      label:'Home',
      link:'https://www.google.com/',
      class:'bg-red'
    },
    {
      label:'Facebook',
      link:'https://www.facebook.com/',
      class:'bg-green'
    }
]



const cardsData = Array.from({ length: 300 }, (_, index) => ({
    id: index + 1,
    title: `Card ${index + 1}`,
    subTitle: `Card ${index + 1} subtitle`,
    description: `This is card ${index + 1}`,
    btn1: {
        label: `Button 1`,
        link: `www.example${index + 1}.com`
    },
    btn2: {
        label: `Button 2`,
        link: `www.example${index + 2}.com`
    }
}));

export const cards = cardsData



function test(a){

}


export const images = [
  "https://www.medcollege.edu.gr/wp-content/uploads/2018/06/entry-and-language-requirements.jpg",
  "https://avatars.mds.yandex.net/i?id=3ec03b47ce7cce83e78088856afdfea3803c1826-5475958-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=fd97dca8a447288640c9cc47487d8c44e5b042640d0e2fc9-5331420-images-thumbs&n=13",
];



