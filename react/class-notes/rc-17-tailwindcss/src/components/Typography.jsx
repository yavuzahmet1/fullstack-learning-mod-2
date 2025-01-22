import React from "react";

const Typography = () => {
  return (
    <div>
      {/* //* Typography */}
      <p className="text-sm">Typography</p>
      <p className="text-lg">Typography</p>
      <p className="text-xl">Typography</p>
      <p className="text-2xl">Typography</p>
      <p className="text-3xl">Typography</p>
      <h1 className="text-4xl">Typography</h1>
      <h2 className="text-3xl">Typography</h2>
      <h3 className="text-2xl">Typography</h3>
      <h3 className="text-[60px]">Typography</h3>
      <h3 className="text-[4rem]">Typography</h3>

      {/* //* Line Clamp */}
      <article>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vero
          harum modi labore architecto? Itaque et facere recusandae sint quae
          inventore suscipit accusamus id alias qui? Consequuntur, sapiente.
          Eius, delectus quisquam impedit quidem incidunt dolore facilis nobis?
          Asperiores obcaecati doloremque aperiam molestiae soluta, voluptate
          porro adipisci, id officiis modi amet aut ut alias incidunt vero non
          maiores unde cupiditate ea autem quam labore vitae. Ea, ab! Voluptatum
          temporibus quod blanditiis facere, autem maxime corrupti dolores
          quisquam amet dolorum iusto iste repudiandae sint necessitatibus
          consequatur perferendis molestias, delectus perspiciatis enim ad! Iste
          neque quae esse, harum placeat impedit perspiciatis qui natus.
        </p>
      </article>
      <div>
        <p className="font-bold">Merhaba</p>
        <p className="text-center">Merhaba</p>
        <p className="underline">Merhaba</p>
        <p className="line-through">Merhaba</p>
        <p className="uppercase">Merhaba</p>
        <p className="lowercase">Merhaba</p>
        <p className="text-red-400">Merhaba</p>
        <p className="text-red-950">Merhaba</p>
        <p className="text-[#EFB036]">Merhaba</p>
        <p className="text-[rgb(76,54,239)]">Merhaba</p>
        <p className="bg-slate-500">Merhaba</p>
        <p className="bg-[#36ef8c]">Merhaba</p>
      </div>
    </div>
  );
};

export default Typography;
