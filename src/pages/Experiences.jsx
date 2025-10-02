import React from "react";

const items = [
  {title:"Private Chef", desc:"Seasonal menus designed around you.", img:"/images/exp-chef.jpg"},
  {title:"Yacht Charter", desc:"Discover hidden coves and islands.", img:"/images/exp-yacht.jpg"},
  {title:"Wellness & Spa", desc:"In-villa treatments and sunrise yoga.", img:"/images/exp-spa.jpg"},
];

export default function Experiences(){
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl mb-6">Experiences</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((x,i)=>(
          <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-soft">
            <div className="aspect-[4/3]"><img src={x.img} className="w-full h-full object-cover"/></div>
            <div className="p-5">
              <div className="font-display text-xl">{x.title}</div>
              <p className="text-black/70 mt-1 font-body">{x.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
