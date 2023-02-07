import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>Pge Not Found</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        ipsum maxime maiores tempora illo, facilis omnis doloremque dicta!
        Dolorum eum modi velit dicta voluptatem eveniet non sit quis iste sed!
      </p>

      <p>
        Go back home <Link href="/">Homepage.</Link>
      </p>
    </div>
  );
}

export default NotFound;
