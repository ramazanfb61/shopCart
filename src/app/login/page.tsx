import FormLogin from "@/components/FormLogin";

async function getData() {
  const res = await fetch("/api/register", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
}

export default async function Login() {
  return (
    <div>
      <FormLogin />
      <button>Get data</button>
    </div>
  );
}
