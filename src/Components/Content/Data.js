 export const FragnanceData = [{
    id:1 ,
    img : "https://picsum.photos/200/300",
    title: " Bag",
    desc: "abc",
    amount:"740",
    inStock:"No",
    number: 10
},
{
    id: 2,
    img : "https://picsum.photos/200/300",
    title: "Shirt",
    desc: "abc",
    amount:"640",
    inStock:"yes",
    number: 20
},
{
    id: 3,
    img : "https://picsum.photos/200/300",
    title: "it is title 3",
    desc: "abc",
    amount:"140",
    inStock:"abc",
    number: 30
},
{
    id:4 ,
    img : "https://picsum.photos/200/300",
    title: "it is title 4",
    desc: "abc",
    amount:"840",
    inStock:"abc",
    number: "/"
},
{
    id:5 ,
    img : "https://picsum.photos/200/300",
    title: "it is title 5",
    desc: "abc",
    amount:"800",
    inStock:"abc",
    number: "/"
},
{
    id:6 ,
    img : "https://picsum.photos/200/300",
    title: "it is title 6",
    desc: "abc",
    amount:"400",
    inStock:"abc",
    number: "/"
},
{
    id:7 ,
    img : "https://picsum.photos/200/300",
    title: "it is title  7",
    desc: "abc",
    amount:"200",
    inStock:"abc",
    number: "/"
},
{
    id: 8,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
    number: "/"
},
,
{
    id: 9,
    img : "https://picsum.photos/200/300",
    title: "it is title 9 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
    number: "/"
},
{
    id: 10,
    img : "https://picsum.photos/200/300",
    title: "it is title 10 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
    number: "/"
},
{
    id: 11,
    img : "https://picsum.photos/200/300",
    title: "it is title 11 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
    number: "/"
}

]

export const ShoesData =[{
    id: 1,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 2,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 3,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 4,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 5,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 6,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 7,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
]

export const HandbagsData =[{
    id: 1,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 2,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 3,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 4,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 5,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 6,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 7,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
]

export const WatchesData =[{
    id: 1,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 2,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 3,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 4,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 5,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 6,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
{
    id: 7,
    img : "https://picsum.photos/200/300",
    title: "it is title 8 ",
    desc: "abc",
    amount:"100",
    inStock:"abc",
},
]


 export function Fgfunc(){
    return FragnanceData;
}

export function fgfunc2(number) {
    return FragnanceData.find(
      (item) => item.number === number
    );
  }