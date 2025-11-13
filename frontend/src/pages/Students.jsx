import { useEffect, useState } from "react";
import axios from "axios";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Siswa</h1>
      <table className="border w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">NIS</th>
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Kelas</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td className="p-2 border">{s.nis}</td>
              <td className="p-2 border">{s.name}</td>
              <td className="p-2 border">{s.class?.class_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
