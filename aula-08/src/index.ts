import prisma from "./database";

async function studentsByClass() {
  const students = await prisma.student.groupBy({
    _count: {
      _all: true
    },
    by: ["class"],
    orderBy: {
      _count: {
        id: "desc"
      }
    }
  })
  console.log(students);
}

async function studentsWithoutJob() {
  const students = await prisma.student.groupBy({
    _count: {_all: true},
    by: ["class"],
    where: {
      jobId: null
    },
    orderBy: {_count: {id : "desc"} }
  });
  console.log(students);
}

studentsByClass()
studentsWithoutJob()