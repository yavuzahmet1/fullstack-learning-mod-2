
//? app folder içindeki page.js "/" route olan home sayfasıdır

import Link from "next/link";

//? nextjs'de tüm componentler default olarak server componenttir. client component kullanmak için "use-client" direktifini kullanmamız gerekir

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-fixed bg-no-repeat bg-cover ">
      <div className="bg-black w-full h-full bg-opacity-50">
        <div className="relative top-2/4 m-auto text-white text-center">
          <h1 className="text-5xl font-[900] mb-3">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-2xl font-[400]">Watch anywhere. Cancel anytime.</p>

          {/* //? next/link arka planda sayfayı önceden fetch edilir. Bu, client tarafı gezintilerin performansını iyileştirmek için kullanışlıdır. Görünüm alanındaki herhangi bir <Link />  önceden yüklenecektir. */}
          <Link href="/register">
            <button className="btn-danger w-[250px]">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
