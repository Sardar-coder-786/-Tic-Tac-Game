import Link from "next/link";

function GameFront({name, href, image}) {
    return ( 
        <div className="border-2 border-gray-600 rounded-2xl p-6 bg-gray-800/50 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-blue-400">
        <h1 className="text-2xl font-semibold text-gray-200 mb-3">{name}</h1>
        <Link href={href}>
          <img src={image} alt="2 Player" className="h-40 w-40 object-cover rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"/>
        </Link>
      </div>
     );
}

export default GameFront;