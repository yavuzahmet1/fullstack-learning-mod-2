const API_KEY = process.env.TMDB_KEY;

export const getirMovies=async(type)=>{
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`
  );

  //? next.js ile fetch api çekilen verileri default olarak cache'ler. bu özelliği option objesi ile değiştirebiliriz
  //   const res = await fetch(URL, { cache: "force-cache" }); default
  
  //   const res = await fetch(URL, { cache: "no-store" });
  //cache'leme
  //   const res = await fetch(URL, { next: { revalidate: 10 } });
  // belirli saniye aralıklarla veriyi tekrar çek tekrar

  if (!res.ok) {
    throw new Error("fetch işleminde hata var");
  }

  const { results } = await res.json();

  return results;
}

