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


test({length:30})