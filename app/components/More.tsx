import { useSearchParams, useLocation, Link } from "@remix-run/react";
import { separator } from './ListNewsItem.css'
import { more } from './More.css'

export default function More() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const page: number = Number(searchParams.get("page")) || 1;

  // console.log(location);
  
  return (
    <>
      <tr className={separator} />
      <tr>
        <td colSpan={2}></td>
        <td>
          <Link
            className={more}
            to={`${location.pathname}?page=${page + 1}`}
          >
            More
          </Link>
        </td>
      </tr>
      <tr className={separator} />
    </>

  )
}
