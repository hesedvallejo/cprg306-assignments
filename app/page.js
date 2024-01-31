import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main>
    <h1 style={headingStyle}>CPRG 306: Web Development 2 - Assignments</h1>
    <StudentInfo />
    <div style={paragraphStyle}>
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
      </ul>
    </div>
  </main>
  );
}