import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <section className="bg-white w-72 h-fit p-5  rounded-2xl">
        <h1 className="p-5">
          Welcome to Bruno projects
        </h1>
        <table className="w-full">
          <thead className="flex gap-3 flex-row items-center">
            <th className="font-bold">Nome dos Projetos</th>
          </thead>
          <tbody >
            <tr className="flex flex-row items-center justify-between">
              <td>
              Website Music
              </td>
              <td >
                <Button type="button" variant={"link"}>
                  <Link href={'https://www.brunopedraca.com/'}>
                    Acessar
                  </Link>
                </Button>

              </td>
            </tr>
            <hr className="mt-5"/>
            <tr className="flex flex-row items-center justify-between">
              <td>
                Channel of Programming
              </td>
              <td>
                <Button type="button" variant={"link"}>
                  <Link href={'https://www.youtube.com/channel/UCHRGbdD1Vj0IFTt9bksGnFA'}>
                    Acessar
                  </Link>
                </Button>

              </td>
            </tr>
            <hr className="mt-5"/>
            <tr className="flex flex-row items-center justify-between">
              <td>
                Misterio Bruno | Tarot
              </td>
              <td>
                <Button type="button" variant={"link"}>
                  <Link href={'https://www.youtube.com/channel/UCJ2I7-_MHE1npy9zqxMGR-w'}>
                    Acessar
                  </Link>
                </Button>

              </td>
            </tr>
            <hr className="mt-5"/>
            <tr className="flex flex-row items-center justify-between">
              <td>
                Music React
              </td>
              <td>
                <Button type="button" variant={"link"}>
                  <Link href={'https://www.youtube.com/channel/UCOJ379K6MWESuQ41u46vEGw'}>
                    Acessar
                  </Link>
                </Button>

              </td>
            </tr>
          </tbody>
        </table>
        </section>
    </main>
  );
}
