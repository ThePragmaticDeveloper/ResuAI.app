import prisma from "@/lib/prisma";


export default async function Home() {
  const resumes = await prisma.resume.findMany()

  return (
    <ul>
      {resumes.map((resume: any) => (
        <li key={resume.id}>
        <h2>{resume.title}</h2>
        <p>{resume.description}</p>
        </li>
      ))}
      </ul>
  );
}
