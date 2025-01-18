
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-[20vh]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold">خلیج فارس</h2>
            <p className="mt-2 text-gray-400 text-sm">
              همیشه خلیج فارس خواهد موند ✌️✌️
            </p>
          </div>

          <div className="mt-6 sm:mt-0">
            <h3 className="text-lg font-semibold">لینک‌های مفید</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/aboutme">
                  <span className="hover:text-green-500">درباره ما</span>
                </Link>
              </li>
              <li>
                <Link href="/contactme">
                  <span className="hover:text-green-500">تماس با ما</span>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <span className="hover:text-green-500">مقالات</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-6 sm:mt-0">
            <h3 className="text-lg font-semibold">شبکه‌های اجتماعی</h3>
            <div className="mt-4 flex justify-center sm:justify-around space-x-4">
              <Link href="/" legacyBehavior>
                <a target="_blank" className="text-gray-400 hover:text-white">
                 ایتا
                </a>
              </Link>
              <Link href="/" legacyBehavior>
                <a target="_blank" className="text-gray-400 hover:text-white">
                روبیکا
                </a>
              </Link>
              
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} همه حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
