import Link from "next/link";

export default function Home() {
  return (
    <main>
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <div>
      <ul>
          <li>
            <p>
              <Link href="/week-1">Week 1</Link>
            </p>
          </li>
          <li>
            <p>
              <Link href="/week-2">Week 2</Link>
            </p>
          </li>
          <li>
            <p>
              <Link href="/week-3">Week 3</Link>
            </p>
          </li>
          <li>
            <p>
              <Link href="/week-4">Week 4</Link>
            </p>
          </li>
          <li>
            <p>
              <Link href="/week-5">Week 5</Link>
            </p>
          </li>
          <li>
            <p>
              <Link href="/week-6">Week 6</Link>
            </p>
          </li>
          <li>
            <p>
              <Link href="/week-7">Week 7</Link>
           </p>
           </li>
           <li>
            <p>
              <Link href="/week-8">Week 8</Link>
            </p>
           </li>
           <li>
            <p>
              <Link href="/week-10">Week 9</Link>
            </p>
           </li>
      </ul>
    </div>
  </main>
  );
}