// pages/blogs.tsx
import Link from "next/link";


export default function Blogs() {
  return (
    <div className="mt-[11vh]">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">مقالات</h1>

        <div className="space-y-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">
              خلیج فارس: تاریخ و اهمیت آن
            </h2>
            <p className="mt-4 text-gray-600">
              {" "}
              خلیج فارس، یکی از مهم‌ترین مناطق دریایی جهان است که در جنوب غربی
              آسیا و بین ایران و شبه جزیره عربستان قرار دارد.
            ...</p>
            <Link href="/blogs/1">
              <span className="mt-4 inline-block text-blue-600 hover:underline">
                خواندن بیشتر
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
