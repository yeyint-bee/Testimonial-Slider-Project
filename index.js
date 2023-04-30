const testimonials = [
    {
        name: "Lyndon U",
        photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        text: "Thanks Apple! Really good. Since I invested in Apple I made over 100,000 dollars profits. Since I invested in Apple I made over 100,000 dollars profits."
    },
    {
        name: "Kendra G",
        photoUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        text: "Wow what great service, I love it! Since I invested in Apple I made over 100,000 dollars profits. The best on the net! I like Apple more and more each day because it makes my life a lot easier."
    },
    {
        name: "Merrily W",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        text: "Great job, I will definitely be ordering again! I have gotten at least 50 times the value from Apple. It's incredible. Apple is the next killer app."
    }
]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name,photoUrl,text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if(idx === testimonials.length){
        idx=0;
    }
    setTimeout(()=>{
        updateTestimonial()
    },4000)

}