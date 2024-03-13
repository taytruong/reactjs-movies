import{b as r,u as c,t,f as n,j as e,S as u,a as p}from"./index-7rVqNNuR.js";import{M as h}from"./MovieCard-K9T73Rxw.js";const N=()=>{const{movieId:i}=r(),{data:a}=c(t.getMovieDetails(i),n);if(!a)return null;const{backdrop_path:s,poster_path:l,title:m,genres:o,overview:x}=a;return e.jsxs("div",{className:"py-10",children:[e.jsxs("div",{className:"w-full h-[600px] relative",children:[e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),e.jsx("div",{className:"w-full h-full bg-cover bg-no-repeat",style:{backgroundImage:`url(${t.imageOriginal(s)})`}})]}),e.jsx("div",{className:"w-full h-[500px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10",children:e.jsx("img",{src:t.imageOriginal(l),className:"w-full h-full object-cover rounded-xl",alt:""})}),e.jsx("h1",{className:"text-center text-4xl font-medium text-white mb-10",children:m}),o.length>0&&e.jsx("div",{className:"flex items-center justify-center gap-x-5 mb-10",children:o.map(d=>e.jsx("span",{className:"py-2 px-4 border border-primary text-primary rounded-2xl",children:d.name},d.id))}),e.jsx("p",{className:"text-center leading-relaxed max-w-[600px] mx-auto mb-10",children:x}),e.jsx(f,{}),e.jsx(v,{}),e.jsx(g,{})]})};function f(){const{movieId:i}=r(),{data:a}=c(t.getMovieInfo(i,"credits"),n);if(!a)return null;const{cast:s}=a;return!s||s.length<=0?null:e.jsxs("div",{className:"py-5",children:[e.jsx("h2",{className:"text-center text-3xl mb-10 font-medium",children:"Casts"}),e.jsx("div",{className:"grid grid-cols-4 gap-5",children:s.slice(0,4).map(l=>e.jsxs("div",{className:"cast-item mx-auto",children:[e.jsx("img",{src:t.imageOriginal(l.profile_path),className:"w-full h-[450px] object-cover rounded-lg mb-3",alt:""}),e.jsx("h3",{className:"text-xl font-medium",children:l.name})]},l.id))})]})}function v(){const{movieId:i}=r(),{data:a}=c(t.getMovieInfo(i,"videos"),n);if(!a)return null;const{results:s}=a;return!s||s.length<=0?null:(console.log("🚀 ~ MovieVideos ~ data:",a),e.jsx("div",{className:"py-10",children:e.jsx("div",{className:"flex flex-cols-2 gap-5",children:s.slice(0,2).map(l=>e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:"mb-5 text-xl font-medium p-3 bg-primary inline-block rounded-lg",children:l.name}),e.jsx("div",{className:"w-full aspect-video",children:e.jsx("iframe",{width:"1214",height:"683",src:`https://www.youtube.com/embed/${l.key}`,title:"Youtube",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,className:"w-full h-full object-fill rounded-xl"})},l.id)]},l.id))})}))}function g(){const{movieId:i}=r(),{data:a}=c(t.getMovieInfo(i,"similar"),n);if(!a)return null;const{results:s}=a;return!s||s.length<=0?null:e.jsx("div",{className:"py-10",children:e.jsxs("div",{className:"movie-list",children:[e.jsx("h2",{className:"text-3xl font-medium mb-10",children:"Similar movies"}),e.jsx(u,{grabCursor:!0,spaceBetween:40,slidesPerView:"auto",children:s.length>0&&s.map(l=>e.jsx(p,{children:e.jsx(h,{item:l})},l.id))})]})})}export{N as default};
