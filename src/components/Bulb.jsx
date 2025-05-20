import SecretBulb from "./SecretBulb";
import PullRope from "./PullRope";

export default function Bulb() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fffbe6] gap-4">
      <SecretBulb />
      <PullRope />
    </div>
  );
}
