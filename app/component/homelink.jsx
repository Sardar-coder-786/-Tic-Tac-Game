import Link from "next/link";

function HomeLink() {
    return ( 
        <Link
        href="/"
        className="text-blue-400 hover:text-blue-500 font-medium text-lg transition duration-300"
    >
        Go To Home
    </Link>
     );
}

export default HomeLink;