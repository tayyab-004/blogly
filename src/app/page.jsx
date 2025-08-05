import Link from "next/link";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, est.
        </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, iure
        provident voluptatum enim voluptatibus porro ducimus id at delectus
        illo!
      </Link>
    </div>
  );
}
