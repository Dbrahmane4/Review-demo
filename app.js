const reviews=[
    {
        id:1,
        name: "Dhananjay Brahmane",
        job: "Web developer",
        img: "p1.jpg",
        text: "hdhdhhhsjfiojiogfjioreourejer"
    },
    {
        id:2,
        name: 'Ketaki Brahmane',
        job: 'Web designer',
        img: 'p2.webp',
        text: "hdhdhhhsjfiojiogfjioreourejer"
    },
    {
        id:1,
        name: 'Sanjay brahmane',
        job: 'Full Stack Developer',
        img: 'p1.jpg',
        text: "hdhdhhhsjfiojiogfjioreourejer"
    },
    {
        id:1,
        name: 'Sarla Brahmane',
        job: 'Data Scientist',
        img: 'p2.webp',
        text: "hdhdhhhsjfiojiogfjioreourejer"
    }
]

const img=document.getElementById('person-img');
const author=document.getElementById('author');
const job=document.getElementById('job');
const info=document.getElementById('info');

const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');
const randomBtn=document.querySelector('.random-btn');

let currentItem=0;
// load the initial item
window.addEventListener('DOMContentLoaded',function(){
    const item=reviews[0];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
})
// show person based on item

function showPerson(person){
    const item=reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;  
}

// show next person
nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>reviews.length-1)
    {
        currentItem=0;
    }
    showPerson(currentItem);
})
// show previous person
prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0)
    {
        currentItem=reviews.lenght-1;
    }
    showPerson(currentItem);
})
// random person
randomBtn.addEventListener('click',function(){
    currentItem=Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
})

