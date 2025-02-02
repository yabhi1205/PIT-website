import Image from "next/image";
import NotFoundImage from "../../public/404.svg";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="md:h-96 md:w-96 sm:h-72 sm:w-72 items-center">
          <Image
            alt="not-found"
            src={NotFoundImage}
            width={0}
            height={0}
            sizes="100vw"
          />
          <a href="https://storyset.com/work" className="hidden">
            Work illustrations by Storyset
          </a>
        </div>
        <p className="text-2xl font-semibold text-gray-600 mb-4">
          Page Not Found
        </p>
        <p className="text-gray-500">
          The page you are looking for does not exist.
        </p>
        <div className="mt-4 flex justify-center items-center">
          <Link href="/">
            <div className="text-white rounded-md px-4 py-2 shadow-sm min-w-[78px] flex items-center justify-center bg-primaryColor">
              Go Back Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
