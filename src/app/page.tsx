import Image from "next/image";
import Link from "next/link";
import { HiOutlineShieldCheck } from "react-icons/hi2";

export default async function Home() {
  return (
    <main>
      <div className="mx-4 mt-16 flex items-center justify-center">
        <div className="max-w-7xl">
          <div className="mb-20 flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <h1 className="mb-4 bg-gradient-to-tl from-green-500 via-green-500 to-green-500 bg-300% bg-clip-text text-4xl font-bold text-transparent motion-safe:animate-gradient">
                Let SootheBot Bring Calm to Your Discord!
              </h1>
              <p className="mb-8 text-xl text-slate-300">
                Soothe is a multi-purpose music bot ready to skill up and boost up your Discord server&apos;s voice activity.
              </p>
              <ul className="mb-8 text-lg text-slate-300">
                <li className="mb-2 flex items-center gap-1.5">
                  <HiOutlineShieldCheck className="h-7 w-7 text-green-500" />
                  <p>High Quality Music</p>
                </li>
                <li className="mb-2 flex items-center gap-1.5">
                  <HiOutlineShieldCheck className="h-7 w-7 text-green-500" />
                  <p>24/7 No leave you channel voice!</p>
                </li>
                <li className="flex items-center gap-1.5">
                  <HiOutlineShieldCheck className="h-7 w-7 text-green-500" />
                  <p>High quality music from Youtube, Spotify & Soundcloud, etc.</p>
                </li>
              </ul>
              <div className="flex gap-3">
                <a
                  href="/invite"
                  target="_blank"
                  className="rounded bg-[#666666] text-black px-6 py-3 text-lg font-semibold text-slate-300 transition-all duration-300 hover:bg-green-800"
                >
                  Add To Server
                </a>
                <Link
                  href="/docs/introduction/getting-started"
                  className="rounded bg-slate-700 px-6 py-3 text-lg font-semibold text-slate-300 transition-all duration-300 hover:bg-slate-800"
                >
                  Docs
                </Link>
              </div>
            </div>
            <div className="aspect-video lg:w-1/2">
              <Image
                src="https://cdn.discordapp.com/attachments/1098969636306960465/1154150876630503524/soothe.gif"
                alt="GIF"
                width={500} // Ganti dengan lebar yang sesuai
                height={300} // Ganti dengan tinggi yang sesuai
              />
            </div>
          </div>
          <div className="lg:mx-24">
            <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              <div className="max-w-prose">
                <h1 className="mb-4 text-2xl text-[#65cb88] font-semibold text-slate-200 lg:text-3xl">
                Music
                </h1>
                <p className="mb-2">
                Soothe simple music system allows for smooth playback from multiple sources, filter and feature stay in the voice channel.
                </p>
              </div>
            </div>
            <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row-reverse lg:gap-16">
              <div className="max-w-prose">
                <h1 className="mb-4 text-2xl text-[#65cb88] font-semibold text-slate-200 lg:text-3xl">
                Online Bot 24/7
                </h1>
                <p className="mb-2">
                99.99% Uptime. You don&apos;t have to worry about downtimes; Soothe is online.
                </p>
              </div>
            </div>
            <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              <div className="max-w-prose">
                <h1 className="mb-4 text-2xl text-[#65cb88] font-semibold text-slate-200 lg:text-3xl">Supports slash commands</h1>
                <p className="mb-2">
                In addition to using a prefix, Soothe supports slash commands, allowing users to access and use commands by using a forward slash as a prefix.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mb-6 bg-gradient-to-tl text-[#65cb88] from-gray-500 via-gray-500 to-green-500 bg-300% bg-clip-text text-center text-3xl font-bold text-transparent motion-safe:animate-gradient">
            What are you waiting for?
            </h2>
            <a
              href="/invite"
              target="_blank"
              className="mb-2 rounded bg-gray-700 px-6 py-3 text-lg font-semibold text-slate-300 transition-all duration-300 hover:bg-[#666666]"
            >
              Add To Server
            </a>
            <p>Doitdoitdoitdoit.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
