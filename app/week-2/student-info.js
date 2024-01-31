import Link from "next/link";

export default function StudentInfo() {

  return (
    <main>
      
      <div style={paragraphStyle}>
        <p>Name: Hesed Vallejo</p>
        <p>GitHub CPRG 306 Assignments: </p>
        <Link href="https://github.com/hesedvallejo/cprg306-assignments">GitHub CPRG306-Assignments Link: hesedvallejo</Link>
      </div>
      
    </main>
  )
}